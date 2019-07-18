const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Checkout"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const addProfile = (profile, callback) => {
    let queryString = `INSERT into Profile (name, email, password, address, city, state, zip, ccNumber, ccExpiration, cvv, ccZip)
    VALUES ('${profile.name}', '${profile.email}', '${profile.password}', '${profile.address}', '${profile.city}', '${profile.state}', '${profile.zip}', '${profile.ccNumber}',
    '${profile.ccExpiration}', '${profile.cvv}', '${profile.ccZip}');`

    con.query(queryString, (err, data) => {
        if (err) {
            console.log(err);
        }
        callback(null, data);
    });
}

module.exports = {addProfile}