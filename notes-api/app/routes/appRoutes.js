'use strict';
module.exports = function(app) {
  var classes = require('../controller/classesController.js');
/*
  var evaluations = require('../controller/evaluationsController.js');
  var utilisateurs = require('../controller/utilisateursController.js');
  var notes = require('../controller/notesController.js');
*/

    app.route('/classes')
        .get(classes.list)
        .post(classes.create)
        .put(classes.update)
        .delete(classes.delete);
/*
    app.route('/utilisateurs')
        .get(utilisateurs.list)
        .post(utilisateurs.create)
        .put(utilisateurs.update)
        .delete(utilisateurs.delete);
   
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