//step-1
var mysql = require('mysql');
//step-2
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "booking"
});

//step-3
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //step-4
  var sql = "INSERT INTO travelors (id, bookingname, city, passport) VALUES ?";
  //step-5
  var values = [
    [1, 3, 5,4],

  ];
  //step-6
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});