"user strict";
var sql = require("./db.js");

//classe object constructor
var utilisateur = function(utilisateur) {
  this.idUtilisateur = utilisateur.idUtilisateur || null;
  this.nom = utilisateur.nom;
  this.prenom = utilisateur.prenom;
  this.motDePasse = utilisateur.motDePasse;
};

utilisateur.create = function(utilisateur, result) {
  sql.query(
    "INSERT INTO utilisateur(nom, prenom, motDePasse) VALUES(?, ?, ?)",
    [utilisateur.nom, utilisateur.prenom, utilisateur.motDePasse],
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

utilisateur.getAll = function(result) {
  sql.query("SELECT * FROM utilisateur", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
utilisateur.update = function(utilisateur, result) {
  sql.query(
    "UPDATE utilisateur SET nom = ?, prenom = ?, motDePasse = ? WHERE idUtilisateur = ?",
    [
      utilisateur.nom,
      utilisateur.prenom,
      utilisateur.motDePasse,
      utilisateur.idUtilisateur
    ],
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
utilisateur.remove = function(utilisateur, result) {
  sql.query(
    "DELETE FROM utilisateur WHERE idUtilisateur = ?",
    utilisateur.idUtilisateur,
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

module.exports = utilisateur;
