"use strict";

var Apprenant = require("../model/apprenantModel.js");

exports.list = function(req, res) {
  Apprenant.getAll(function(err, apprenants) {
    if (err) {
      res.send(err);
    }
    res.send(apprenants);
  });
};

exports.get = function(req, res) {
  if (!req.params.idUtilisateur) {
    res.status(400).send({
      error: true,
      message: "Veuillez fournir un identifiant utilisateur"
    });
  } else {
    Apprenant.getByIdUtilisateur(req.params.idUtilisateur, function(
      err,
      apprenants
    ) {
      if (err) {
        res.send(err);
      }
      res.send(apprenants);
    });
  }
};

exports.create = function(req, res) {
  var apprenant = new Apprenant(req.body);

  if (
    !apprenant.idUtilisateur
  ) {
    res.status(400).send({
      error: true,
      message: "Veuillez fournir un identifiant utilisateur"
    });
  } else {
    Apprenant.create(apprenant, function(err, task) {
      if (err) {
        res.send(err);
      }
      res.json(apprenant);
    });
  }
};

exports.delete = function(req, res) {
  var apprenant = new Apprenant(req.body);
  apprenant.idUtilisateur = req.params.idUtilisateur;

  if (!apprenant.idUtilisateur) {
    res.status(400).send({ error: true, message: "Veuillez fournir un id" });
  } else {
    Apprenant.remove(apprenant, function(err, task) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Apprenant supprimé" });
    });
  }
};
