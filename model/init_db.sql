DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `id` int NOT NULL AUTO_INCREMENT,
  `track_id` varchar(40) NOT NULL,
  `track_name` varchar(200) NOT NULL,
  `album_image` varchar(200) NOT NULL,
  `album_name` varchar(300) NOT NULL,
  `album_link` varchar(300) NOT NULL,
  `artist_name` varchar(200) NOT NULL,
  `artist_url` varchar(200) NOT NULL,
  `track_preview` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)

);
--ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
INSERT INTO `favorites` VALUES (5,'1dNIEtp7AY3oDAKCGg2XkH','Something Just Like This','https://i.scdn.co/image/ab67616d00004851f79b7f08426e2899a832d3e6','Something Just Like This','https://open.spotify.com/album/7IzpJkWQqgz1BTutQvSitX',' The Chainsmokers','https://open.spotify.com/artist/69GGBxA162lTqCwzJG5jLp','https://p.scdn.co/mp3-preview/f14eb152b642c9ada3386e781ee6e442afb9cdd9?cid=00858dd1207649a1be2b9016330f67a1'),(6,'38Vb1J5W5LOs0i7SAF76pa','Can\'t Buy Me Love - Remastered 2015','https://i.scdn.co/image/ab67616d00004851582d56ce20fe0146ffa0e5cf','1 (Remastered)','https://open.spotify.com/album/7vEJAtP3KgKSpOHVgwm3Eh',' The Beatles','https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2','null'),(54,'7J8e4j9B3CeKSrO55sKwov','I Guess That\'s Why They Call It The Blues','https://i.scdn.co/image/ab67616d0000485170c8de84ff4783f90e1ebb04','Revamp: The Songs Of Elton John & Bernie Taupin','https://open.spotify.com/album/2w667CqWz0JWkhxP7IfijA',' Various Artists','https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of','null'),(59,'3lFwSDBCNo3CcN09UppUnm','Hold Me Closer','https://i.scdn.co/image/ab67616d00004851775800e93752168c8004b59f','The Lockdown Sessions','https://open.spotify.com/album/4y1qhmoZxvSyymJ1wZCtLE',' Elton John','https://open.spotify.com/artist/3PhoLpVuITZKcymswpck5b','null'),(61,'5qPGi9p8VqcizfdgWxtmLt','Lovers in Japan','https://i.scdn.co/image/ab67616d00004851e21cc1db05580b6f2d2a3b6e','Viva La Vida or Death and All His Friends','https://open.spotify.com/album/1CEODgTmTwLyabvwd7HBty',' Coldplay','https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU','https://p.scdn.co/mp3-preview/74220535659ca22574b691992a6efe577015977e?cid=00858dd1207649a1be2b9016330f67a1'),(69,'7IX7VAXujvcZ3e1PG7sGP7','Kaleidoscope','https://i.scdn.co/image/ab67616d000048518ff7c3580d429c8212b9a3b6','A Head Full of Dreams','https://open.spotify.com/album/3cfAM8b8KqJRoIzt3zLKqw',' Coldplay','https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU','https://p.scdn.co/mp3-preview/c23305ecee6f6a70e2c9323e18dbb6d9b56ddc7b?cid=00858dd1207649a1be2b9016330f67a1');
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-01 15:14:44
