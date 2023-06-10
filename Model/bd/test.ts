import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('brasileirao.sqlite');
db.all(`SELECT * FROM times WHERE nome = 'Time A'`, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log('Times');
    console.log(rows);
  });
  