const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {sequelize} = require('./models/Raffle');

const app = express();
const PORT = 3000;

app.use(cors());
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
}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
});