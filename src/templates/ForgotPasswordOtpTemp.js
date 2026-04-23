// export const otpEmailTemplate = (otp) => `
//   <!DOCTYPE html>
//   <html>
//   <head>
//     <meta charset="UTF-8" />
//     <style>
//       body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
//       .container { max-width: 600px; margin: 40px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1); }
//       .header { background: #4CAF50; color: white; padding: 15px; text-align: center; border-radius: 8px 8px 0 0; }
//       .content { padding: 20px; text-align: center; }
//       .otp { font-size: 32px; font-weight: bold; color: #333; margin: 20px 0; letter-spacing: 5px; }
//       .footer { margin-top: 20px; font-size: 12px; color: #888; text-align: center; }
//     </style>
//   </head>
//   <body>
//     <div class="container">
//       <div class="header">
//         <h2>OTP Verification</h2>
//       </div>
//       <div class="content">
//         <p>Hello,</p>
//         <p>Use the OTP below to verify your email. It will expire in <b>5 minutes</b>:</p>
//         <div class="otp">${otp}</div>
//         <p>If you did not request this, please ignore this email.</p>
//       </div>
//       <div class="footer">
//         <p>&copy; ${new Date().getFullYear()} Food Management System</p>
//       </div>
//     </div>
//   </body>
//   </html>
// `;


export const otpEmailTemplate = (otp) => {
  const digits = String(otp).split('');

  const digitBoxes = digits
    .map(
      (d) => `
    <div style="
      width: 48px; height: 60px;
      background: #FAECE7;
      border-radius: 8px;
      border: 1.5px solid #F0997B;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      font-weight: 700;
      color: #712B13;
      font-family: 'Courier New', Courier, monospace;
      margin: 0 4px;
    ">${d}</div>`
    )
    .join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style> * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f0eb; color: #333; }
    .wrapper { padding: 40px 16px; }
    .container { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e8e0d8; }
    .header { background: #D85A30; padding: 28px 32px; display: flex; align-items: center; gap: 16px; }
    .header-icon { width: 52px; height: 52px; border-radius: 50%; background: rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .header-label { color: #FAECE7; font-size: 11px; font-weight: 600; letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 3px; }
    .header-title { color: #ffffff; font-size: 20px; font-weight: 600; line-height: 1.25; }
    .content { padding: 30px 32px; text-align: center; }
    .brand-icon { width: 64px; height: 64px; border-radius: 50%; background: #FAECE7; margin: 0 auto 18px; display: flex; align-items: center; justify-content: center; }
    .body-text { font-size: 15px; line-height: 1.75; color: #555; margin-bottom: 6px; }
    .sub-text { font-size: 15px; line-height: 1.75; color: #888; margin-bottom: 24px; }
    .sub-text span { color: #D85A30; font-weight: 600; }
    .otp-row { display: flex; justify-content: center; align-items: center; gap: 4px; margin-bottom: 20px; }
    .expiry-row { display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 20px; }
    .expiry-text { font-size: 13px; color: #993C1D; font-weight: 600; }
    .note-box { background: #f7f6f4; border-radius: 8px; padding: 12px 16px; border: 1px solid #ede9e3; }
    .note-text { font-size: 13px; color: #999; line-height: 1.6; }
    .footer { border-top: 1px solid #f0ebe4; padding: 14px 32px; display: flex; align-items: center; justify-content: space-between; }
    .footer-brand { display: flex; align-items: center; gap: 6px; }
    .footer-brand-name { font-size: 12px; color: #D85A30; font-weight: 600; }
    .footer-copy { font-size: 12px; color: #aaa; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="header-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        </div>
        <div>
          <div class="header-label">Security code</div>
          <div class="header-title">Verify your identity</div>
        </div>
      </div>
      <div class="content">
        <div class="brand-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D85A30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <p class="body-text">Hello,</p>
        <p class="sub-text">
          Use the code below to verify your account. It expires in <span>5 minutes</span>.
        </p>
        <div class="otp-row">
          ${digitBoxes}
        </div>
        <div class="expiry-row">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D85A30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span class="expiry-text">Expires in 5 minutes</span>
        </div>
        <div class="note-box">
          <p class="note-text">Didn't request this? You can safely ignore this email. Your account is secure.</p>
        </div>
      </div>
      <div class="footer">
        <div class="footer-brand">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D85A30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4l3 3"/>
          </svg>
          <span class="footer-brand-name">Charcole Chicken</span>
        </div>
        <span class="footer-copy">&copy; ${new Date().getFullYear()} All rights reserved</span>
      </div>
    </div>
  </div>
</body>
</html>
`;
};