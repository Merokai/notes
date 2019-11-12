"use strict";

var ResponsablePedagogique = require("../model/responsablePedagogiqueModel.js");

exports.list = function(req, res) {
  ResponsablePedagogique.getAll(function(err, responsablePedagogiques) {
    if (err) {
      res.send(err);
    }
    res.send(responsablePedagogiques);
  });
};

exports.get = function(req, res) {
  if (!req.params.idUtilisateur) {
    res.status(400).send({
      error: true,
      message: "Veuillez fournir un identifiant utilisateur"
    });
  } else {
    ResponsablePedagogique.getByIdUtilisateur(req.params.idUtilisateur, function(
      err,
      responsablePedagogiques
    ) {
      console.log("controller");
      if (err) {
        res.send(err);
      }
      res.send(responsablePedagogiques);
    });
  }
};

exports.create = function(req, res) {
  var responsablePedagogique = new ResponsablePedagogique(req.body);

  if (
    !responsablePedagogique.idUtilisateur
  ) {
    res.status(400).send({
      error: true,
      message: "Veuillez fournir un nom, prenom et mot de passe"
    });
  } else {
    ResponsablePedagogique.create(responsablePedagogique, function(err, task) {
      if (err) {
        res.send(err);
      }
      res.json(responsablePedagogique);
    });
  }
};

exports.delete = function(req, res) {
  var responsablePedagogique = new ResponsablePedagogique(req.body);
  responsablePedagogique.idUtilisateur = req.params.idUtilisateur;

  if (!responsablePedagogique.idUtilisateur) {
    res.status(400).send({ error: true, message: "Veuillez fournir un id" });
  } else {
    ResponsablePedagogique.remove(responsablePedagogique, function(err, task) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "ResponsablePedagogique supprimé" });
    });
  }
};
