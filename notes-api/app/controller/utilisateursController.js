'use strict';

var Utilisateur = require('../model/utilisateurModel.js');

exports.list = function(req, res) {
    Utilisateur.getAll(function(err, utilisateurs) {

    if (err){
        res.send(err);
    }
    res.send(utilisateurs);
  });
};



exports.create = function(req, res) {
  var utilisateur = new Utilisateur(req.body);

    if(!utilisateur.nom || !utilisateur.prenom || !utilisateur.motDePasse){
        res.status(400).send({ error:true, message: 'Veuillez fournir un nom, prenom et mot de passe' });
    }
    else{
        Utilisateur.create(utilisateur, function(err, task) {
            if (err){
                res.send(err);
            }
            res.json(utilisateur);
        });
    }
};

exports.update = function(req, res) {
    var utilisateur = new Utilisateur(req.body);
    utilisateur.idUtilisateur = req.params.idUtilisateur;

    if(!utilisateur.idUtilisateur || !utilisateur.nom || !utilisateur.prenom || !utilisateur.motDePasse){
        res.status(400).send({ error:true, message: 'Veuillez fournir un id et un intitulé' });
    }
    else{
        Utilisateur.update(utilisateur, function(err, task) {
            if (err){
                res.send(err);
            }
            res.json(utilisateur);
        });
    }
};


exports.delete = function(req, res) {
    var utilisateur = new Utilisateur(req.body);
    utilisateur.idUtilisateur = req.params.idUtilisateur;
    
    if(!utilisateur.idUtilisateur){
        res.status(400).send({ error:true, message: 'Veuillez fournir un id' });
    }
    else{
        Utilisateur.remove(utilisateur, function(err, task) {
            if (err){
                res.send(err);
            }
            res.json({ message: 'Utilisateur supprimé' });
        });
    }
};