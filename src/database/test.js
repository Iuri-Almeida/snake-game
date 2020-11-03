const Database = require('./db.js');
const register = require('./register.js');

Database.then(async function (db) {
    // await register(db, {
    //     name: 'João',
    //     score: '17'
    // })

    // consultar os dados da tabela
    // const users = await db.all(`SELECT * FROM users`);
    // console.log(users);

    // consultar dados na tabela pelo id
    // const user = await db.all(`SELECT score FROM users WHERE name = "Iuri"`);
    // console.log(user[0].score);

    // // deletar todos os dados da tabela
    // console.log(await db.run(`DELETE FROM users`));

    // // deletar dado da tabela pelo id
    // console.log(await db.run(`DELETE FROM users WHERE id = 4`))
})