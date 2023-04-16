CREATE TABLE movies (
  id INT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  showing_time TIME NOT NULL,
  showing_days VARCHAR(255) NOT NULL
);

INSERT INTO movies (id, title, description, showing_time, showing_days)
VALUES
  (1, 'Avengers: Endgame', 'The epic conclusion to the Marvel Cinematic Universe''s Infinity Saga, where the Avengers must band together to undo the devastating effects of Thanos'' snap.', '19:00:00', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'),
  (2, 'The Lion King (2019)', 'A photorealistic remake of the beloved Disney classic, following the journey of young Simba as he learns to become king of the Pride Lands.', '10:00:00', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'),
  (3, 'A Star is Born', 'A romantic musical drama that follows the rise of a talented young singer and the relationship she develops with an alcoholic, fading star.', '16:00:00', 'Monday, Tuesday, Wednesday, Thursday, Friday; 13:00:00, Saturday, Sunday'),
  (4, 'Inception', 'A mind-bending science fiction thriller about a thief who enters people''s dreams to steal their secrets, but gets caught up in a dangerous game of corporate espionage.', '22:00:00', 'Saturday, Sunday'),
  (5, 'La La Land', 'A modern musical romance about an aspiring actress and a struggling jazz pianist who fall in love while pursuing their dreams in Los Angeles.', '19:00:00', 'Monday, Tuesday, Wednesday, Thursday, Friday; 13:00:00, Saturday, Sunday'),
  (6, 'Jurassic Park', 'The classic sci-fi adventure film that takes viewers on a thrilling journey through a theme park where dinosaurs have been brought back to life.', '16:00:00', 'Monday, Tuesday, Wednesday, Thursday, Friday'),
  (7, 'The Godfather', 'A cinematic masterpiece that tells the story of a powerful mafia family and the struggles of their patriarch to hold onto his power.', '22:00:00', 'Monday, Tuesday, Wednesday, Thursday, Friday'),
  (8, 'The Shawshank Redemption', 'A powerful drama that follows the friendship of two inmates in a maximum-security prison as they navigate the harsh realities of prison life.', '13:00:00', 'Monday, Tuesday, Wednesday, Thursday, Friday'),
  (9, 'The Dark Knight', 'A dark and intense superhero film that pits Batman against his greatest nemesis, the Joker, in a battle for the soul of Gotham City.', '19:00:00', 'Saturday, Sunday'),
  (10, 'Titanic', 'The iconic epic romance that follows the story of a wealthy woman and a poor artist who fall in love aboard the ill-fated maiden voyage of the Titanic.', '16:00:00', 'Saturday, Sunday'
);