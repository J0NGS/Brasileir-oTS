import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('brasileirao.sqlite');

db.run(`INSERT INTO times (nome) VALUES ('Time A')`);
db.run(`INSERT INTO times (nome) VALUES ('Time B')`);

