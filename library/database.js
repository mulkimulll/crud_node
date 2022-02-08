// import library mysql
let mysql = require('mysql');

// variable connection yang isinya merupakan konfigurasi dari koneksi database MySQL.
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_express_mysql'
});

// kondisi untuk melihat apakah koneksi database ke dalam MySQL berjalan atau tidak
connection.connect(function (error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Koneksi Berhasil!');
    }
})

// export module connection, agar kita dapat menggunakannya di dalam file lain
module.exports = connection;