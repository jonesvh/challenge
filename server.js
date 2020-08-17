import express from 'express';
import favicon from 'express-favicon';
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();
app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele
  if (req.headers["x-forwarded-proto"] == "http") //Checa se o protocolo informado nos headers é HTTP
      res.redirect(`https://${req.hostname}${req.url}`); //Redireciona pra HTTPS
  else //Se a requisição já é HTTPS
      next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
});
const __dirname = path.resolve();

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
  return res.send('pong');
});
app.get('/*', function (req, res) {

  console.log(path.join(__dirname, 'build', 'index.html'))

  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => { console.log(`listen port ${port}`) });

export default undefined