"user strict";
var sql = require("./db.js");

//classe object constructor
var classe = function(classe) {
  this.idClasse = classe.idClasse;
  this.intituleClasse = classe.intituleClasse;
};

classe.create = function(classe, result) {
  sql.query(
    "INSERT INTO classe(intituleClasse) VALUES(?)",
    classe.intituleClasse,
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res.insertId);
      }
    }
  );
};
classe.getAll = function(result) {
  sql.query("SELECT * FROM classe", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
classe.update = function(classe, result) {
  sql.query(
    "UPDATE classe SET intituleClasse = ? WHERE idClasse = ?",
    [classe.intituleClasse, classe.idClasse],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
classe.remove = function(classe, result) {
  sql.query("DELETE FROM classe WHERE idClasse = ?", classe.idClasse, function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = classe;
