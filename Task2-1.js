var mysql = require('mysql');
const { userInfo } = require('os');
var con = mysql.createConnection(
    {
        host:"localhost",
        user:'root',
        password:'',
        database:'emp'        
    }
);
con.connect(function(err)
{
    if(err) throw err;

})
function createDatabase(dbname)
{
    
    con.query(`CREATE DATABASE ${dbname}`,function(err,result)
    {
        if(err) throw err;
        
    })
}
function createTable()
{
    var sql = "Create table employees(id INT PRIMART KEY AUTO_INCREMENT,name VARCHAR(255),department VARCHAR(100),salary DECIMAL(10,2));";
    con.query(sql,function(err)
    {
        if(err) throw err;
    })
}