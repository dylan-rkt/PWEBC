-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 11 mars 2019 à 07:38
-- Version du serveur :  5.7.21
-- Version de PHP :  5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projetpweb`
--

-- --------------------------------------------------------

--
-- Structure de la table `notation`
--

DROP TABLE IF EXISTS `notation`;
CREATE TABLE IF NOT EXISTS `notation` (
  `IdNotation` int(11) NOT NULL AUTO_INCREMENT,
  `NoteProprete` enum('0','1','2','3','4','5') DEFAULT NULL,
  `NoteEquipement` enum('0','1','2','3','4','5') DEFAULT NULL,
  `AccesHP` enum('Oui','Non') DEFAULT NULL,
  `Detail` varchar(200) DEFAULT NULL,
  `idToilette` int(11) NOT NULL,
  PRIMARY KEY (`IdNotation`),
  KEY `idToilette` (`idToilette`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `notation`
--


-- --------------------------------------------------------

--
-- Structure de la table `toilette`
--

DROP TABLE IF EXISTS `toilette`;
CREATE TABLE IF NOT EXISTS `toilette` (
  `idToilette` int(11) NOT NULL AUTO_INCREMENT,
  `Longitude` text NOT NULL,
  `Latitude` text NOT NULL,
  PRIMARY KEY (`idToilette`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `toilette`
--


-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `prenom` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `login` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `login`, `password`) VALUES
(1, 'User', 'User', 'user', 'user'),
(3, 'Admin', 'Admin', 'admin', 'admin');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
