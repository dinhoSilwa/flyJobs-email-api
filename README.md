
# Documentação das Rotas da API flyJobs-email-api

## Visão Geral

A **flyJobs-email-api** é um microserviço especializado para envio de emails. A API segue uma arquitetura bem definida, organizada em **rotas**, **controladores**, **serviços** e **repositórios**.

---

## Rotas Disponíveis

### 1. Verificação de Saúde

**GET** `/health`  
Verifica se a API está funcionando corretamente.

**Resposta de Sucesso:**
```json
Status: 200 OK
{
  "status": "OK",
  "msg": "Api Funcionando Normalmente"
}
```
📍 *Localização no código: `app.ts:14-16`*

---

### 2. Envio de Email de Serviço

**POST** `/api/send/service`  
Rota utilizada para envio de emails relacionados a serviços.

**Controlador:**  
`UserServiceController.startSendEmailService`  
📍 *Localização no código: `userEmailRoutes.ts:5-8`*

**Resposta de Sucesso:**
```json
Status: 200 OK
{
  "status": "OK",
  "msg": "Email Enviado com Sucesso"
}
```
📍 *Localização no código: `UserServiceController.ts:13-14`*

**Possíveis Erros:**
- `401 Unauthorized`: Falha no serviço do Nodemailer
- `401 Unauthorized`: Limite de requisições excedido
- `404 Not Found`: Recurso não encontrado
- `409 Conflict`: Destinatário inválido  
📍 *Localização no código: `httpStatusCode.ts:1-5`*

---

## Middleware e Proteções

### Limitação de Taxa (Rate Limiting)

Implementado para evitar abusos e garantir a disponibilidade do serviço.

- **Janela de tempo:** 10 minutos (`10 * 60 * 10000 ms`)
- **Máximo de requisições:** 5 por janela
- **Mensagem de erro:** `"Falha ao Requisitar Serviços"`  
📍 *Localização no código: `rateLimitMiddleware.ts:26-29`*

---

## Tratamento de Erros

A API possui um sistema centralizado de tratamento de erros, que captura exceções e retorna respostas consistentes ao cliente.

📍 *Localização no código: `errorMiddleware.ts:5-10`*

---

## Fluxo de Requisição

1. A requisição chega ao servidor Express
2. Passa pelos middlewares:
   - CORS
   - JSON parser
   - Rate Limiting
3. É roteada para o controlador apropriado
4. O controlador chama o serviço correspondente
5. O serviço utiliza o repositório para executar a lógica de negócio
6. O repositório formata e envia o email
7. A resposta é retornada ao cliente

📍 *Localização no código: `app.ts:11-13`*

---

## Exemplo de Uso

Para enviar um email de serviço, faça uma requisição `POST` para:

```
/api/send/service
```

Com os dados necessários no corpo da requisição. O fluxo será tratado pelo controlador que, por sua vez, chamará o serviço apropriado e retornará a resposta correspondente.

📍 *Localização no código: `UserServiceController.ts:9-15`*

---

## Notas Técnicas

- Utiliza o **Nodemailer** para envio de emails.
- Sistema de **tratamento de erros personalizado** com tipos específicos.
- Implementa **Rate Limiting** para segurança e controle de uso.
- Estruturada em **camadas** seguindo boas práticas: Controladores, Serviços e Repositórios.

---

> **Observação:**  
> Esta documentação foi gerada com base no código-fonte da API `flyJobs-email-api`. Ela cobre as principais rotas, middleware e estrutura da aplicação.
