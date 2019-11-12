'use strict';

var Classe = require('../model/classeModel.js');

exports.list = function(req, res) {
    Classe.getAll(function(err, classes) {

    if (err){
        res.send(err);
    }
    res.send(classes);
  });
};



exports.create = function(req, res) {
  var classe = new Classe(req.body);

    if(!classe.intituleClasse){
        res.status(400).send({ error:true, message: 'Veuillez fournir un intitulé' });
    }
    else{
        Classe.create(classe, function(err, task) {
            if (err){
                res.send(err);
            }
            res.json(classe);
        });
    }
};

exports.update = function(req, res) {
    var classe = new Classe(req.body);
    classe.idClasse = req.params.idClasse;

    if(!classe.idClasse || !classe.intituleClasse){
        res.status(400).send({ error:true, message: 'Veuillez fournir un id et un intitulé' });
    }
    else{
        Classe.update(classe, function(err, task) {
            if (err){
                res.send(err);
            }
            res.json(classe);
        });
    }
};


exports.delete = function(req, res) {
    var classe = new Classe(req.body);
    classe.idClasse = req.params.idClasse;
    
    if(!classe.idClasse){
        res.status(400).send({ error:true, message: 'Veuillez fournir un id' });
    }
    else{
        Classe.remove(classe, function(err, task) {
            if (err){
                res.send(err);
            }
            res.json({ message: 'Classe supprimée' });
        });
    }
};