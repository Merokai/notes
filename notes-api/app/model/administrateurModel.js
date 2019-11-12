"user strict";
var sql = require("./db.js");

//classe object constructor
var administrateur = function(administrateur) {
  this.idUtilisateur = administrateur.idUtilisateur;
};

administrateur.create = function(administrateur, result) {
  sql.query(
    "INSERT INTO administrateur(idUtilisateur) VALUES(?)",
    administrateur.idUtilisateur,
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

administrateur.getByIdUtilisateur = function(idUtilisateur, result) {
  sql.query(
    "SELECT * FROM administrateur WHERE idUtilisateur = ?",
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

administrateur.getAll = function(result) {
  sql.query("SELECT * FROM administrateur", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

administrateur.remove = function(administrateur, result) {
  sql.query(
    "DELETE FROM administrateur WHERE idUtilisateur = ?",
    administrateur.idUtilisateur,
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

module.exports = administrateur;
