const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./models/Raffle');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rota básica de teste
app.get('/', (req, res) => {
    res.send('Backend da aplicação de sorteio de rifas');
})


// Importar rotas
const raffleRoutes = require('./routes/raffleRoutes');
app.use('/raffles', raffleRoutes);


// Sincronizar com o DB e iniciar o servidor
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});