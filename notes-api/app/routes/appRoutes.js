'use strict';
module.exports = function(app) {
  var classes = require('../controller/classesController.js');
  var utilisateurs = require('../controller/utilisateursController.js');
  var administrateurs = require('../controller/administrateursController.js');
  var enseignants = require('../controller/enseignantsController.js');

/*
  var evaluations = require('../controller/evaluationsController.js');
  var notes = require('../controller/notesController.js');
*/

    app.route('/classes')
      .get(classes.list)
      .post(classes.create);

    app.route('/classes/:idClasse')
      .put(classes.update)
      .delete(classes.delete);


    app.route('/utilisateurs')
      .get(utilisateurs.list)
      .post(utilisateurs.create);

    app.route('/utilisateurs/:idUtilisateur')
      .put(utilisateurs.update)
      .delete(utilisateurs.delete);

    app.route('/administrateurs')
      .get(administrateurs.list)
      .post(administrateurs.create);

    app.route('/administrateurs/:idUtilisateur')
      .get(administrateurs.get)
      .delete(administrateurs.delete);

      app.route('/enseignants')
        .get(enseignants.list)
        .post(enseignants.create);
  
      app.route('/enseignants/:idUtilisateur')
        .get(enseignants.get)
        .delete(enseignants.delete);
        /*
   
    app.route('/evaluations')
        .get(evaluations.list)
        .post(evaluations.create)
        .put(evaluations.update)
        .delete(evaluations.delete);

    app.route('/notes')
        .get(notes.list)
        .post(notes.create)
        .put(notes.update)
        .delete(notes.delete);
*/
};