var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.hostname,
    user: process.env.username1,
    password: process.env.passwordname,
    database: process.env.databasename
});

exports.pool = pool;


exports.rows = function(procedureName, args) {
    return callProcedure(procedureName, args).then(function(resultsets) {
        return resultsets[0];
    });
}

exports.row = function(procedureName, args) {
    return callProcedure(procedureName, args).then(function(resultsets) {
        return resultsets[0][0];
    });
}

exports.empty = function(procedureName, args) {
    return callProcedure(procedureName, args).then(function() {
      return;
    });
  }


function callProcedure(procedureName, args) {
    return new Promise(function(resolve, reject) {
        pool.getConnection(function(err, connection) {
        if (err) {
            reject(err)
        } else {
            var placeholders = "";
            if (args && args.length > 0) {
                for (var i = 0; i < args.length; i++) {
                    if (i === args.length - 1) {
                    placeholders += "?";
                } else {
                    placeholders += "?,";
                }
            }
        }
        var callString = "CALL " + procedureName + "(" + placeholders + ");";
        connection.query(callString, args, function(err, resultsets) {
            connection.release();
            if (err){
                reject(err);
            } else {
                resolve(resultsets);
            }
        });
        }   
     });
    });
}