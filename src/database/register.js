function register(db, user) {
    return db.run(`
        INSERT INTO users (
            name,
            score
        ) VALUES (
            "${user.name}",
            "${user.score}"
        );
    `)
}

module.exports = register;