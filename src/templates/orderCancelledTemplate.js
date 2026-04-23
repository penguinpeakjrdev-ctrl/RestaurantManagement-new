// // This file should only generate the HTML string
// export const generateOrderCancelledHTML = (order, name, imageurl, restaurantName) => {
//   return `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Order Cancelled - ${restaurantName}</title>
//     </head>
//     <body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">

//       <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
//         <div style="background: linear-gradient(135deg, #ff6b6b 0%, #e74c3c 100%); padding: 30px 20px; text-align: center; border-radius: 0 0 0 0;">
//           <div style="background-color: rgba(255,255,255,0.1); padding: 15px; border-radius: 12px; display: inline-block; margin-bottom: 20px;">
//             <img src="${imageurl}" alt="${restaurantName}" style="max-width: 120px; height: auto; border-radius: 8px; filter: brightness(1.1);" />
//           </div>
//           <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.2);"> Order Cancelled </h1>
//         </div>
//         <div style="padding: 40px 30px;">
//           <div style="margin-bottom: 30px;">
//           <h2 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 24px; font-weight: 500;">
//             Hi ${name},
//           </h2>
//           <p style="color: #555; font-size: 16px; line-height: 1.6; margin: 0;">Your order from <strong style="color: #2c3e50;">${restaurantName}</strong> has been 
//             <strong style="color: #e74c3c;">successfully cancelled</strong>. </p>
//         </div>
//           <div style="background: linear-gradient(135deg, #fff5f5 0%, #fef2f2 100%); border: 2px solid #fecaca; border-radius: 12px; padding: 15px; margin-bottom: 30px; position: relative;">
//             <div style="position: absolute; top: -10px; left: 20px; background: #ef4444; color: white; padding: 5px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
//               Cancelled
//             </div>
//             <div style="margin-top: 10px;">
//               <p style="color: #374151; font-size: 13px; margin: 0 0 10px 0;">
//                 <strong>Order ID: </strong><span style="color: #ef4444; font-family: 'Courier New', monospace; background: #fef2f2; padding: 4px 8px; border-radius: 4px; font-size: 12px;">#${order._id}</span>
//               </p>
//               <p style="color: #6b7280; font-size: 14px; margin: 0; line-height: 1.5;">
//                 If you've already made a payme1nt, the refund will be processed within <strong style="color: #059669;">5–7 business days</strong> to your original payment method.
//               </p>
//             </div>
//           </div>
//           <div style="margin-bottom: 30px;">
//             <h3 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 3px solid #e5e7eb; padding-bottom: 10px;">Order Summary</h3>
//             <div style="background: #f9fafb; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
//               ${order.items
//                 .map((item, index) => `
//                 <div style="padding: 18px 20px; ${ index !== order.items.length - 1
//                     ? "border-bottom: 1px solid #e5e7eb;" : ""
//                 } display: flex; justify-content: space-between; align-items: center;">
//                   <div style="flex: 1;">
//                     <div style="color: #374151; font-size: 16px; font-weight: 500; margin-bottom: 4px;">
//                       ${item.menuItemId?.name}
//                     </div>
//                     <div style="color: #6b7280; font-size: 14px;">
//                       Quantity: <span style="color: #059669; font-weight: 600;">${
//                         item.quantity
//                       }</span>
//                     </div>
//                   </div>
//                   <div style="color: #1f2937; font-size: 16px; font-weight: 600;">
//                     ₹${item.menuItemId?.price * item.quantity}
//                   </div>
//                 </div>`
//                 ).join("")}
//               <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 15px; color: white;">
//                 <div style="display: flex; justify-content: space-between; align-items: center;">
//                   <span style="font-size: 18px; font-weight: 600;">Total Amount:</span>
//                   <span style="font-size: 24px; font-weight: 700;">₹${order.totalAmount}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div style="background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%); border: 1px solid #bfdbfe; border-radius: 12px; padding: 15px; margin-bottom: 30px;">
//             <div style="display: flex; align-items: flex-start;">
//               <div>
//                 <h4 style="color: #1e40af; margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">
//                   Need Help?
//                 </h4>
//                 <p style="color: #1e40af; margin: 0; font-size: 14px; line-height: 1.5;">
//                   If you didn't request this cancellation or have any questions about your refund, please don't hesitate to contact our support team. We're here to help!
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div style="text-align: center; padding: 20px 0; border-top: 2px solid #f3f4f6;">
//             <p style="color: #6b7280; font-size: 16px; margin: 0 0 10px 0; line-height: 1.6;">
//               We apologize for any inconvenience caused and appreciate your understanding.
//             </p>
//             <p style="color: #374151; font-size: 18px; font-weight: 600; margin: 0;">
//               Thank you for choosing <span style="color: #3b82f6;">${restaurantName}</span>
//             </p>
//             <p style="color: #6b7280; font-size: 14px; margin: 15px 0 0 0;">
//               We hope to serve you again soon! 🍽️
//             </p>
//           </div>
//         </div>
//         <div style="background: #f8f9fa; padding: 15px; text-align: center; border-top: 1px solid #e5e7eb;">
//           <p style="color: #6b7280; font-size: 12px; margin: 0; line-height: 1.4;">
//             This is an automated message. Please do not reply to this email.<br>
//             © ${new Date().getFullYear()} ${restaurantName}. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </body>
//     </html>
//   `;
// };


export const generateOrderCancelledHTML = (order, name, imageurl, restaurantName) => {
  const itemRows = order.items
    .map(
      (item, index) => `
      <div style="
        padding: 14px 18px;
        ${index !== order.items.length - 1 ? 'border-bottom: 1px solid #e8e4de;' : ''}
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <div>
          <div style="font-size: 14px; font-weight: 600; color: #1f2937; margin-bottom: 3px;">
            ${item.menuItemId?.name}
          </div>
          <div style="font-size: 12px; color: #9ca3af;">
            Qty: <span style="color: #3B6D11; font-weight: 600;">${item.quantity}</span>
          </div>
        </div>
        <div style="font-size: 15px; font-weight: 600; color: #1f2937;">
          ₹${item.menuItemId?.price * item.quantity}
        </div>
      </div>`
    )
    .join('');
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Order Cancelled – ${restaurantName}</title>
  <style>
   * { box-sizing: border-box; margin: 0; padding: 0; }
   body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f0eb; color: #333; }
  .wrapper { padding: 40px 16px; }
  .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e8e0d8; }
  .header { background: #444441; padding: 28px 32px; display: flex; align-items: center; gap: 16px; }
  .header-icon { width: 56px; height: 56px; border-radius: 12px; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .header-label { color: #B4B2A9; font-size: 11px; font-weight: 600; letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 3px; }
  .header-title { color: #ffffff; font-size: 20px; font-weight: 600; line-height: 1.25; }
  .restaurant-thumb { margin-left: auto; width: 48px; height: 48px; border-radius: 10px; background: rgba(255,255,255,0.08); overflow: hidden; flex-shrink: 0; }
  .restaurant-thumb img { width: 100%; height: 100%; object-fit: cover; }
  .content { padding: 26px 32px 0; }
  .body-intro { font-size: 15px; color: #444; line-height: 1.75; margin-bottom: 22px; }
  .body-intro strong { color: #1f2937; }
  .cancelled-badge { background: #FCEBEB; border-radius: 10px; padding: 14px 18px; margin-bottom: 22px; display: flex; align-items: flex-start; gap: 12px; }
  .badge-icon { width: 32px; height: 32px; border-radius: 50%; background: #E24B4A; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .badge-label { font-size: 11px; font-weight: 700; color: #A32D2D; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
  .badge-order-id { font-size: 13px; color: #791F1F; margin-bottom: 5px; }
  .badge-order-id span { font-family: 'Courier New', Courier, monospace; background: #F7C1C1; padding: 2px 8px; border-radius: 4px; color: #501313; }
  .badge-refund { font-size: 13px; color: #A32D2D; line-height: 1.6; }
  .badge-refund strong { color: #791F1F; }
  .section-label { font-size: 12px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; }
  .order-table { background: #f9f7f4; border-radius: 10px; border: 1px solid #e8e4de; overflow: hidden; margin-bottom: 22px; }
  .order-total { background: #2C2C2A; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; }
  .total-label { font-size: 14px; font-weight: 600; color: #D3D1C7; }
  .total-amount { font-size: 22px; font-weight: 700; color: #ffffff; }
  .help-box { border-left: 3px solid #378ADD; padding: 13px 16px; background: #E6F1FB; border-radius: 0 8px 8px 0; margin-bottom: 22px; }
  .help-title { font-size: 13px; font-weight: 700; color: #0C447C; margin-bottom: 5px; }
  .help-body { font-size: 13px; color: #185FA5; line-height: 1.6; margin-bottom: 10px; }
  .help-btn { display: inline-block; padding: 8px 16px; background: #378ADD; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-size: 13px; font-weight: 600; }
  .sign-off { margin: 0 32px; padding: 18px 0; border-top: 1px solid #f0ebe4; text-align: center; }
  .sign-off p { font-size: 14px; color: #888; line-height: 1.65; margin-bottom: 6px; }
  .sign-off .brand-name { font-size: 15px; font-weight: 600; color: #1f2937; margin-bottom: 0; }
  .sign-off .brand-name span { color: #D85A30; }
  .footer { border-top: 1px solid #f0ebe4; padding: 14px 32px; display: flex; align-items: center; justify-content: space-between; }
  .footer-brand { display: flex; align-items: center; gap: 6px; }
  .footer-brand-name { font-size: 12px; color: #D85A30; font-weight: 600; }
  .footer-copy { font-size: 12px; color: #bbb; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="header-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
        </div>
        <div>
          <div class="header-label">Order update</div>
          <div class="header-title">Your order has been cancelled</div>
        </div>
        <div class="restaurant-thumb">
          <img src="${imageurl}" alt="${restaurantName}" />
        </div>
      </div>
      <div class="content">
        <p class="body-intro">
          Hi <strong>${name}</strong>,<br />
          Your order from <strong>${restaurantName}</strong> has been successfully cancelled.
        </p>
        <div class="cancelled-badge">
          <div class="badge-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </div>
          <div>
            <div class="badge-label">Cancelled</div>
            <div class="badge-order-id">Order ID: <span>#${order._id}</span></div>
          </div>
        </div>
      </div>
      <div style="padding: 0 32px 22px;">
        <div class="section-label">Order summary</div>
        <div class="order-table">
          ${itemRows}
          <div class="order-total">
            <span class="total-label">Total amount</span>
            <span class="total-amount">₹${order.totalAmount}</span>
          </div>
        </div>
        <div class="help-box">
          <div class="help-title">Need help?</div>
          <div class="help-body">
            If you didn't request this cancellation or have any questions about your refund, our support team is ready to help.
          </div>
          <a href="https://yourplatform.com/support" class="help-btn">Contact support</a>
        </div>
      </div>
      <div class="sign-off">
        <p>We apologise for any inconvenience and appreciate your understanding.</p>
        <p class="brand-name">Thank you for choosing <span>${restaurantName}</span></p>
      </div>
      <div class="footer">
        <div class="footer-brand">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D85A30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4l3 3"/>
          </svg>
          <span class="footer-brand-name">Charcole Chicken</span>
        </div>
        <span class="footer-copy">&copy; ${new Date().getFullYear()} ${restaurantName}. All rights reserved.</span>
      </div>
    </div>
  </div>
</body>
</html>
  `;
};