//criar rotas que vao receber os controllers
//routes sao as portas de entrada, os caminhos

import { Router } from 'express'; //router é uma classe e precisa ser instanciada.
import PaletasControllers from '../controllers/paletas.controllers';
import verificarIdDaPaletaMiddlewares from '../middlewares/verificarIdDaPaleta.middlewares';
import verificarDadosDePaletaMiddlewares from '../middlewares/verificarDadosDePaleta.middlewares';

const paletasControllers = new PaletasControllers();
const paletasRouter = Router();

paletasRouter.get('/listar-todas', paletasControllers.listarTodas);
paletasRouter.get(
  '/paleta/:id',
  verificarIdDaPaletaMiddlewares,
  paletasControllers.listarUmaPaletaPorId,
);
paletasRouter.post(
  '/criar-paleta',
  verificarDadosDePaletaMiddlewares,
  paletasControllers.criarNovaPaleta,
);
paletasRouter.put(
  '/atualizar-paleta/:id',
  verificarIdDaPaletaMiddlewares,
  verificarDadosDePaletaMiddlewares,
  paletasControllers.atualizarPaleta,
);
paletasRouter.delete(
  '/excluir-paleta/:id',
  verificarIdDaPaletaMiddlewares,
  paletasControllers.excluirPaleta,
);

export default paletasRouter;
