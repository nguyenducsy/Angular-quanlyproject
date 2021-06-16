-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 16, 2021 lúc 03:48 PM
-- Phiên bản máy phục vụ: 10.4.14-MariaDB
-- Phiên bản PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `angular`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(225) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idtask` int(11) DEFAULT NULL,
  `iduser` int(11) DEFAULT NULL,
  `teamsize` int(11) DEFAULT NULL,
  `date` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `projects`
--

INSERT INTO `projects` (`id`, `name`, `idtask`, `iduser`, `teamsize`, `date`, `total`) VALUES
(36, 'angular11', 0, 0, 5, '2021-06-14', 0),
(37, 'angular4', 0, 0, 2, '2021-06-07', 50),
(38, 'javascript', 0, 1, 2, '2021-06-02', 100),
(49, 'angular1', 0, 1, 4, '2021-06-11', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `nameTask` varchar(225) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nameuser` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idproject` int(11) DEFAULT NULL,
  `description` varchar(225) COLLATE utf8_unicode_ci DEFAULT NULL,
  `deadline` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `iduser` int(11) DEFAULT NULL,
  `date` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tasks`
--

INSERT INTO `tasks` (`id`, `nameTask`, `nameuser`, `idproject`, `description`, `deadline`, `iduser`, `date`) VALUES
(19, 'Speaking', 'Nguyenducsy', 7, 'Hoàn thành', '2021-06-16', 21, '2021-06-08'),
(25, 'Reading', 'Nguyễn Đức Sỹ', 7, 'Đang thực hiện', '2021-06-26', 1, '2021-06-02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(55) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `typeUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `img`, `typeUser`) VALUES
(1, 'Nguyễn Đức Sỹ', 'nguyenducsy@fpt.edu.vn', '$2a$12$JxTSZOuCZt4f8Jr7CIUAGeYEDn3BrkgD9wD2FJbiXEPSK6JCeiMYu', 'https://scontent.fsgn10-1.fna.fbcdn.net/v/t1.6435-1/p240x240/152237101_1176143049455436_5560242853441798398_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_ohc=ulS2Tvo2QYAAX-XFN3h&_nc_ht=scontent.fsgn10-1.fna&tp=6&oh=812126c336371760dd58ae8efaa45e02&oe=60CD5692', 1),
(2, 'Nguyen Van A', 'nguyenduca@fpt.edu.vn', '$2a$12$gXneqgf9hDZ2sKzv9mk/rONA09ASDAW9170TE3wSmUHjL4gOr3EZG', 'https://cdn.vietnambiz.vn/2020/3/23/9005608425724062764144382127330218338156544n-1584933586723443851956.jpg', 0),
(3, 'Sy', 'user2', '$2a$12$6rZH/EXLAjW.u//o3U5QteHkEZRgq1MFYvyPmL0mK1vmEXop5OZ7i', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bgWiuuBg1VVwqPT89T1sizh8K-dnbjdGZA&usqp=CAU', 0),
(26, 'Nguyễn Hữu Đa', 'nguyenhuuda@gmail.com', '$2a$12$UBNbr12uF8XoXAje00wHo.3FpxKTv5Owoaiw0YHmSrfan9jkLP1mm', 'https://cdn.vietnambiz.vn/2020/3/23/9005608425724062764144382127330218338156544n-1584933586723443851956.jpg', 0),
(27, 'Nguyễn Đức Sỹ', 'user1', '$2a$12$xH2TMuzGx5NiqQ6zOSTVJuZk1ekS5saHG8X70XBsbyo62KlMdFILu', 'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-avatar-trang-cho-nam-va-con-than-lan.jpg', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `iduser` (`iduser`),
  ADD KEY `idproject` (`idproject`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT cho bảng `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
