const MySqli = require('mysqli');

let conn = new MySqli({
    Host : 'localhost' , //  IP/domain name
    post : 3306 , // Port, default 3306
    user : 'root' , // Username
    passwd : '', // password
    db : 'mega_shop' //You  can specify the database or not [optional]
});

//false to have from multiple databases master and slave
let db = conn.emit(false,'');

module.exports = {
    database: db
};