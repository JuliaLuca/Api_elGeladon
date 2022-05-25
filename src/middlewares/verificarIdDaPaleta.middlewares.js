import paletas from '../database';

const verificarIdDaPaletaMiddlewares = (request, response, next) => {
  const id = Number(request.params.id);

  const paleta = paletas.find((elem) => elem.id === id);

  if (!paleta) {
    response.status(404).send('Paleta não encontrada!');
  }
  next();
};

export default verificarIdDaPaletaMiddlewares;
