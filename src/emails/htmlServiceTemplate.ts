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
  return `   <table style="width: 100%; max-width: 700px; border-collapse: collapse; font-family: 'Inter', sans-serif; border: 1px solid #e5e7eb; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
  <thead>
    <tr style="background-color: #f3f4f6;">
      <th colspan="2" style="padding: 16px; text-align: left; font-size: 18px; font-weight: 600; color: #111827;">
        Novo Serviço Recebido
      </th>
      <th style="text-align: right; padding: 16px;">
        <span style="background-color: #fef3c7; color: #92400e; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 500;">
          🕒 ${isExpressService ? "Prazo Express" : "Prazo Normal"}
        </span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" style="padding: 12px 16px;">
        <span style="background-color: #f3e8ff; color: #6b21a8; font-weight: 500; padding: 6px 12px; border-radius: 9999px; font-size: 14px;">
          ${selectedServiceType}
        </span>
      </td>
    </tr>
    <tr style="border-top: 1px solid #e5e7eb;">
      <td style="padding: 12px 16px; vertical-align: top; width: 24px;">👤</td>
      <td colspan="2" style="padding: 12px 0; font-size: 14px;">
        <div style="font-weight: 500; color: #111827;">${username}</div>
        <div style="color: #6b7280; text-transform: capitalize; font-size: 12px;">${mode}</div>
      </td>
    </tr>
    <tr>
      <td style="padding: 12px 16px; vertical-align: top;">✉️</td>
      <td colspan="2" style="padding: 12px 0;">
        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-size: 14px;">${email}</a>
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
style="font-size: 0.875rem; line-height: 1.25rem; color: #4b5563; text-decoration: none; transition: color 0.2s ease;" 
onmouseover="this.style.color='#2563eb'" 
onmouseout="this.style.color='#4b5563'">
  ${phone}
</a>


      </td>
    </tr>
    <tr style="background-color: #ecfdf5;">
      <td style="padding: 12px 16px;">✅</td>
      <td colspan="2" style="padding: 12px 0; color: #065f46; font-size: 13px;">Termos aceitos</td>
    </tr>
  </tbody>
</table>`;
};
