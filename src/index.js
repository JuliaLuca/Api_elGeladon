const express = require('express');
const cors = require('cors');
const port = 3000;
import paletasRouter from './routes/paletas.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  return response.send('Hello Blue');
});

app.use("/paletas", paletasRouter);

//app.get('/paletas/listar-todas', (req, res) => {
//  res.send(paletas);
//});

//app.get('/paletas/paleta/:id', (request, response) => {
//  const id = Number(request.params.id);

//  const paletaSelecionada = paletas.find((elem) => elem.id === id);

//  if (paletaSelecionada === undefined) {
//    return response.status(404).send('Paleta não encontrada!!');
//  }
//  return response.send(paletaSelecionada);
//});

app.listen(port, () => {
  console.log(`A aplicação esta rodando na porta http://localhost:${port}`);
});
