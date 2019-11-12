"use strict";

var Administrateur = require("../model/administrateurModel.js");

exports.list = function(req, res) {
  Administrateur.getAll(function(err, administrateurs) {
    if (err) {
      res.send(err);
    }
    res.send(administrateurs);
  });
};

exports.get = function(req, res) {
  if (!req.params.idUtilisateur) {
    res.status(400).send({
      error: true,
      message: "Veuillez fournir un identifiant utilisateur"
    });
  } else {
    Administrateur.getByIdUtilisateur(req.params.idUtilisateur, function(
      err,
      administrateurs
    ) {
      if (err) {
        res.send(err);
      }
      res.send(administrateurs);
    });
  }
};

exports.create = function(req, res) {
  var administrateur = new Administrateur(req.body);

  if (
    !administrateur.idUtilisateur
  ) {
    res.status(400).send({
      error: true,
      message: "Veuillez fournir un nom, prenom et mot de passe"
    });
  } else {
    Administrateur.create(administrateur, function(err, task) {
      if (err) {
        res.send(err);
      }
      res.json(administrateur);
    });
  }
};

exports.delete = function(req, res) {
  var administrateur = new Administrateur(req.body);
  administrateur.idUtilisateur = req.params.idUtilisateur;

  if (!administrateur.idUtilisateur) {
    res.status(400).send({ error: true, message: "Veuillez fournir un id" });
  } else {
    Administrateur.remove(administrateur, function(err, task) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Administrateur supprimé" });
    });
  }
};
