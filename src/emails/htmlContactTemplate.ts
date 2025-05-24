import { IUserContact } from "../@types/IUserContact";

export const htmlContactTemplate = (contactData: IUserContact) => {
  const { name: userName, email: userEmail, helpMessage } = contactData;

  return `<!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Novo Contato Recebido</title>
      <style>
          body {
              font-family: 'Inter', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f9fafb;
          }
          .container {
              max-width: 700px;
              margin: 20px auto;
              border-collapse: collapse;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.05);
              overflow: hidden;
              background-color: white;
          }
          .header {
              background-color: #f3f4f6;
              padding: 16px;
              text-align: left;
              font-size: 18px;
              font-weight: 600;
              color: #111827;
              border-bottom: 1px solid #e5e7eb;
          }
          .content {
              padding: 20px;
          }
          .name {
              font-weight: 500;
              color: #111827;
              margin-bottom: 8px;
              font-size: 16px;
          }
          .message {
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 16px;
              margin-top: 16px;
              color: #334155;
              line-height: 1.5;
              white-space: pre-wrap;
          }
          .label {
              font-size: 14px;
              color: #64748b;
              margin-bottom: 4px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              Novo Contato Recebido
          </div>
          <div class="content">
              <div class="label">Nome</div>
              <div class="name">${userName}</div>
                        <div class="label">Email</div>
              <div class="userEmail">${userEmail}</div>
              
              <div class="label" style="margin-top: 16px;">Mensagem</div>
              <div class="message">${helpMessage}</div>
          </div>
      </div>
  </body>
  </html>`;
};
