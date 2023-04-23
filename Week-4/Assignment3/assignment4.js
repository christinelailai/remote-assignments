const express = require('express')
const mysql = require('mysql2');
const dotenv = require('dotenv')
dotenv.config();


const pool = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port:3306
})

function selectAccount(email) {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM user where email = ?",[email], (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}
function signUp(email, password) {
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO user (email, password) VALUES (? ,?)",[email, password], (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}


function signIn(email, password) {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM user WHERE email = ? AND password = ?",[email, password] , (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        })
    });
}



// function signup(email) {
//     const result = pool.query(`select password from USER where email = ? `,[email]);
//         return result;
// }




//signUp('ydnac@gmail.com').then((result) => { console.log(result[0].password)})

//signIn('dnac@gmail.com','koio').then((result) => { console.log(result.insertId)})

module.exports= {signUp,signIn,selectAccount};