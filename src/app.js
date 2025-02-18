import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/livrosRoutes.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
app.use('/', routes);

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    if (index !== -1) {
        livros.splice(index, 1);
        res.status(200).send("livro removido com sucesso");
    } else {
        res.status(404).send("registro não encontrado");
    }
});

export default app;
