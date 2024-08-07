const { Raffle } = require('../models/Raffle');


// Método para gerar um número único para a rifa de sorteio
async function generateUniqueNumber() {
    let number;
    let exists = true;
    while (exists) {
        number = Math.floor(Math.random() * 1000000);
        exists = await Raffle.findOne({where: {number} });
    }
    return number;
}

// Método para comprar uma rifa de sorteio
exports.buyRaffle = async (req, res) => {
    try {
        const {user} = req.body;
        const number = await generateUniqueNumber();

        const newRaffle = await new Raffle({number, purchased: true, user});
        res.status(201).json({
            message: 'Rifa comprada com sucesso', raffle: newRaffle
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error ao comprar rifa', error
        })
    }
};

// Método para realizar o sorteio
exports.drawRaffle = async (req, res) => {
    try {
        const raffles = await Raffle.findAll({where: {purchased: true} });
        if (raffles.length === 0) {
            return res.status(400).json({
                message: 'Nenhuma rifa comprada para sortear'
            });
        }
    
        const winner = raffles[Math.floor(Math.random() * raffles.length )];
        res.status(200).json({
            message: 'Sorteio realizado com sucesso', winner
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao realizar o sorteio', error
        });
    }
}