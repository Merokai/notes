"use strict";

var Enseignant = require("../model/enseignantModel.js");

exports.list = function(req, res) {
  Enseignant.getAll(function(err, enseignants) {
    if (err) {
      res.send(err);
    }
    res.send(enseignants);
  });
};

exports.get = function(req, res) {
  if (!req.params.idUtilisateur) {
    res.status(400).send({
      error: true,
      message: "Veuillez fournir un identifiant utilisateur"
    });
  } else {
    Enseignant.getByIdUtilisateur(req.params.idUtilisateur, function(
      err,
      enseignants
    ) {
      if (err) {
        res.send(err);
      }
      res.send(enseignants);
    });
  }
};

exports.create = function(req, res) {
  var enseignant = new Enseignant(req.body);

  if (
    !enseignant.idUtilisateur
  ) {
    res.status(400).send({
      error: true,
      message: "Veuillez fournir un identifiant utilisateur"
    });
  } else {
    Enseignant.create(enseignant, function(err, task) {
      if (err) {
        res.send(err);
      }
      res.json(enseignant);
    });
  }
};

exports.delete = function(req, res) {
  var enseignant = new Enseignant(req.body);
  enseignant.idUtilisateur = req.params.idUtilisateur;

  if (!enseignant.idUtilisateur) {
    res.status(400).send({ error: true, message: "Veuillez fournir un id" });
  } else {
    Enseignant.remove(enseignant, function(err, task) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Enseignant supprimé" });
    });
  }
};
