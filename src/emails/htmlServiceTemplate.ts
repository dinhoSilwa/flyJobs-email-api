import { IUserService } from "../@types/IUserService";

export const htmlServiceTemplate = (serviceEmail: IUserService) => {
  const {
    name: username,
    email,
    phone,
    selectedServiceType,
    isExpressService,
    mode,
  } = serviceEmail;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo Serviço Recebido</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            background-color: #f9fafb;
            font-family: 'Inter', sans-serif;
        }
        .service-table {
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
            border-collapse: collapse;
            font-family: 'Inter', sans-serif;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            overflow: hidden;
            background-color: white;
        }
        .service-header {
            background-color: #f3f4f6;
            padding: 16px;
            text-align: left;
            font-size: 18px;
            font-weight: 600;
            color: #111827;
        }
        .express-badge {
            background-color: #fef3c7;
            color: #92400e;
            padding: 4px 10px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 500;
        }
        .service-type {
            background-color: #f3e8ff;
            color: #6b21a8;
            font-weight: 500;
            padding: 6px 12px;
            border-radius: 9999px;
            font-size: 14px;
        }
        .user-name {
            font-weight: 500;
            color: #111827;
        }
        .user-mode {
            color: #6b7280;
            text-transform: capitalize;
            font-size: 12px;
        }
        .email-link {
            color: #2563eb;
            text-decoration: none;
            font-size: 14px;
        }
        .phone-link {
            font-size: 0.875rem;
            line-height: 1.25rem;
            color: #4b5563;
            text-decoration: none;
            transition: color 0.2s ease;
        }
        .phone-link:hover {
            color: #2563eb;
        }
        .terms-row {
            background-color: #ecfdf5;
        }
        .terms-text {
            color: #065f46;
            font-size: 13px;
        }
    </style>
</head>
<body>
    <table class="service-table">
        <thead>
            <tr>
                <th colspan="2" class="service-header">
                    Novo Serviço Recebido
                </th>
                <th style="text-align: right; padding: 16px;">
                    <span class="express-badge">
                        🕒 ${
                          isExpressService ? "Prazo Express" : "Prazo Normal"
                        }
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="3" style="padding: 12px 16px;">
                    <span class="service-type">
                        ${selectedServiceType}
                    </span>
                </td>
            </tr>
            <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 12px 16px; vertical-align: top; width: 24px;">👤</td>
                <td colspan="2" style="padding: 12px 0; font-size: 14px;">
                    <div class="user-name">${username}</div>
                    <div class="user-mode">${mode}</div>
                </td>
            </tr>
            <tr>
                <td style="padding: 12px 16px; vertical-align: top;">✉️</td>
                <td colspan="2" style="padding: 12px 0;">
                    <a href="mailto:${email}" class="email-link">${email}</a>
                </td>
            </tr>
            <tr>
                <td style="padding: 12px 16px; vertical-align: top;">📞</td>
                <td colspan="2" style="padding: 12px 0;">
                    <a href="https://wa.me/${
                      phone.startsWith("55") ? phone : `55${phone}`
                    }?text=Ol%C3%A1%20${encodeURIComponent(
    username
  )}%21%0APercebi%20que%20voc%C3%AA%20acessou%20nosso%20site%20e%20demonstrou%20interesse%20no%20servi%C3%A7o%20${encodeURIComponent(
    selectedServiceType
  )}.%0AVamos%20dar%20in%C3%ADcio%20ao%20seu%20atendimento%20e%20te%20ajudar%20a%20conquistar%20sua%20pr%C3%B3xima%20oportunidade%21" 
                    class="phone-link">
                        ${phone}
                    </a>
                </td>
            </tr>
            <tr class="terms-row">
                <td style="padding: 12px 16px;">✅</td>
                <td colspan="2" style="padding: 12px 0;" class="terms-text">Termos aceitos</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`;
};
