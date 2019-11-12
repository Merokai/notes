-- Tables

CREATE TABLE classe (
  idClasse int(11) NOT NULL AUTO_INCREMENT,
  intituleClasse varchar(60) NOT NULL,
  PRIMARY KEY (idClasse)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE utilisateur (
  idUtilisateur int(11) NOT NULL AUTO_INCREMENT,
  nom varchar(50) NOT NULL,
  prenom varchar(50) NOT NULL,
  motDePasse varchar(32) NOT NULL,
  PRIMARY KEY (idUtilisateur)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE administrateur (
  idUtilisateur int(11) NOT NULL,
  PRIMARY KEY (idUtilisateur)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  
  
CREATE TABLE apprenant (
  idUtilisateur int(11) NOT NULL,
  idClasse int(11) NOT NULL,
  PRIMARY KEY (idUtilisateur)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  
  
CREATE TABLE enseignant (
  idUtilisateur int(11) NOT NULL,
  PRIMARY KEY (idUtilisateur)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  
  
CREATE TABLE responsablePedagogique (
  idUtilisateur int(11) NOT NULL,
  PRIMARY KEY (idUtilisateur)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  

CREATE TABLE evaluation (
  idEvaluation int(11) NOT NULL AUTO_INCREMENT,
  intitule varchar(60) NOT NULL,
  date datetime DEFAULT NULL,
  idEnseignant int(11) NOT NULL,
  idClasse INT(11) NOT NULL,
  PRIMARY KEY (idEvaluation)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  
CREATE TABLE note (
  idEvaluation int(11) NOT NULL,
  idApprenant int(11) NOT NULL,
  valeur decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



-- Clés étrangères
ALTER TABLE administrateur
	ADD CONSTRAINT administrateur_utilisateur
		FOREIGN KEY (idUtilisateur) REFERENCES utilisateur (idUtilisateur)
			ON DELETE CASCADE ON UPDATE CASCADE;
  
  
ALTER TABLE apprenant
	ADD CONSTRAINT apprenant_utilisateur
		FOREIGN KEY (idUtilisateur) REFERENCES utilisateur (idUtilisateur)
			ON DELETE CASCADE ON UPDATE CASCADE,
			
	ADD CONSTRAINT apprenant_classe
		FOREIGN KEY (idClasse) REFERENCES classe (idClasse)
			ON DELETE CASCADE ON UPDATE CASCADE;

			
ALTER TABLE enseignant
	ADD CONSTRAINT enseignant_utilisateur
		FOREIGN KEY (idUtilisateur) REFERENCES utilisateur (idUtilisateur)
			ON DELETE CASCADE ON UPDATE CASCADE;

			
ALTER TABLE responsablePedagogique
	ADD CONSTRAINT responsablePedagogique_utilisateur
		FOREIGN KEY (idUtilisateur) REFERENCES utilisateur (idUtilisateur)
			ON DELETE CASCADE ON UPDATE CASCADE;

			
ALTER TABLE evaluation
	ADD CONSTRAINT evaluation_enseignant
		FOREIGN KEY (idEnseignant) REFERENCES enseignant (idUtilisateur)
			ON DELETE CASCADE ON UPDATE CASCADE,
			
	ADD CONSTRAINT evaluation_classe
		FOREIGN KEY (idClasse) REFERENCES classe (idClasse)
			ON DELETE CASCADE ON UPDATE CASCADE;

			
ALTER TABLE note
	ADD CONSTRAINT note_apprenant 
		FOREIGN KEY (idApprenant) REFERENCES apprenant (idUtilisateur)
			ON DELETE CASCADE ON UPDATE CASCADE,
			
	ADD CONSTRAINT note_evaluation
		FOREIGN KEY (idEvaluation) REFERENCES evaluation (idEvaluation)
			ON DELETE CASCADE ON UPDATE CASCADE;

-- Jeux de données
INSERT INTO classe(idClasse,intituleClasse)
	VALUES
		(1, "UDEV 1"),
		(2, "UDEV 2"),
		(3, "POE UDEV");
		
INSERT INTO utilisateur(idUtilisateur, nom, prenom, motDePasse)
	VALUES
		(1, "Istrateur", "Amine", "admin"),
		(2, "Dirlo", "Leux", "dirlo"),
		(3, "Saignant", "Lent", "enseignant"),
		(4, "Lemediocre", "Eleve", "mediocre"),
		(5, "Lepassable", "Eleve", "passable"),
		(6, "Lemoyen", "Eleve", "moyen"),
		(7, "Lebon", "Eleve", "bon"),
		(8, "Lebrillant", "Eleve", "brillant");
		
INSERT INTO administrateur(idUtilisateur)
	VALUES
		(1);
		
INSERT INTO apprenant(idUtilisateur, idClasse)
	VALUES
		(4, 1),
		(5, 2),
		(6, 3),
		(7, 1),
		(8, 2);
		
INSERT INTO enseignant(idUtilisateur)
	VALUES
		(3);
		
INSERT INTO responsablePedagogique(idUtilisateur)
	VALUES
		(2);
		
INSERT INTO evaluation(idEvaluation, intitule, date, idEnseignant, idClasse)
	VALUES
		(1, "SQL", NOW(), 3, 1),
		(2, "Javascript", NOW(), 3, 2),
		(3, "HTML/CSS", NOW(), 3, 3),
		(4, "Java", NOW(), 3, 1),
		(5, "UML", NOW(), 3, 2),
		(6, "Algo", NOW(), 3, 3);
		
INSERT INTO note(idEvaluation, idApprenant, valeur)
	VALUES
		(1, 4, 12.25),
		(1, 7, 16.25),
		(2, 5, 17.50),
		(2, 8, 11.00),
		(3, 6, 14.75);
