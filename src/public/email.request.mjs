export const emailMessage = (username, email, product_detail) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>European Office Supplies Ltd (EOS)</title>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body style="
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    background-color: #f5f5f5;
    font-size: 16px;
    line-height: 1.5;
    color: #333333;
  ">
    <div style="
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    ">
      <!-- Header Section -->
      <header style="
        padding: 25px 40px;
        background-color: #2c3e50;
        text-align: center;
        border-bottom: 5px solid #3498db;
      ">
        <h1 style="
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0.5px;
        ">European Office Supplies Ltd</h1>
        <p style="
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-weight: 400;
        ">Business Solutions Provider</p>
      </header>

      <!-- Main Content -->
      <main style="
        background: #ffffff;
        padding: 35px 40px;
      ">
        <div style="
          display: flex;
          align-items: center;
          margin-bottom: 30px;
        ">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="min-width: 40px;">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <polyline points="8 16 12 12 16 16"></polyline>
            <line x1="12" y1="12" x2="12" y2="21"></line>
          </svg>
          <h2 style="
            margin: 0 0 0 15px;
            color: #2c3e50;
            font-size: 22px;
            font-weight: 600;
          ">Excel Request Details</h2>
        </div>
        
        <div style="
          background-color: #f8f9fa;
          border-left: 4px solid #3498db;
          padding: 20px;
          margin-bottom: 25px;
          border-radius: 4px;
        ">
          <p style="
            margin: 0 0 10px;
            color: #2c3e50;
            font-size: 15px;
            line-height: 1.5;
          ">
            <strong>Requested by:</strong> <span style="color: #3498db;">${username}</span>
          </p>
          <p style="
            margin: 0;
            color: #2c3e50;
            font-size: 15px;
            line-height: 1.5;
          ">
            <strong>Email address:</strong> <span style="color: #3498db;">${email}</span>
          </p>
        </div>

        <div style="margin-bottom: 30px;">
          <h3 style="
            margin: 0 0 15px;
            font-size: 18px;
            color: #2c3e50;
            font-weight: 600;
            padding-bottom: 10px;
            border-bottom: 1px solid #e9ecef;
          ">Request Information</h3>
          
          <div style="
            color: #4a5568;
            font-size: 15px;
            line-height: 1.6;
          ">
            ${product_detail}
          </div>
        </div>

        <div style="
          background-color: #ebf7ff;
          border-radius: 6px;
          padding: 15px;
          margin-top: 30px;
        ">
          <p style="
            margin: 0;
            font-size: 14px;
            color: #2c5282;
          ">
            <strong>Note:</strong> This request will be processed according to our standard procedures. You will receive a notification once your request has been fulfilled.
          </p>
        </div>
      </main>

      <!-- Footer Section -->
      <footer style="
        padding: 25px 40px;
        background-color: #f8f9fa;
        border-top: 1px solid #e9ecef;
      ">
        <table style="width: 100%;">
          <tr>
            <td style="
              vertical-align: top;
              padding-right: 20px;
              border-right: 1px solid #e9ecef;
            ">
              <p style="
                margin: 0;
                font-size: 13px;
                color: #2c3e50;
                font-weight: 600;
              ">European Office Supplies Ltd</p>
              <p style="
                margin: 8px 0 0;
                font-size: 13px;
                color: #718096;
              ">Unit 18, Carlton Place, Shire Hill Saffron Walden</p>
            </td>
            <td style="
              vertical-align: top;
              padding-left: 20px;
            ">
              <p style="
                margin: 0;
                font-size: 13px;
                color: #2c3e50;
                font-weight: 600;
              ">Support Contact</p>
              <p style="
                margin: 8px 0 0;
                font-size: 13px;
                color: #718096;
              ">
                <a href="mailto:support@eos-supplies.com" style="
                  color: #3498db;
                  text-decoration: none;
                ">support@eos-supplies.com</a><br>(+44) 01799 512 070
              </p>
            </td>
          </tr>
        </table>
        <p style="
          margin: 20px 0 0;
          text-align: center;
          font-size: 12px;
          color: #a0aec0;
        ">
          © 2025 European Office Supplies Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  </body>
</html>
  `;
};
