import nodemailer from 'nodemailer';

/**
 * Service to handle secure email dispatching for the Modern Auto Garage website
 */
export async function sendAppointmentEmail(data: any) {
  const { fullName, phone, email, year, make, model, service, date, time, notes } = data;

  // 1. Create a transporter using SMTP and your local environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '465'),
    secure: process.env.EMAIL_SECURE === 'true' || true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${fullName} (via Modern Auto Garage)" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
    subject: `New Service Request: ${year} ${make} ${model} - ${service}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-w-600px; margin: 0 auto; background-color: #ffffff; margin-top: 40px; margin-bottom: 40px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #0B0B0B; padding: 40px 30px; text-align: center; border-bottom: 4px solid #E10600;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">MODERN AUTO GARAGE</h1>
              <p style="margin: 10px 0 0 0; color: #888888; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">New Appointment Request</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <div style="margin-bottom: 30px;">
                <p style="margin: 0 0 5px 0; font-size: 14px; color: #666666; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Customer Information</p>
                <div style="background-color: #f8f9fa; border: 1px solid #eeeeee; border-radius: 8px; padding: 20px;">
                  <table width="100%" cellspacing="0" cellpadding="5">
                    <tr><td width="100" style="color:#888; font-size:14px;">Name:</td><td style="color:#111; font-weight:600; font-size:15px;">${fullName}</td></tr>
                    <tr><td style="color:#888; font-size:14px;">Phone:</td><td style="color:#111; font-weight:600; font-size:15px;">${phone}</td></tr>
                    <tr><td style="color:#888; font-size:14px;">Email:</td><td style="color:#111; font-weight:600; font-size:15px;"><a href="mailto:${email}" style="color:#E10600; text-decoration:none;">${email}</a></td></tr>
                  </table>
                </div>
              </div>

              <div style="margin-bottom: 30px;">
                <p style="margin: 0 0 5px 0; font-size: 14px; color: #666666; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Vehicle & Service Details</p>
                <div style="background-color: #f8f9fa; border: 1px solid #eeeeee; border-radius: 8px; padding: 20px;">
                  <table width="100%" cellspacing="0" cellpadding="5">
                    <tr><td width="100" style="color:#888; font-size:14px;">Vehicle:</td><td style="color:#111; font-weight:600; font-size:15px;">${year} ${make} ${model}</td></tr>
                    <tr><td style="color:#888; font-size:14px;">Service:</td><td style="color:#111; font-weight:600; font-size:15px;">${service}</td></tr>
                    <tr><td style="color:#888; font-size:14px;">Date:</td><td style="color:#111; font-weight:600; font-size:15px;">${date || 'No preference'}</td></tr>
                    <tr><td style="color:#888; font-size:14px;">Time:</td><td style="color:#111; font-weight:600; font-size:15px;">${time ? time.charAt(0).toUpperCase() + time.slice(1) : 'Any time'}</td></tr>
                  </table>
                </div>
              </div>

              <div>
                <p style="margin: 0 0 5px 0; font-size: 14px; color: #666666; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Additional Notes</p>
                <div style="background-color: #fff4f4; border-left: 4px solid #E10600; border-radius: 0 8px 8px 0; padding: 20px;">
                  <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6; font-style: italic;">
                    "${notes || 'No additional notes provided by the customer.'}"
                  </p>
                </div>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; border-top: 1px solid #eeeeee; padding: 20px 30px; text-align: center;">
              <p style="margin: 0; color: #999999; font-size: 12px;">This is an automated message generated securely from your website.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  // 3. Dispatch the notification email to the GARAGE
  await transporter.sendMail(mailOptions);

  // 4. Setup the beautiful confirmation email for the CUSTOMER
  const customerMailOptions = {
    from: `"Modern Auto Garage" <${process.env.EMAIL_USER}>`,
    replyTo: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
    to: email, // Send to the customer's email address
    subject: `Appointment Request Received - Modern Auto Garage`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-w-600px; margin: 0 auto; background-color: #ffffff; margin-top: 40px; margin-bottom: 40px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #0B0B0B; padding: 40px 30px; text-align: center; border-bottom: 4px solid #E10600;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">MODERN AUTO GARAGE</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #111111; font-size: 24px;">Hi ${fullName.split(' ')[0]},</h2>
              <p style="margin: 0 0 20px 0; color: #555555; font-size: 16px; line-height: 1.6;">
                Thank you for choosing Modern Auto Garage! We have successfully received your service request for your <strong>${year} ${make} ${model}</strong>.
              </p>
              <p style="margin: 0 0 30px 0; color: #555555; font-size: 16px; line-height: 1.6;">
                One of our expert service advisors is currently reviewing your details and will contact you at <strong>${phone}</strong> shortly during normal business hours to officially confirm your appointment time and get you on the schedule.
              </p>

              <div style="background-color: #f8f9fa; border-left: 4px solid #E10600; padding: 20px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0 0 5px 0; font-size: 14px; color: #666666; font-weight: 600; text-transform: uppercase;">Need immediate assistance?</p>
                <p style="margin: 0; color: #333333; font-size: 16px; font-weight: 600;">Call the shop: <a href="tel:6036224428" style="color: #E10600; text-decoration: none;">(603) 622-4428</a></p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; border-top: 1px solid #eeeeee; padding: 20px 30px; text-align: center;">
              <p style="margin: 0; color: #999999; font-size: 14px; font-weight: 600;">Modern Auto Garage</p>
              <p style="margin: 5px 0 0 0; color: #999999; font-size: 12px;">34 S Beech St, Manchester, NH 03103</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  // 5. Dispatch the confirmation email
  await transporter.sendMail(customerMailOptions);
}
