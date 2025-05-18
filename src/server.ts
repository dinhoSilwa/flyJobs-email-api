import { config } from "dotenv";
import { app } from "../src/app";
const { PORT } = process.env;
config();
export const startServer = () => {
  try {
    app.listen(3000, () => {
      console.log(`Servidor Rodando na Porta ${PORT}`);
    });
  } catch (err) {
    console.error("Erro ao iniciar o servidor:", err);
  }
};
startServer();
