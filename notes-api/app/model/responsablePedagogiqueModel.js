"user strict";
var sql = require("./db.js");

//classe object constructor
var responsablePedagogique = function(responsablePedagogique) {
  this.idUtilisateur = responsablePedagogique.idUtilisateur;
};

responsablePedagogique.create = function(responsablePedagogique, result) {
  sql.query(
    "INSERT INTO responsablePedagogique(idUtilisateur) VALUES(?)",
    responsablePedagogique.idUtilisateur,
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

responsablePedagogique.getByIdUtilisateur = function(idUtilisateur, result) {
  sql.query(
    "SELECT * FROM responsablePedagogique WHERE idUtilisateur = ?",
    idUtilisateur,
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

responsablePedagogique.getAll = function(result) {
  sql.query("SELECT * FROM responsablePedagogique", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

responsablePedagogique.remove = function(responsablePedagogique, result) {
  sql.query(
    "DELETE FROM responsablePedagogique WHERE idUtilisateur = ?",
    responsablePedagogique.idUtilisateur,
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

module.exports = responsablePedagogique;
