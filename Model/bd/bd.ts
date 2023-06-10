import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('brasileirao.sqlite');

db.run('CREATE TABLE IF NOT EXISTS times( id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL)');
db.run('CREATE TABLE IF NOT EXISTS jogadores( id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, posicao TEXT NOT NULL, peso REAL NOT NULL, altura REAL NOT NULL, nascimento TEXT NOT NULL, timeId INTEGER, FOREIGN KEY (timeId) REFERENCES times(id))');


