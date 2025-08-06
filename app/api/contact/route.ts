import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { addContactToGoogleSheet } from '@/lib/google-sheets';

export async function POST(req: NextRequest) {
  try {
    // Get form data from request
    const { email, serviceType } = await req.json();
    
    if (!email || !serviceType) {
      return NextResponse.json(
        { success: false, message: 'Email y tipo de servicio son requeridos' },
        { status: 400 }
      );
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Format timestamp
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
      
      // Capitalize first letter of serviceType
      const formattedServiceType = serviceType.charAt(0).toUpperCase() + serviceType.slice(1);
      
      // Get the website URL from environment or use default
      const websiteUrl = process.env.WEBSITE_URL || 'https://scrapyapp.com';
      
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || 'Scrapy Website <noreply@scrapyapp.com>',
        to: 'info@scrapyapp.com',
        subject: `Nueva consulta de ${formattedServiceType} - Scrapy`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nueva consulta de Scrapy</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333333;
                margin: 0;
                padding: 0;
              }
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                overflow: hidden;
              }
              .email-header {
                background-color: #22c55e;
                padding: 30px;
                text-align: center;
              }
              .email-header img {
                max-width: 150px;
              }
              .email-body {
                padding: 30px;
                background-color: #ffffff;
              }
              .email-footer {
                background-color: #f5f5f5;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                color: #666666;
              }
              h1 {
                color: #22c55e;
                margin-top: 0;
              }
              .info-box {
                background-color: #f0fdf4;
                border-left: 4px solid #22c55e;
                padding: 15px;
                margin-bottom: 20px;
                border-radius: 4px;
              }
              .service-icon {
                display: inline-block;
                margin-right: 10px;
                vertical-align: middle;
              }
              .service-info {
                padding: 15px;
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                margin-bottom: 20px;
              }
              .button {
                display: inline-block;
                background-color: #22c55e;
                color: #ffffff !important; /* Ensure text is white */
                text-decoration: none;
                padding: 12px 25px;
                border-radius: 30px;
                font-weight: bold;
                margin-top: 20px;
              }
              .social-links {
                margin-top: 20px;
              }
              .social-links a {
                margin: 0 5px;
                display: inline-block;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="email-header">
                <img src="${websiteUrl}/images/logo blanco scrapy.png" alt="Scrapy Logo" />
              </div>
              
              <div class="email-body">
                <h1>¡Nueva consulta desde el sitio web!</h1>
                
                <div class="info-box">
                  <p>Hay una nueva solicitud de información desde el formulario de contacto de scrapyapp.com</p>
                </div>
                
                <div class="service-info">
                  <table width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td><strong>Email del cliente:</strong> ${email}</td>
                    </tr>
                    <tr>
                      <td><strong>Tipo de servicio:</strong> ${formattedServiceType}</td>
                    </tr>
                    <tr>
                      <td><strong>Fecha de consulta:</strong> ${formattedDate}</td>
                    </tr>
                  </table>
                </div>
                
                <p>Por favor, responde a este correo para seguir con la consulta lo más pronto posible.</p>
                
                                  <div style="text-align: center;">
                    <a href="mailto:${email}" class="button" style="color: white !important;">Responder ahora</a>
                  </div>
              </div>
              
              <div class="email-footer">
                <img src="${websiteUrl}/images/scrapy footer.png" alt="Scrapy Mascot" width="60" />
                <p>&copy; ${year} Scrapy App. Todos los derechos reservados.</p>
                <div class="social-links">
                  <a href="https://www.instagram.com/scrapy.app/"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" width="24" /></a>
                  <a href="https://www.linkedin.com/company/scrapy-app/"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn" width="24" /></a>
                  <a href="https://api.whatsapp.com/send?phone=5491133019016"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="WhatsApp" width="24" /></a>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      });
      
    } catch (emailError) {
      // Log but continue - don't fail the request if email fails
      console.error('Error sending email:', emailError);
    }

    // Add to Google Sheets
    try {
      const sheetResult = await addContactToGoogleSheet({ email, serviceType });
      if (!sheetResult.success) {
        console.error('Error with Google Sheets:', sheetResult.error);
      }
    } catch (sheetsError) {
      // Log but continue - don't fail the request if sheets fails
      console.error('Error with Google Sheets:', sheetsError);
    }

    return NextResponse.json(
      { success: true, message: 'Formulario enviado con éxito' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Error procesando el formulario' },
      { status: 500 }
    );
  }
}