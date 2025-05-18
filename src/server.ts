import { app } from "./app";

const { PORT } = process.env;
export const startServer = () => {
  app.listen(3000, () => {
    console.log(`Servidor Rodando na Porta ${PORT}`);
  });
};
startServer();
