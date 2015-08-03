-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 30, 2015 at 11:35 AM
-- Server version: 5.6.25
-- PHP Version: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `souvik`
--

-- --------------------------------------------------------

--
-- Table structure for table `interest`
--

CREATE TABLE IF NOT EXISTS `interest` (
  `email` varchar(100) NOT NULL,
  `football` varchar(20) NOT NULL,
  `movie` varchar(20) NOT NULL,
  `reading` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `interest`
--

INSERT INTO `interest` (`email`, `football`, `movie`, `reading`) VALUES
('gogolooooooooo.souvik@gmail.com', 'football', 'movie', 'reading'),
('sss@gmail.com', 'football', 'reading', ''),
('rrrrs@gmail.com', 'football', 'movie', ''),
('kkkkk@gmail.com', 'movie', '', ''),
('email@gmail.com', 'football', 'movie', ''),
('ddsdsd@gmail.com', 'football', 'movie', ''),
('ol.souvik@gmail.com', 'football', 'movie', 'reading'),
('p.souvik@gmail.com', 'football', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `subscribe`
--

CREATE TABLE IF NOT EXISTS `subscribe` (
  `email` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `sex` varchar(20) DEFAULT NULL,
  `phone_no` bigint(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscribe`
--

INSERT INTO `subscribe` (`email`, `name`, `country`, `address`, `sex`, `phone_no`) VALUES
('ddsdsd@gmail.com', 'souvik', 'nepal', 'dfdfd', 'male', 9681467004),
('email@gmail.com', 'name', 'mayanmar', 'abcd', 'male', 9681467004),
('gog.souvik@gmail.com', 'souvik', 'nepal', 'sdsdsfsd', 'male', 9681467004),
('gogo.souvik@gmail.com', 'souvik', 'nepal', 'sdsdsd', 'male', 9681467004),
('gogol.souvik@gmail.com', 'souvik', 'nepal', 'wewe', 'male', 9681467004),
('gogollll.souvik@gmail.com', 'souvik', 'nepal', 'ssdsdsds', 'male', 9681467004),
('gogolooooooooo.souvik@gmail.com', 'souvik', 'nepal', 'dsdsds', 'male', 9681467004),
('gogooo.souvik@gmail.com', 'souvik', 'nepal', 'dsdsdsdds', 'male', 9681467004),
('jana.souvik5@yahoo.com', 'souvik', 'nepal', 'sdsd', 'male', 9681467004),
('kkkkk@gmail.com', 'kkkk', 'nepal', 'ssdsdsd', 'male', 9681467004),
('ogo.souvik@gmail.com', 'souvik', 'nepal', 'dsdsd', 'male', 9681467004),
('ol.souvik@gmail.com', 'souvik', 'mayanmar', 'dsdsdsds', 'male', 9681467004),
('p.souvik@gmail.com', 'souvik', 'nepal', 'ddsdsd', 'male', 9681467004),
('rrrrs@gmail.com', 'souvik', 'nepal', 'wewew', 'male', 9681467004),
('souvik@fusioncharts.com', 'ss', 'nepal', 'sdsds', 'male', 9681467004),
('sss@gmail.com', 'souvik', 'nepal', 'dwdwdwd', 'male', 9681467004);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `subscribe`
--
ALTER TABLE `subscribe`
  ADD UNIQUE KEY `email` (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
