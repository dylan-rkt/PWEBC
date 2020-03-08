-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 11 Mars 2019 à 08:06
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `pweb`
--

-- --------------------------------------------------------

--
-- Structure de la table `joueurs`
--

CREATE TABLE `joueurs` (
  `nomJoueur` varchar(16) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `scoreJoueur` int(11) DEFAULT NULL,
  `nombrePartie` int(11) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `joueurs`
--

INSERT INTO `joueurs` (`nomJoueur`, `scoreJoueur`, `nombrePartie`) VALUES
('thomas', 10, 3),
('alexis', 12, 17),
('gabriel', 6, 6),
('Alain', 30, 1),
('James', 4, 3),
('Karim', 1, 2),
('Noémie', 1, 1),
('Valentin', 1, 1),
('Johanne', 0, 2),
('Franky Vincent', 2, 1),
('x2x2', 1, 1),
('pweb', 1, 1),
('bonjour', 2, 4);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `joueurs`
--
ALTER TABLE `joueurs`
  ADD PRIMARY KEY (`nomJoueur`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
