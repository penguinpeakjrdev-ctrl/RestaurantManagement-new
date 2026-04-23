// export const approvalEmailTemplate = (restaurantName, ownerName) => `
//   <!DOCTYPE html>
//   <html>
//   <head>
//     <style>
//       body {
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         background-color: #f4f7fb;
//         color: #333;
//         margin: 0;
//         padding: 0;
//       }
//       .container {
//         max-width: 600px;
//         margin: 40px auto;
//         background: #ffffff;
//         border-radius: 12px;
//         box-shadow: 0 4px 20px rgba(0,0,0,0.08);
//         overflow: hidden;
//       }
//       .header {
//         background: linear-gradient(135deg, #43a047, #66bb6a);
//         color: #fff;
//         text-align: center;
//         padding: 25px 15px;
//       }
//       .header h2 {
//         margin: 0;
//         font-size: 22px;
//         font-weight: 600;
//       }
//       .content {
//         padding: 25px 30px;
//         line-height: 1.7;
//       }
//       .content p {
//         margin: 12px 0;
//         font-size: 15px;
//         color: #444;
//       }
//       .content strong {
//         color: #43a047;
//       }
//       .button {
//         display: inline-block;
//         margin: 20px 0;
//         padding: 12px 24px;
//         background: #43a047;
//         color: #fff !important;
//         text-decoration: none;
//         border-radius: 8px;
//         font-size: 15px;
//         font-weight: 500;
//         box-shadow: 0 2px 6px rgba(0,0,0,0.15);
//       }
//       .footer {
//         background: #f1f3f6;
//         text-align: center;
//         font-size: 12px;
//         color: #777;
//         padding: 15px;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="container">
//       <div class="header">
//         <h2>🎉 Congratulations! Your Restaurant is Approved</h2>
//       </div>
//       <div class="content">
//         <p>Dear ${ownerName},</p>
//         <p>We are excited to let you know that your restaurant, <strong>${restaurantName}</strong>, has been successfully approved on our platform! 🚀</p>
//         <p>You can now manage your restaurant profile, menu, and orders seamlessly.</p>
//         <p>If you need any help, our support team is always here for you.</p>
//         <p>Best regards,<br><strong>The Platform Team</strong></p>
//       </div>
//       <div class="footer">
//         <p>&copy; ${new Date().getFullYear()} Charcole Chicken. All rights reserved.</p>
//       </div>
//     </div>
//   </body>
//   </html>
// `;

// export const rejectionEmailTemplate = (restaurantName, ownerName) => `
//   <!DOCTYPE html>
//   <html>
//   <head>
//     <style>
//       body {
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         background-color: #f4f7fb;
//         color: #333;
//         margin: 0;
//         padding: 0;
//       }
//       .container {
//         max-width: 600px;
//         margin: 40px auto;
//         background: #ffffff;
//         border-radius: 12px;
//         box-shadow: 0 4px 20px rgba(0,0,0,0.08);
//         overflow: hidden;
//       }
//       .header {
//         background: linear-gradient(135deg, #e53935, #ef5350);
//         color: #fff;
//         text-align: center;
//         padding: 25px 15px;
//       }
//       .header h2 {
//         margin: 0;
//         font-size: 22px;
//         font-weight: 600;
//       }
//       .content {
//         padding: 25px 30px;
//         line-height: 1.7;
//       }
//       .content p {
//         margin: 12px 0;
//         font-size: 15px;
//         color: #444;
//       }
//       .content strong {
//         color: #e53935;
//       }
//       .button {
//         display: inline-block;
//         margin: 20px 0;
//         padding: 12px 24px;
//         background: #e53935;
//         color: #fff !important;
//         text-decoration: none;
//         border-radius: 8px;
//         font-size: 15px;
//         font-weight: 500;
//         box-shadow: 0 2px 6px rgba(0,0,0,0.15);
//       }
//       .footer {
//         background: #f1f3f6;
//         text-align: center;
//         font-size: 12px;
//         color: #777;
//         padding: 15px;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="container">
//       <div class="header">
//         <h2>⚠️ Restaurant Application Update</h2>
//       </div>
//       <div class="content">
//         <p>Dear ${ownerName},</p>
//         <p>We regret to inform you that your restaurant, <strong>${restaurantName}</strong>, has not been approved at this time.</p>
//         <p>After careful review, we found that your application did not meet our current criteria.</p>
//         <p>If you’d like more details or wish to appeal this decision, please contact our support team.</p>
//         <p>
//           <a href="https://yourplatform.com/support" class="button">Contact Support</a>
//         </p>
//         <p>We truly appreciate your interest in joining our platform and encourage you to reapply in the future.</p>
//         <p>Best regards,<br><strong>The Platform Team</strong></p>
//       </div>
//       <div class="footer">
//         <p>&copy; ${new Date().getFullYear()} Charcole Chicken. All rights reserved.</p>
//       </div>
//     </div>
//   </body>
//   </html>
// `;



export const approvalEmailTemplate = (restaurantName, ownerName) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f0eb; color: #333; }
.wrapper { padding: 40px 16px; }
.container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e8e0d8; }
.header { background: #D85A30; padding: 32px 36px; display: flex; align-items: center; gap: 18px; }
.header-icon { width: 54px; height: 54px; border-radius: 50%; background: rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.header-label { color: #FAECE7; font-size: 11px; font-weight: 600; letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 4px; }
.header-title { color: #ffffff; font-size: 20px; font-weight: 600; line-height: 1.25; }
.content { padding: 30px 36px; }
.recipient-row { display: flex; align-items: center; gap: 10px; margin-bottom: 22px; padding-bottom: 18px; border-bottom: 1px solid #f0ebe4; }
.avatar { width: 38px; height: 38px; border-radius: 50%; background: #FAECE7; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.recipient-label { font-size: 12px; color: #999; }
.recipient-name { font-size: 14px; font-weight: 600; color: #333; }
p { font-size: 15px; line-height: 1.75; color: #555; margin-bottom: 14px; }
p strong { color: #333; font-weight: 600; }
.features-grid { background: #FAECE7; border-radius: 10px; padding: 18px 22px; margin: 22px 0; display: flex; gap: 8px; }
.feature-item { flex: 1; text-align: center; padding: 10px 6px; }
.feature-icon { width: 36px; height: 36px; border-radius: 50%; background: rgba(216, 90, 48, 0.12); margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; }
.feature-label { font-size: 12px; color: #993C1D; font-weight: 600; }
.btn { display: inline-block; padding: 12px 26px; background: #D85A30; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600; margin-top: 4px; }
.sign-off { font-size: 14px; color: #888; line-height: 1.65; margin-top: 22px; margin-bottom: 0; }
.sign-off strong { color: #444; }
.footer { border-top: 1px solid #f0ebe4; padding: 14px 36px; display: flex; align-items: center; justify-content: space-between; }
.footer-brand { display: flex; align-items: center; gap: 6px; }
.footer-text { font-size: 12px; color: #aaa; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="header-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
        </div>
        <div>
          <div class="header-label">Restaurant approved</div>
          <div class="header-title">You're live on the platform!</div>
        </div>
      </div>
      <div class="content">
        <div class="recipient-row">
          <div class="avatar">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#D85A30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <div>
            <div class="recipient-label">To</div>
            <div class="recipient-name">${ownerName}</div>
          </div>
        </div>
        <p>Hi <strong>${ownerName}</strong>,</p>
        <p>
          Great news — <strong>${restaurantName}</strong> has been approved and is now live on Charcole Chicken! Hungry customers in your area can already discover and order from you.
        </p>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D85A30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
            </div>
            <div class="feature-label">Manage menu</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D85A30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <div class="feature-label">Track orders</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D85A30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div class="feature-label">View earnings</div>
          </div>
        </div>
        <a href="https://yourplatform.com/dashboard" class="btn">Go to your dashboard</a>
        <p class="sign-off">
          Need help getting started? Our support team is always here for you.<br />
          Warm regards, <strong>The Charcole Chicken Team</strong>
        </p>
      </div>
      <div class="footer">
        <div class="footer-brand">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D85A30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4l3 3"/>
          </svg>
          <span class="footer-text" style="color:#D85A30; font-weight:600;">Charcole Chicken</span>
        </div>
        <span class="footer-text">&copy; ${new Date().getFullYear()} All rights reserved</span>
      </div>
    </div>
  </div>
</body>
</html>
`;

export const rejectionEmailTemplate = (restaurantName, ownerName) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f0eb; color: #333; }
    .wrapper { padding: 40px 16px; }
    .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e8e0d8; }
    .header { background: #444441; padding: 32px 36px; display: flex; align-items: center; gap: 18px; }
    .header-icon { width: 54px; height: 54px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .header-label { color: #B4B2A9; font-size: 11px; font-weight: 600; letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 4px; }
    .header-title { color: #ffffff; font-size: 20px; font-weight: 600; line-height: 1.25; }
    .content { padding: 30px 36px; }
    .recipient-row { display: flex; align-items: center; gap: 10px; margin-bottom: 22px; padding-bottom: 18px; border-bottom: 1px solid #f0ebe4; }
    .avatar { width: 38px; height: 38px; border-radius: 50%; background: #f2f1ef; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .recipient-label { font-size: 12px; color: #999; }
    .recipient-name { font-size: 14px; font-weight: 600; color: #333; }
    p { font-size: 15px; line-height: 1.75; color: #555; margin-bottom: 14px; }
    p strong { color: #333; font-weight: 600; }
    .callout { border-left: 3px solid #888780; background: #f7f6f4; border-radius: 0 8px 8px 0; padding: 14px 18px; margin: 20px 0; }
    .callout-title { font-size: 13px; font-weight: 600; color: #444; margin-bottom: 5px; }
    .callout-body { font-size: 14px; color: #777; line-height: 1.65; }
    .btn { display: inline-block; padding: 12px 26px; background: #444441; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600; margin-top: 4px; }
    .sign-off { font-size: 14px; color: #888; line-height: 1.65; margin-top: 22px; margin-bottom: 0; }
    .sign-off strong { color: #444; }
    .footer { border-top: 1px solid #f0ebe4; padding: 14px 36px; display: flex; align-items: center; justify-content: space-between; }
    .footer-brand { display: flex; align-items: center; gap: 6px; }
    .footer-text { font-size: 12px; color: #aaa; }
</style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="header-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <div>
          <div class="header-label">Application update</div>
          <div class="header-title">We couldn't approve your restaurant</div>
        </div>
      </div>
      <div class="content">
        <div class="recipient-row">
          <div class="avatar">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <div>
            <div class="recipient-label">To</div>
            <div class="recipient-name">${ownerName}</div>
          </div>
        </div>
        <p>Hi <strong>${ownerName}</strong>,</p>
        <p>Thank you for applying to join Charcole Chicken. Unfortunately, <strong>${restaurantName}</strong>'s application was not approved at this time. After careful review, we found it did not fully meet our current partner criteria.</p>
        <div class="callout">
          <div class="callout-title">What can you do next?</div>
          <div class="callout-body">
            Review the requirements on our partner page, make the necessary updates, and reapply. We'd love to have you on board in the future.
          </div>
        </div>
        <a href="https://yourplatform.com/support" class="btn">Contact support</a>
        <p class="sign-off">
          We appreciate your interest and hope to work together soon.<br />
          Regards, <strong>The Charcole Chicken Team</strong>
        </p>
      </div>
      <div class="footer">
        <div class="footer-brand">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4l3 3"/>
          </svg>
          <span class="footer-text" style="font-weight:600; color:#555;">Charcole Chicken</span>
        </div>
        <span class="footer-text">&copy; ${new Date().getFullYear()} All rights reserved</span>
      </div>
    </div>
  </div>
</body>
</html>
`;