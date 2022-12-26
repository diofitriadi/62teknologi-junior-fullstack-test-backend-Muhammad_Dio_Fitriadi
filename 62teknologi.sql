-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2022 at 04:06 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `62teknologi`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `restaurants_id` bigint(20) NOT NULL,
  `restaurants_name` varchar(200) NOT NULL,
  `restaurants_categories` varchar(200) NOT NULL,
  `restaurants_image` varchar(200) NOT NULL,
  `restaurants_location` varchar(200) NOT NULL,
  `restaurants_desc` varchar(1000) NOT NULL,
  `restaurants_rating` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`restaurants_id`, `restaurants_name`, `restaurants_categories`, `restaurants_image`, `restaurants_location`, `restaurants_desc`, `restaurants_rating`, `created_at`, `updated_at`) VALUES
(5, 'Dominos Pizza', 'Pizzaria', '1671777636725-765750114-dominos.jpeg', 'Semarang', 'Restoran pizza cepat saji asli dari italia yang menggugah selera', 3, '2022-12-21 14:17:39', '2022-12-23 06:40:36'),
(7, 'McDonalds', 'Fast Food', '1671774402756-515098539-mcdonald-s-simpang-dago.jpg', 'Bandung', 'Resto fast food yang menyediakan ayam goreng dan mcflurry lezat', 5, '2022-12-21 18:11:21', '2022-12-23 05:46:42'),
(8, 'Starbucks', 'Coffee Shop', '1671777729211-876265008-Gerai-Starbucks.jpg', 'Surabaya', 'Sebuah perusahaan kopi dan jaringan kedai kopi global asal Amerika Serikat yang berkantor pusat di Seattle, Washington', 4, '2022-12-22 03:13:29', '2022-12-23 06:44:00'),
(9, 'Kopi Kenangan', 'Coffee Shop', '1671778029755-368165806-kopi.jpeg', 'Bandung', 'Kopi Kenangan adalah perusahaan yang bergerak di bidang kopi minuman yang turut meramaikan pasar kopi kekinian di Indonesia. ', 5, '2022-12-22 11:52:47', '2022-12-23 06:47:09'),
(10, 'Pizza Hut', 'Pizzaria', '1671777915268-117772130-pizzahut.jpeg', 'Jakarta', 'Rantai restoran Amerika dikenal dengan menu masakan Italia-Amerika, termasuk pizza dan pasta, serta lauk dan makanan penutup.', 2, '2022-12-22 14:50:40', '2022-12-23 06:45:15'),
(11, 'Burger King', 'Fast Food', '1671770099739-457483962-burgerKing.jpeg', 'Jakarta', 'burger king siap saji yang enak', 4, '2022-12-23 03:58:37', '2022-12-23 04:35:30'),
(12, 'KFC', 'Fast Food', '1671795189611-169552567-kfc.jpeg', 'Semarang', 'KFC adalah jaringan restoran cepat saji Amerika yang berspesialisasi dalam ayam goreng', 5, '2022-12-23 11:33:09', '2022-12-23 11:33:09'),
(13, 'Richeese Factory', 'Fast Food', '1671795309555-585210986-richeese.jpeg', 'Yogyakarta', 'Resto ayam spesialisasi keju di indonesia berawal dari wafer', 3, '2022-12-23 11:35:09', '2022-12-23 11:35:09');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `username` varchar(150) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`, `update_at`) VALUES
(1, 'dio', '$2b$10$t0V7Fa1y1Bw7/t/DIZjd8OJpnV8qF200hULkwJVFD5F6ajKo0Jniq', '2022-12-20 12:02:08', '2022-12-20 12:02:08'),
(2, 'dio', '$2b$10$5Md2T8cxVqNucfrZAzh7/O24I1so1//JxbYcDy2O5gGijwJnGJlXy', '2022-12-23 04:05:00', '2022-12-23 04:05:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`restaurants_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `restaurants_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
