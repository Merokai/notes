"user strict";
var sql = require("./db.js");

//classe object constructor
var enseignant = function(enseignant) {
  this.idUtilisateur = enseignant.idUtilisateur;
};

enseignant.create = function(enseignant, result) {
  sql.query(
    "INSERT INTO enseignant(idUtilisateur) VALUES(?)",
    enseignant.idUtilisateur,
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

enseignant.getByIdUtilisateur = function(idUtilisateur, result) {
  sql.query(
    "SELECT * FROM enseignant WHERE idUtilisateur = ?",
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

enseignant.getAll = function(result) {
  sql.query("SELECT * FROM enseignant", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

enseignant.remove = function(enseignant, result) {
  sql.query(
    "DELETE FROM enseignant WHERE idUtilisateur = ?",
    enseignant.idUtilisateur,
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

module.exports = enseignant;
