import express from 'express';
import "dotenv/config";

const PORTA = process.env.PORT;

const produtos = [
    {
        id: 1,
        nome: "Mouse Gamer",
        preco: 99.9,
        categoria: "Informatica"
    },
    {
        id: 2,
        nome: "Geladeira",
        preco: 2500,
        categoria: "Eletrodomestisco",
    },
    {
        id: 3,
        nome: "Monitor Ultrawide",
        preco: 1250,
        categoria: "Informatica"
    },
];

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get("/produtos", (req, res) => {
    res.json("produtos");
});

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;

    const idConvertido = Number(id);

    if (isNaN(idConvertido)) {
        res.status(400).send("Parâmetro id inválido");
    }
    
    const produto = produto.find(p => p.id === idConvertido);

    if (!produto) {
        res.status(404).json({erro: "Produto não encontrado"});
    }

    res.json(produto);
});

app.listen(PORTA, () => {
  console.log(`Server is running on http://localhost:${PORTA}`);
});

