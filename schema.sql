CREATE DATABASE notesdb;
use notesdb;

CREATE TABLE `classe` (
  `idClasse` int(11) NOT NULL AUTO_INCREMENT,
  `intituleClasse` varchar(60) NOT NULL,
  PRIMARY KEY (`idClasse`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE `utilisateur` (
  `idUtilisateur` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `motDePasse` varchar(32) NOT NULL,
  PRIMARY KEY (`idUtilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE `administrateur` (
  `idUtilisateur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  
  
CREATE TABLE `apprenant` (
  `idApprenant` int(11) NOT NULL AUTO_INCREMENT,
  `idUtilisateur` int(11) DEFAULT NULL,
  `idClasse` int(11) NOT NULL,
  PRIMARY KEY (`idApprenant`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  
  
CREATE TABLE `enseignant` (
  `idEnseignant` int(11) NOT NULL AUTO_INCREMENT,
  `idUtilisateur` int(11) NOT NULL,
  PRIMARY KEY (`idEnseignant`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  
  
CREATE TABLE `responsablePedagogique` (
  `idUtilisateur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  

CREATE TABLE `evaluation` (
  `idEvaluation` int(11) NOT NULL AUTO_INCREMENT,
  `intitule` varchar(60) NOT NULL,
  `date` datetime NOT NULL,
  `idEnseignant` int(11) NOT NULL,
  `idClasse` INT(11) NOT NULL,
  PRIMARY KEY (`idEvaluation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  
CREATE TABLE `note` (
  `idEvaluation` int(11) NOT NULL,
  `idApprenant` int(11) NOT NULL,
  `valeur` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `administrateur`
  ADD CONSTRAINT `administrateur_ibfk_1` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;
  
ALTER TABLE `apprenant`
  ADD CONSTRAINT `apprenant_ibfk_1` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `apprenant_ibfk_2` FOREIGN KEY (`idClasse`) REFERENCES `classe` (`idClasse`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `enseignant`
  ADD CONSTRAINT `enseignant_ibfk_1` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `responsablePedagogique`
  ADD CONSTRAINT `responsablePedagogique_ibfk_1` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `evaluation`
  ADD CONSTRAINT `evaluation_ibfk_1` FOREIGN KEY (`idEnseignant`) REFERENCES `enseignant` (`idEnseignant`) ON DELETE CASCADE ON UPDATE CASCADE;
  ADD CONSTRAINT `evaluation_ibfk_2` FOREIGN KEY (`idClasse`) REFERENCES `classe` (`idClasse`) ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE `note`
  ADD CONSTRAINT `note_ibfk_1` FOREIGN KEY (`idApprenant`) REFERENCES `apprenant` (`idApprenant`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `note_ibfk_2` FOREIGN KEY (`idEvaluation`) REFERENCES `evaluation` (`idEvaluation`) ON DELETE CASCADE ON UPDATE CASCADE;
