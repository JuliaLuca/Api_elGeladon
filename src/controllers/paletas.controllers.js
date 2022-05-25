//o controller é a função de callback da nossa rota, todas as funçoes devem receber req e resp.
//os controllers sao os responsaveis por lidar com o request e o response, e vai chamar nosso service e por fim retorna a resposta do usuario
import PaletasServices from '../services/paletas.services';

const paletasServices = new PaletasServices(); //como é uma classe, ela precisa ser declarada.

class PaletasControllers {
  listarTodas(request, response) {
    //os metodos das classes sempre irao receber request e response, pq irao sempre ser chamados na rota
    try {
      const paletas = paletasServices.listarTodas();
      response.send(paletas);
    } catch (error) {
      response.status(error.status).sen(error.message);
    }
  }

  listarUmaPaletaPorId(request, response) {
    const id = Number(request.params.id);
    const paleta = paletasServices.listarUmaPaletaPorId(id);
    response.send(paleta);
  }
  criarNovaPaleta(request, response) {
    const { sabor, descricao, foto, preco } = request.body; //ta pegando os quatro valores de dentro do request.body

    const novaPaleta = paletasServices.criarNovaPaleta(
      sabor,
      descricao,
      foto,
      preco,
    );
    response.status(201).send(novaPaleta);
  }
  atualizarPaleta(request, response) {
    const { sabor, descricao, foto, preco } = request.body;
    const id = Number(request.params.id);

    const paletaAtualizada = paletasServices.atualizarPaleta(
      sabor,
      descricao,
      foto,
      preco,
    );

    response.send(paletaAtualizada);
  }
  excluirPaleta(request, response) {
    const id = Number(request.params.id);

    paletasServices.excluirPaleta(id);

    response.sendStatus(204); //padrao utilizado para retorno de uma rota de delete
  }
}

export default PaletasControllers;
//classes podem ser maiusculas, funcoes nao, variaveis tambem nao.
