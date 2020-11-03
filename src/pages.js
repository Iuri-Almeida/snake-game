const Database = require('./database/db.js');
const register = require('./database/register.js');

module.exports = {

    async index (req, res) {
        try {
            const db = await Database;
            const users = await db.all(`SELECT * FROM users`);

            // colocar os jogadores em ordem decrescente
            users.sort((a, b) => (b.score - a.score));

            // para cada jogador, adicionar a sua posição
            for (let i = 0; i < users.length; i++) {
                users[i].position = i + 1;
            }

            return res.render('index', { users: users });
        } catch (error) {
            console.log(error);
            return res.send('Erro no Banco de Dados!');
        }
    },

    async saveScore (req, res) {
        const fields = req.body;

        // validar se todos os campos estão preenchidos
        if (Object.values(fields).includes('')) {
            return res.send('Informe seu nome!')
        }

        try {
            // registrar o usuário
            const db = await Database;
            const users = await db.all(`SELECT * FROM users`);

            // criar arrays para conter todos os names e scores do BD
            let usersName = usersScore = [];

            // para cada usuário cadastrado, adicione o nome em usersName e o score em usersScore
            for (let i in users) {
                usersName.push(users[i].name);
                usersScore.push(users[i].score);
            }

            // se encontrar o nome enviado no forms dentro dos nomes cadastrados no BD
            if (usersName.indexOf(fields.name) != -1) {
                // selecione a pontuação antiga do usuário que está se cadastrando de novo
                var user = await db.all(`SELECT score FROM users WHERE name = "${fields.name}"`);
                // esse novo nome que está registrando está fazendo mais ponto que o salvo?
                if (fields.score > user[0].score) {
                    // se sim, delete a pontuação salva anteriormente
                    await db.run(`DELETE FROM users WHERE name = "${fields.name}"`)

                    // salve a nova pontuação mais alta
                    await register(db, {
                        name: fields.name,
                        score: fields.score
                    })
                }
            }
            
            // caso não encontre nenhum nome parecido, cadastre como um novo
            else {
                await register(db, {
                    name: fields.name,
                    score: fields.score
                })
            }

            // redirecionar o usuário
            return res.redirect('/')

        } catch (error) {
            console.log(error);
            return res.send('Erro no banco de dados!');
        }

    }
}