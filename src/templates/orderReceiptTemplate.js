// import { formatCurrency } from "../Utiles/Currency.js";

// // Generate HTML email template with modern design
// export const generateOrderReceiptHTML = (
//   order,
//   customerName,
//   imageurl,
//   restaurantName
// ) => {
//   const {orderNumber, items, totalAmount, deliveryAddress, orderStatus, paymentStatus, createdAt, subTotal, taxAmount, discount, deliveryCharge} = order;

//   // Calculate totals properly
//   const calculatedSubTotal = subTotal || calculateOrderTotal(items);
//   const calculatedDiscount = discount || 0;
//   const calculatedTax = taxAmount || 0;
//   const calculatedDeliveryCharge = deliveryCharge || 0;
//   const calculatedTotal =
//     totalAmount ||
//     calculatedSubTotal -
//       calculatedDiscount +
//       calculatedTax +
//       calculatedDeliveryCharge;

//   const formattedDate = formatDate(createdAt);

//   return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="utf-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Order Receipt</title>
//       <style>
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
//           line-height: 1.6;
//           color: #333;
//           background-color: #f5f7fa;
//           padding: 20px 0;
//         }

//         .email-container {
//           max-width: 600px;
//           margin: 0 auto;
//           background-color: #ffffff;
//           border-radius: 12px;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//           overflow: hidden;
//         }

//         .header {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           text-align: center;
//           padding: 40px 20px;
//         }

//         .header h1 {
//           font-size: 28px;
//           font-weight: 600;
//           margin-bottom: 8px;
//         }

//         .header .subtitle {
//           font-size: 16px;
//           opacity: 0.9;
//         }

//         .header img {
//           max-width: 150px;
//           height: auto;
//           margin-bottom: 15px;
//         }

//         .content {
//           padding: 40px 30px;
//         }

//         .greeting {
//           font-size: 18px;
//           margin-bottom: 25px;
//           color: #2d3748;
//         }

//         .order-info-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//           margin-bottom: 35px;
//           background-color: #f8fafc;
//           padding: 25px;
//           border-radius: 8px;
//           border-left: 4px solid #667eea;
//         }

//         .info-item {
//           display: flex;
//           flex-direction: column;
//         }

//         .info-label {
//           font-size: 12px;
//           font-weight: 600;
//           color: #718096;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           margin-bottom: 3px;
//         }

//         .info-value {
//           font-size: 14px;
//           font-weight: 500;
//           color: #2d3748;
//           word-wrap: break-word;
//         }

//         .status-badge {
//           display: inline-block;
//           padding: 4px 12px;
//           border-radius: 20px;
//           font-size: 12px;
//           font-weight: 600;
//           text-transform: capitalize;
//         }

//         .status-delivered { background-color: #bee3f8; color: #2b6cb0; }
//         .status-pending { background-color: #fefcbf; color: #b7791f; }
//         .status-paid { background-color: #c6f6d5; color: #2f855a; }
//         .status-unpaid { background-color: #fed7d7; color: #c53030; }

//         .section-title {
//           font-size: 20px;
//           font-weight: 600;
//           color: #2d3748;
//           margin-bottom: 10px;
//           padding-bottom: 8px;
//           border-bottom: 2px solid #e2e8f0;
//         }

//         .items-table {
//           width: 100%;
//           border-collapse: collapse;
//           margin-bottom: 25px;
//           border-radius: 8px;
//           overflow: hidden;
//           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//         }

//         .items-table th {
//           background: linear-gradient(135deg, #4a5568, #2d3748);
//           color: white;
//           padding: 16px 12px;
//           text-align: left;
//           font-weight: 600;
//           font-size: 14px;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         .items-table td {
//           padding: 16px 12px;
//           border-bottom: 1px solid #e2e8f0;
//           background-color: white;
//         }

//         .items-table tr:nth-child(even) td {
//           background-color: #f7fafc;
//         }

//         .items-table tr:hover td {
//           background-color: #edf2f7;
//           transition: background-color 0.2s ease;
//         }

//         .item-name {
//           font-weight: 500;
//           color: #2d3748;
//         }

//         .quantity-badge {
//           background-color: #667eea;
//           color: white;
//           padding: 2px 8px;
//           border-radius: 12px;
//           font-size: 12px;
//           font-weight: 600;
//         }

//         .total-section {
//           background: linear-gradient(135deg, #f7fafc, #edf2f7);
//           padding: 25px;
//           border-radius: 8px;
//           margin-bottom: 35px;
//         }

//         .total-row {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 8px;
//         }

//         .total-row.final {
//           font-size: 18px;
//           font-weight: 700;
//           color: #2d3748;
//           margin-top: 15px;
//           padding-top: 15px;
//           border-top: 2px solid #e2e8f0;
//         }

//         .address-section {
//           background-color: #f8fafc;
//           padding: 25px;
//           border-radius: 8px;
//           border-left: 4px solid #48bb78;
//           margin-bottom: 35px;
//         }

//         .address-content {
//           line-height: 1.8;
//         }

//         .address-name {
//           font-weight: 600;
//           font-size: 16px;
//           color: #2d3748;
//           margin-bottom: 8px;
//         }

//         .address-details {
//           color: #4a5568;
//           font-size: 14px;
//         }

//         .footer {
//           background: linear-gradient(135deg, #2d3748, #4a5568);
//           color: white;
//           text-align: center;
//           padding: 30px 20px;
//         }

//         .footer-message {
//           font-size: 18px;
//           font-weight: 500;
//           margin-bottom: 15px;
//         }

//         .footer-signature {
//           font-size: 14px;
//           opacity: 0.9;
//           line-height: 1.6;
//         }

//         .divider {
//           height: 1px;
//           background: linear-gradient(to right, transparent, #e2e8f0, transparent);
//           margin: 30px 0;
//         }

//         @media only screen and (max-width: 600px) {
//           .email-container {
//             margin: 0 5px;
//             border-radius: 8px;
//           }

//           .content {
//             padding: 20px 15px;
//           }

//           .info-value {
//             font-size: 12px;
//             margin-bottom:3px;
//           }

//           .order-info-grid {
//             grid-template-columns: 1fr;
//             gap: 15px;
//           }

//           .items-table th,
//           .items-table td {
//             padding: 12px 8px;
//             font-size: 12px;
//           }

//           .header h1 {
//             font-size: 24px;
//           }

//           .total-row.final {
//             font-size: 16px;
//           }
//         }
//       </style>
//     </head>
//     <body>
//       <div class="email-container">
//         <div class="header">
//           <img src="${
//             "http://localhost:8000" + imageurl ||
//             "https://via.placeholder.com/150"
//           }" alt="Restaurant Logo">
//           <h1>Thank You for Your Order!</h1>
//         </div>

//         <div class="content">
//           <div class="greeting">
//             Hello ${
//               customerName || deliveryAddress?.FullName || "Valued Customer"
//             },
//           </div>

//           <p style="margin-bottom: 30px; color: #4a5568; font-size: 16px;">
//             Your order has been successfully delivered. We hope you enjoy your meal!
//           </p>

//           <div class="order-info-grid">
//             <div class="info-item">
//               <span class="info-label">Order No:</span>
//               <span class="info-value">#${
//                 orderNumber || order._id || "N/A"
//               }</span>
//             </div>
//             <div class="info-item">
//               <span class="info-label">Order Date</span>
//               <span class="info-value">${formattedDate}</span>
//             </div>
//             <div class="info-item">
//               <span class="info-label">Order Status</span>
//               <span class="info-value">
//                 <span class="status-badge status-${(
//                   orderStatus || "pending"
//                 ).toLowerCase()}">${orderStatus || "Pending"}</span>
//               </span>
//             </div>
//             <div class="info-item">
//               <span class="info-label">Payment Status</span>
//               <span class="info-value">
//                 <span class="status-badge status-${(
//                   paymentStatus || "unpaid"
//                 ).toLowerCase()}">${paymentStatus || "Unpaid"}</span>
//               </span>
//             </div>
//           </div>

//           <h2 class="section-title">Order Summary</h2>
//           <table class="items-table">
//             <thead>
//               <tr>
//                 <th>Item</th>
//                 <th>Qty</th>
//                 <th>Price</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               ${
//                 items && items.length > 0
//                   ? items
//                       .map((item) => {
//                         const itemName =
//                           item.FullName ||
//                           (item.menuItemId && item.menuItemId.name) ||
//                           item.name ||
//                           "Unknown Item";

//                         const basePrice = item.price || 0;
//                         const variantPrice =
//                           item.variant && item.variant.price
//                             ? item.variant.price
//                             : null;
//                         const itemPrice =
//                           variantPrice !== null ? variantPrice : basePrice;

//                         const itemQuantity = item.quantity || 1;
//                         const itemTotal = itemPrice * itemQuantity;

//                         return `
//                   <tr>
//                     <td class="item-name">${itemName}</td>
//                     <td><span class="quantity-badge">${itemQuantity}</span></td>
//                     <td>${formatCurrency(itemPrice)}</td>
//                     <td style="font-weight: 600;">${formatCurrency(
//                       itemTotal
//                     )}</td>
//                   </tr>
//                 `;
//                       })
//                       .join("")
//                   : '<tr><td colspan="4" style="text-align: center;">No items found</td></tr>'
//               }
//             </tbody>
//           </table>

//           <div class="total-section">
//             <div class="total-row">
//               <span>Sub Total:</span>
//               <span>${formatCurrency(calculatedSubTotal)}</span>
//             </div>
//             ${
//               calculatedTax > 0
//                 ? `
//               <div class="total-row">
//                 <span>Tax:</span>
//                 <span>${formatCurrency(calculatedTax)}</span>
//               </div>
//             `
//                 : ""
//             }

//             ${
//               calculatedDiscount > 0
//                 ? `
//               <div class="total-row">
//                 <span>Discount:</span>
//                 <span>-${formatCurrency(calculatedDiscount)}</span>
//               </div>`
//                 : ""
//             }

//             ${
//               calculatedDeliveryCharge > 0
//                 ? `
//               <div class="total-row">
//                 <span>Delivery Charge:</span>
//                 <span>${formatCurrency(calculatedDeliveryCharge)}</span>
//               </div>`
//                 : ""
//             }
//             <div class="total-row final">
//               <span>Total Amount:</span>
//               <span>${formatCurrency(calculatedTotal)}</span>
//             </div>
//           </div>
//           ${
//             deliveryAddress
//               ? `
//             <h2 class="section-title">Delivery Information</h2>
//             <div class="address-section">
//               <div class="address-content">
//                 <div class="address-name">${
//                   deliveryAddress.FullName || "N/A"
//                 }</div>
//                 <div class="address-details">
//                   📞 ${deliveryAddress.PhoneNumber || "N/A"}<br>
//                   📍 ${deliveryAddress.Address || "N/A"}<br>
//                   ${deliveryAddress.City || "N/A"}${
//                   deliveryAddress.ZIPCode ? `, ${deliveryAddress.ZIPCode}` : ""
//                 }
//                 </div>
//               </div>
//             </div>
//           `
//               : ""
//           }
//         </div>
//         <div class="footer">
//           <div class="footer-message">Thank you for choosing us! 🍽️</div>
//           <div class="footer-signature">
//             Best regards,<br>
//             <strong>${
//               restaurantName || "Charcoal Chicken"
//             } Restaurant Team</strong><br>
//             <small>Need help? Reply to this email or contact our support team.</small>
//             &copy;  ${new Date().getFullYear()} ${
//     restaurantName || "Charcoal Chicken"
//   }. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </body>
//     </html>
//   `;
// };

// // Generate text email template (for fallback)
// export const generateOrderReceiptText = (
//   order,
//   customerName,
//   restaurantName
// ) => {
//   const {
//     orderNumber,
//     items,
//     totalAmount,
//     deliveryAddress,
//     orderStatus,
//     paymentStatus,
//     createdAt,
//     subTotal,
//     taxAmount,
//     discount,
//     deliveryCharge,
//   } = order;

//   // Calculate totals properly
//   const calculatedSubTotal = subTotal || calculateOrderTotal(items);
//   const calculatedDiscount = discount || 0;
//   const calculatedTax = taxAmount || 0;
//   const calculatedDeliveryCharge = deliveryCharge || 0;
//   const calculatedTotal =
//     totalAmount ||
//     calculatedSubTotal -
//       calculatedDiscount +
//       calculatedTax +
//       calculatedDeliveryCharge;

//   const formattedDate = formatDate(createdAt);

//   const itemsText =
//     items && items.length > 0
//       ? items
//           .map((item, index) => {
//             const itemName =
//               item.FullName ||
//               (item.menuItemId && item.menuItemId.name) ||
//               item.name ||
//               "Unknown Item";

//             const basePrice = item.price || 0;
//             const variantPrice =
//               item.variant && item.variant.price ? item.variant.price : null;
//             const itemPrice = variantPrice !== null ? variantPrice : basePrice;

//             const itemQuantity = item.quantity || 1;
//             const itemTotal = itemPrice * itemQuantity;

//             return `${index + 1}. ${itemName}
//           Quantity: ${itemQuantity}
//           Price: ${formatCurrency(itemPrice)}
//           Subtotal: ${formatCurrency(itemTotal)}`;
//           })
//           .join("\n\n")
//       : "No items found";
//   return `

// ═══════════════════════════════════════
//           ORDER DELIVERED SUCCESSFULLY
// ═══════════════════════════════════════
// From: ${restaurantName || ""}

// Hello ${customerName || deliveryAddress?.FullName || "Valued Customer"},

// Thank you for your order! Here are the details:

// ORDER INFORMATION:
// 
// Order Number: #${orderNumber || order._id || "N/A"}
// Order Date: ${formattedDate}
// Order Status: ${orderStatus || "Pending"}
// Payment Status: ${paymentStatus || "Unpaid"}

// ORDER SUMMARY:
// 
// ${itemsText}

// BILLING DETAILS:
// 
// Sub Total: ${formatCurrency(calculatedSubTotal)}${
//     calculatedTax > 0
//       ? `
// Tax: ${formatCurrency(calculatedTax)}`
//       : ""
//   }${
//     calculatedDiscount > 0
//       ? `
// Discount: -${formatCurrency(calculatedDiscount)}`
//       : ""
//   }${
//     calculatedDeliveryCharge > 0
//       ? `
// Delivery Charge: ${formatCurrency(calculatedDeliveryCharge)}`
//       : ""
//   }
// ─────────────────────────────────────
// TOTAL AMOUNT: ${formatCurrency(calculatedTotal)}
// ─────────────────────────────────────

// ${
//   deliveryAddress
//     ? `DELIVERY ADDRESS:
// ─────────────────────────────────────
// ${deliveryAddress.FullName || "N/A"}

// Phone: ${deliveryAddress.PhoneNumber || "N/A"}

// Address: ${deliveryAddress.Address || "N/A"}

// City: ${deliveryAddress.City || "N/A"} ${deliveryAddress.ZIPCode || "N/A"}`
//     : ""
// }
// ═══════════════════════════════════════

// Thank you for choosing ${restaurantName || "Charcoal Chicken"}!

// Best regards,
// ${restaurantName || "Charcoal Chicken"} Team

// Need help? Reply to this email or contact our support team.
//   `;
// };

// // Helper function to calculate order total if not provided
// const calculateOrderTotal = (items) => {
//   try {
//     if (!items || !Array.isArray(items)) return 0;

//     return items.reduce((total, item) => {
//       const basePrice = item.price || 0;
//       const variantPrice =
//         item.variant && item.variant.price ? item.variant.price : null;
//       const itemPrice = variantPrice !== null ? variantPrice : basePrice;
//       const itemQuantity = item.quantity || 1;
//       return total + itemPrice * itemQuantity;
//     }, 0);
//   } catch (error) {
//     console.error("Error calculating order total:", error);
//     return 0;
//   }
// };

// // Enhanced date formatting function
// const formatDate = (date) => {
//   if (!date) return "N/A";

//   try {
//     const d = new Date(date);
//     const mm = String(d.getMonth() + 1).padStart(2, "0");
//     const dd = String(d.getDate()).padStart(2, "0");
//     const yy = String(d.getFullYear()).slice(-2);

//     return `${mm}/${dd}/${yy}`;
//   } catch (error) {
//     console.error("Error formatting date:", error);
//     return "N/A";
//   }
// };

import { formatCurrency } from "../Utiles/Currency.js";

export const generateOrderReceiptHTML = (
  order,
  customerName,
  imageurl,
  restaurantName,
) => {
  const {
    orderNumber,
    items,
    totalAmount,
    deliveryAddress,
    orderStatus,
    paymentStatus,
    createdAt,
    subTotal,
    taxAmount,
    discount,
    deliveryCharge,
  } = order;

  const calculatedSubTotal = subTotal || calculateOrderTotal(items);
  const calculatedDiscount = discount || 0;
  const calculatedTax = taxAmount || 0;
  const calculatedDeliveryCharge = deliveryCharge || 0;
  const calculatedTotal =
    totalAmount ||
    calculatedSubTotal -
      calculatedDiscount +
      calculatedTax +
      calculatedDeliveryCharge;

  const formattedDate = formatDate(createdAt);
  const displayName =
    customerName || deliveryAddress?.FullName || "Valued Customer";
  const displayOrderId = orderNumber || order._id || "N/A";
  const displayStatus = orderStatus || "Pending";
  const displayPayment = paymentStatus || "Unpaid";

  const statusColor = (s) => {
    const map = {
      delivered: { bg: "#EAF3DE", color: "#27500A" },
      pending: { bg: "#FAEEDA", color: "#633806" },
      paid: { bg: "#EAF3DE", color: "#27500A" },
      unpaid: { bg: "#FCEBEB", color: "#791F1F" },
      cancelled: { bg: "#FCEBEB", color: "#791F1F" },
    };
    return map[(s || "").toLowerCase()] || { bg: "#F1EFE8", color: "#444441" };
  };

  const os = statusColor(displayStatus);
  const ps = statusColor(displayPayment);

  const itemRows =
    items && items.length > 0
      ? items
          .map((item, index) => {
            const itemName =
              item.FullName ||
              (item.menuItemId && item.menuItemId.name) ||
              item.name ||
              "Unknown Item";
            const basePrice = item.price || 0;
            const variantPrice = item.variant?.price ?? null;
            const itemPrice = variantPrice !== null ? variantPrice : basePrice;
            const itemQuantity = item.quantity || 1;
            const itemTotal = itemPrice * itemQuantity;
            const rowBg = index % 2 === 0 ? "#ffffff" : "#fafaf9";

            return `
            <div style="
              padding: 12px 16px;
              display: grid;
              grid-template-columns: 1fr 52px 72px 72px;
              gap: 8px;
              align-items: center;
              border-bottom: 0.5px solid #f0ebe4;
              background: ${rowBg};
            ">
              <div style="font-size: 14px; font-weight: 600; color: #1f2937;">${itemName}</div>
              <div style="text-align: center;">
                <span style="display:inline-block; background:#FAECE7; color:#712B13; font-size:12px; font-weight:700; padding:2px 8px; border-radius:20px;">${itemQuantity}</span>
              </div>
              <div style="font-size: 13px; color: #6b7280; text-align: right;">${formatCurrency(itemPrice)}</div>
              <div style="font-size: 14px; font-weight: 700; color: #1f2937; text-align: right;">${formatCurrency(itemTotal)}</div>
            </div>`;
          })
          .join("")
      : `<div style="padding:20px;text-align:center;color:#aaa;font-size:14px;">No items found</div>`;

  const totalsRows = `
    <div style="padding: 12px 16px; background: #fafaf9; border-bottom: 0.5px solid #e8e4de;">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
        <span style="font-size:13px;color:#6b7280;">Subtotal</span>
        <span style="font-size:13px;color:#1f2937;font-weight:600;">${formatCurrency(calculatedSubTotal)}</span>
      </div>
      ${
        calculatedDeliveryCharge > 0
          ? `<div style="display:flex;justify-content:space-between;margin-bottom:6px;">
               <span style="font-size:13px;color:#6b7280;">Delivery charge</span>
               <span style="font-size:13px;color:#1f2937;font-weight:600;">${formatCurrency(calculatedDeliveryCharge)}</span>
             </div>`
          : ""
      }
      ${
        calculatedDiscount > 0
          ? `<div style="display:flex;justify-content:space-between;margin-bottom:6px;">
               <span style="font-size:13px;color:#3B6D11;">Discount</span>
               <span style="font-size:13px;color:#3B6D11;font-weight:600;">- ${formatCurrency(calculatedDiscount)}</span>
             </div>`
          : ""
      }
      ${
        calculatedTax > 0
          ? `<div style="display:flex;justify-content:space-between;margin-bottom:6px;">
               <span style="font-size:13px;color:#6b7280;">Tax</span>
               <span style="font-size:13px;color:#1f2937;font-weight:600;">${formatCurrency(calculatedTax)}</span>
             </div>`
          : ""
      }
    </div>
    <div style="background:#2C2C2A; padding:14px 18px; display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:14px;font-weight:700;color:#D3D1C7;">Total amount</span>
      <span style="font-size:22px;font-weight:700;color:#ffffff;">${formatCurrency(calculatedTotal)}</span>
    </div>`;

  const deliverySection = deliveryAddress
    ? `
    <div style="padding: 0 32px 22px;">
      <div style="font-size:12px;font-weight:700;color:#aaa;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px;">Delivery information</div>
      <div style="border-left:3px solid #639922;padding:13px 16px;background:#EAF3DE;border-radius:0 8px 8px 0;">
        <div style="font-size:14px;font-weight:700;color:#27500A;margin-bottom:6px;">${deliveryAddress.FullName || "N/A"}</div>
        <div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:4px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B6D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:2px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.92 16.92z"/></svg>
          <span style="font-size:13px;color:#3B6D11;">${deliveryAddress.PhoneNumber || "N/A"}</span>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B6D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span style="font-size:13px;color:#3B6D11;line-height:1.6;">
            ${deliveryAddress.Address || ""}${deliveryAddress.City ? `, ${deliveryAddress.City}` : ""}${deliveryAddress.ZIPCode ? ` – ${deliveryAddress.ZIPCode}` : ""}
          </span>
        </div>
      </div>
    </div>`
    : "";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Order Receipt – ${restaurantName || "Charcole Chicken"}</title>
  <style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f0eb; color: #333; }
  .wrapper { padding: 40px 16px; }
  .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e8e0d8; }
  .header { background: #D85A30; padding: 26px 32px; display: flex; align-items: center; gap: 16px; }
  .header-icon { width: 52px; height: 52px; border-radius: 12px; background: rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .header-logo { margin-left: auto; width: 48px; height: 48px; border-radius: 10px; background: rgba(255,255,255,0.12); overflow: hidden; flex-shrink: 0; }
  .header-logo img { width: 100%; height: 100%; object-fit: cover; }
  .header-label { color: #FAECE7; font-size: 11px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 3px; }
  .header-title { color: #ffffff; font-size: 20px; font-weight: 700; line-height: 1.25; }
  .intro { padding: 24px 32px 0; }
  .intro p { font-size: 15px; color: #444; line-height: 1.75; margin-bottom: 20px; }
  .intro strong { color: #1f2937; }
  .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 22px; }
  .meta-cell { background: #f9f7f4; border-radius: 8px; padding: 12px 14px; border: 0.5px solid #e8e4de; }
  .meta-label { font-size: 11px; font-weight: 700; color: #aaa; text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 4px; }
  .meta-value { font-size: 13px; font-weight: 700; color: #1f2937; }
  .meta-value.mono { font-family: 'Courier New', Courier, monospace; }
  .status-pill { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 700; }
  .section { padding: 0 32px 22px; }
  .section-label { font-size: 12px; font-weight: 700; color: #aaa; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px; }
  .items-wrap { border-radius: 10px; border: 0.5px solid #e8e4de; overflow: hidden; }
  .items-header { background: #f9f7f4; padding: 10px 16px; display: grid; grid-template-columns: 1fr 52px 72px 72px; gap: 8px; border-bottom: 0.5px solid #e8e4de; }
  .col-head { font-size: 11px; font-weight: 700; color: #aaa; text-transform: uppercase; letter-spacing: 0.06em; }
  .col-head.right { text-align: right; }
  .col-head.center { text-align: center; }
  .address-box { border-left: 3px solid #639922; padding: 13px 16px; background: #EAF3DE; border-radius: 0 8px 8px 0; }
  .address-name { font-size: 14px; font-weight: 700; color: #27500A; margin-bottom: 6px; }
  .address-row { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 4px; }
  .address-text { font-size: 13px; color: #3B6D11; line-height: 1.6; }
  .signoff { margin: 0 32px; padding: 18px 0; border-top: 0.5px solid #f0ebe4; text-align: center; }
  .signoff p { font-size: 14px; color: #888; margin-bottom: 5px; line-height: 1.65; }
  .signoff .brand { font-size: 15px; font-weight: 700; color: #1f2937; margin: 0; }
  .signoff .brand span { color: #D85A30; }
  .footer { border-top: 0.5px solid #f0ebe4; padding: 14px 32px; display: flex; align-items: center; justify-content: space-between; }
  .footer-brand { display: flex; align-items: center; gap: 6px; }
  .footer-brand-name { font-size: 12px; color: #D85A30; font-weight: 700; }
  .footer-copy { font-size: 12px; color: #bbb; }
  @media only screen and (max-width: 500px) {
    .header { padding: 20px; gap: 12px; }
    .intro, .section { padding-left: 20px; padding-right: 20px; }
    .signoff, .footer { padding-left: 20px; padding-right: 20px; }
    .meta-grid { grid-template-columns: 1fr; }
    .items-header, .items-row { grid-template-columns: 1fr 40px 60px 60px; }
  }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="header-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
        <div>
          <div class="header-label">Order receipt</div>
          <div class="header-title">Thank you for your order!</div>
        </div>
        <div class="header-logo">
          <img src="${imageurl}" alt="${restaurantName}" />
        </div>
      </div>
      <div class="intro">
        <p>Hi <strong>${displayName}</strong>, your order has been successfully delivered. We hope you enjoy your meal!</p>
        <div class="meta-grid">
          <div class="meta-cell">
            <div class="meta-label">Order no.</div>
            <div class="meta-value mono">#${displayOrderId}</div>
          </div>
          <div class="meta-cell">
            <div class="meta-label">Order date</div>
            <div class="meta-value">${formattedDate}</div>
          </div>
          <div class="meta-cell">
            <div class="meta-label">Order status</div>
            <span class="status-pill" style="background:${os.bg};color:${os.color};">${displayStatus}</span>
          </div>
          <div class="meta-cell">
            <div class="meta-label">Payment</div>
            <span class="status-pill" style="background:${ps.bg};color:${ps.color};">${displayPayment}</span>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-label">Order summary</div>
        <div class="items-wrap">
          <div class="items-header">
            <div class="col-head">Item</div>
            <div class="col-head center">Qty</div>
            <div class="col-head right">Price</div>
            <div class="col-head right">Total</div>
          </div>
          ${itemRows}
          ${totalsRows}
        </div>
      </div>
      ${deliverySection}
      <div class="signoff">
        <p>We hope to serve you again soon.</p>
        <p class="brand">Thank you for choosing <span>${restaurantName || "Charcole Chicken"}</span></p>
      </div>
      <div class="footer">
        <div class="footer-brand">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D85A30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4l3 3"/>
          </svg>
          <span class="footer-brand-name">${restaurantName || "Charcole Chicken"}</span>
        </div>
        <span class="footer-copy">&copy; ${new Date().getFullYear()} All rights reserved.</span>
      </div>
    </div>
  </div>
</body>
</html>`;
};

export const generateOrderReceiptText = (order, customerName, restaurantName) => {
  const {orderNumber, items, totalAmount, deliveryAddress, orderStatus, paymentStatus, createdAt, subTotal, taxAmount, discount, deliveryCharge } = order;
  const calculatedSubTotal = subTotal || calculateOrderTotal(items);
  const calculatedDiscount = discount || 0;
  const calculatedTax = taxAmount || 0;
  const calculatedDeliveryCharge = deliveryCharge || 0;
  const calculatedTotal = totalAmount || calculatedSubTotal - calculatedDiscount + calculatedTax + calculatedDeliveryCharge;
  const formattedDate = formatDate(createdAt);
  const itemsText = items && items.length > 0
      ? items
          .map((item, index) => {
            const itemName =
              item.FullName ||
              (item.menuItemId && item.menuItemId.name) ||
              item.name ||
              "Unknown Item";
            const basePrice = item.price || 0;
            const variantPrice = item.variant?.price ?? null;
            const itemPrice = variantPrice !== null ? variantPrice : basePrice;
            const itemQuantity = item.quantity || 1;
            const itemTotal = itemPrice * itemQuantity;
            return `${index + 1}. ${itemName}\n   Qty: ${itemQuantity}  |  Price: ${formatCurrency(itemPrice)}  |  Total: ${formatCurrency(itemTotal)}`;
          })
          .join("\n\n")
      : "No items found";

  return `

From: ${restaurantName || "Charcole Chicken"}
Hello ${customerName || deliveryAddress?.FullName || "Valued Customer"}, Your order has been delivered. Here are the details:
Order Number : #${orderNumber || order._id || "N/A"}
Order Date   : ${formattedDate}
Order Status : ${orderStatus || "Pending"}
Payment      : ${paymentStatus || "Unpaid"}
${itemsText}
Subtotal         : ${formatCurrency(calculatedSubTotal)}${calculatedDeliveryCharge > 0 ? `\nDelivery Charge  : ${formatCurrency(calculatedDeliveryCharge)}` : ""}${calculatedDiscount > 0 ? `\nDiscount         : -${formatCurrency(calculatedDiscount)}` : ""}${calculatedTax > 0 ? `\nTax : ${formatCurrency(calculatedTax)}` : ""}
TOTAL            : ${formatCurrency(calculatedTotal)}
${deliveryAddress ? ` DELIVERY ADDRESS
Name    : ${deliveryAddress.FullName || "N/A"}
Phone   : ${deliveryAddress.PhoneNumber || "N/A"}
Address : ${deliveryAddress.Address || "N/A"}, ${deliveryAddress.City || "N/A"} ${deliveryAddress.ZIPCode || ""}
` : ""
}

Thank you for choosing ${restaurantName || "Charcole Chicken"}!
Best regards,
${restaurantName || "Charcole Chicken"} Team
Need help? Contact our support team.
  `;
};

const calculateOrderTotal = (items) => {
  try {
    if (!items || !Array.isArray(items)) return 0;
    return items.reduce((total, item) => {
      const basePrice = item.price || 0;
      const variantPrice = item.variant?.price ?? null;
      const itemPrice = variantPrice !== null ? variantPrice : basePrice;
      return total + itemPrice * (item.quantity || 1);
    }, 0);
  } catch (error) {
    console.error("Error calculating order total:", error);
    return 0;
  }
};

const formatDate = (date) => {
  if (!date) return "N/A";
  try {
    const d = new Date(date);
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "N/A";
  }
};
