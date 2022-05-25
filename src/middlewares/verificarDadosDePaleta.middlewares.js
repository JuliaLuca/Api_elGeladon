const verificarDadosDePaletaMiddlewares = (request, response, next) => {
  const { sabor, descricao, foto, preco } = request.body;

  if (!sabor || !descricao || !foto || !preco) {
    return response.status(422).send('Dados Incompletos');
  }
  next();
};
export default verificarDadosDePaletaMiddlewares;
