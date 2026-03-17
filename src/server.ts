import express from "express";
import tarefasRoutes from "./routes/filmes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/filmes", tarefasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost:${PORT}`);
});

