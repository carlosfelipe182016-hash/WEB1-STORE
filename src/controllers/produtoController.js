import { buscarTodosProdutos } from '../repositories/produtoRepository.js';
import { buscarProdutos} from "../database/db.json";

async function buscarProdutos(req, res){
    const produtos = await buscarTodosProdutos();
    res.json(produtos);

async function buscarProdutoPorId(req, res) {
    const id = req.params.id;
    const idConvertido = Number(id);

    if (isNaN(idConvertido)) {
        res.status(400).send("Parâmetro id inválido");
        return;
    }

    const produtos = await buscarTodosProdutos();
    const produto = produtos.find(p => p.id === idConvertido);

    if (!produto) {
        res.status(404).json({ erro: "Produto não encontrado" });
        return;
    }

    res.json(produto);
}; 

export {
    buscarProdutos,
};
export {
    buscarProdutoPorId
};
