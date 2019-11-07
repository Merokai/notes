
INSERT INTO classe(idClasse,intituleClasse) VALUES(1, "UDEV 1"), (2, "UDEV 2"), (3, "POE UDEV");
INSERT INTO utilisateur(idUtilisateur, nom, prenom, motDePasse) VALUES(1, "Istrateur", "Amine", "admin"),
(2, "Dirlo", "Leux", "dirlo"), (3, "Saignant", "Lent", "enseignant"), (4, "Lemediocre", "Eleve", "mediocre"),
(5, "Lepassable", "Eleve", "passable"), (6, "Lemoyen", "Eleve", "moyen"), (7, "Lebon", "Eleve", "bon"),
(8, "Lebrillant", "Eleve", "brillant")

INSERT INTO administrateur(idUtilisateur) VALUES(1);
INSERT INTO apprenant(idApprenant, idUtilisateur, idClasse) VALUES(1, 4, 1),
(2, 5, 2), (3, 6, 3), (4, 7, 1), (5, 8, 2);

INSERT INTO enseignant(idEnseignant, idUtilisateur) VALUES(1, 3);

INSERT INTO responsablePedagogique(idUtilisateur) VALUES(2);

INSERT INTO evaluation(idEvaluation, intitule, date, idEnseignant, idClasse) VALUES(1, "SQL", NOW(), 1, 1),
(2, "Javascript", NOW(), 1, 2), (3, "HTML/CSS", NOW(), 1, 3), (4, "Java", NOW(), 1, 1), (5, "UML", NOW(), 1, 2),
(6, "Algo", NOW(), 1, 3);

INSERT INTO note(idEvaluation, idApprenant, valeur) VALUES(1, 1, 12.25),
(1, 4, 16.25), (2, 2, 17.50), (2, 5, 11.00), (3, 3, 14.75);
