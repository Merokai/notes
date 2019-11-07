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
  idUtilisateur int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  
  
CREATE TABLE apprenant (
  idApprenant int(11) NOT NULL AUTO_INCREMENT,
  idUtilisateur int(11) DEFAULT NULL,
  idClasse int(11) NOT NULL,
  PRIMARY KEY (idApprenant)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  
  
CREATE TABLE enseignant (
  idEnseignant int(11) NOT NULL AUTO_INCREMENT,
  idUtilisateur int(11) NOT NULL,
  PRIMARY KEY (idEnseignant)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  
  
CREATE TABLE responsablePedagogique (
  idUtilisateur int(11) NOT NULL
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
		FOREIGN KEY (idEnseignant) REFERENCES enseignant (idEnseignant)
			ON DELETE CASCADE ON UPDATE CASCADE,
			
	ADD CONSTRAINT evaluation_classe
		FOREIGN KEY (idClasse) REFERENCES classe (idClasse)
			ON DELETE CASCADE ON UPDATE CASCADE;

			
ALTER TABLE note
	ADD CONSTRAINT note_apprenant 
		FOREIGN KEY (idApprenant) REFERENCES apprenant (idApprenant)
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
		
INSERT INTO apprenant(idApprenant, idUtilisateur, idClasse)
	VALUES
		(1, 4, 1),
		(2, 5, 2),
		(3, 6, 3),
		(4, 7, 1),
		(5, 8, 2);
		
INSERT INTO enseignant(idEnseignant, idUtilisateur)
	VALUES
		(1, 3);
		
INSERT INTO responsablePedagogique(idUtilisateur)
	VALUES
		(2);
		
INSERT INTO evaluation(idEvaluation, intitule, date, idEnseignant, idClasse)
	VALUES
		(1, "SQL", NOW(), 1, 1),
		(2, "Javascript", NOW(), 1, 2),
		(3, "HTML/CSS", NOW(), 1, 3),
		(4, "Java", NOW(), 1, 1),
		(5, "UML", NOW(), 1, 2),
		(6, "Algo", NOW(), 1, 3);
		
INSERT INTO note(idEvaluation, idApprenant, valeur)
	VALUES
		(1, 1, 12.25),
		(1, 4, 16.25),
		(2, 2, 17.50),
		(2, 5, 11.00),
		(3, 3, 14.75);
