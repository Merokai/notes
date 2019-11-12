"user strict";
var sql = require("./db.js");

//classe object constructor
var apprenant = function(apprenant) {
  this.idUtilisateur = apprenant.idUtilisateur;
  this.idClasse = apprenant.idClasse;
};

apprenant.create = function(apprenant, result) {
  sql.query(
    "INSERT INTO apprenant(idUtilisateur, idClasse) VALUES(?, ?)",
    [apprenant.idUtilisateur, apprenant.idClasse],
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

apprenant.getAll = function(result) {
  sql.query("SELECT * FROM apprenant", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

apprenant.getByIdUtilisateur = function(idUtilisateur, result) {
    sql.query(
      "SELECT utilisateur.idUtilisateur, nom, prenom FROM apprenant, utilisateur WHERE utilisateur.idUtilisateur = apprenant.idUtilisateur AND utilisateur.idUtilisateur = ?",
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

apprenant.getByIdClasse = function(idClasse, result) {
  sql.query(
    "SELECT utilisateur.idUtilisateur, nom, prenom FROM apprenant, utilisateur WHERE utilisateur.idUtilisateur = apprenant.idUtilisateur AND utilisateur.idClasse = ?",
    idClasse,
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

apprenant.update = function(apprenant, result) {
  sql.query(
    "UPDATE apprenant SET idClasse = ? WHERE idUtilisateur = ?",
    [apprenant.idClasse, apprenant.idUtilisateur],
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
apprenant.remove = function(apprenant, result) {
  sql.query(
    "DELETE FROM apprenant WHERE idUtilisateur = ?",
    apprenant.idUtilisateur,
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

module.exports = apprenant;
