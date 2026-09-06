const movieArray1 = [
  {
    id: "1",
    movieName: "Inception",
    rating: 8.8,
    movieImg: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description:
      "A skilled thief who enters people's dreams is given a chance to erase his past by planting an idea in the mind of a powerful businessman."
  },
  {
    id: "2",
    movieName: "Interstellar",
    rating: 8.7,
    movieImg: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "A team of explorers travels through a mysterious wormhole in space to find a new home for humanity."
  },
  {
    id: "3",
    movieName: "The Dark Knight",
    rating: 9.0,
    movieImg: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description:
      "Batman faces his most dangerous enemy, the Joker, while Gotham City is pushed into chaos and fear."
  },
  {
    id: "4",
    movieName: "Avatar",
    rating: 7.9,
    movieImg: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    description:
      "A former marine becomes part of the Na'vi world and must choose between following orders and protecting a new home."
  },
  {
    id: "5",
    movieName: "Avengers: Endgame",
    rating: 8.4,
    movieImg: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description:
      "The remaining Avengers unite for one final mission to reverse the devastating events caused by Thanos."
  },
  {
    id: "6",
    movieName: "Spider-Man: No Way Home",
    rating: 8.2,
    movieImg: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    description:
      "Peter Parker asks Doctor Strange for help after his identity is revealed, but the spell opens the door to unexpected visitors."
  },
  {
    id: "7",
    movieName: "The Matrix",
    rating: 8.7,
    movieImg: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description:
      "A computer hacker discovers that reality is an artificial simulation and joins a rebellion against the machines controlling humanity."
  },
  {
    id: "8",
    movieName: "Joker",
    rating: 8.3,
    movieImg: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description:
      "A troubled man struggling with society gradually descends into darkness and becomes a notorious criminal figure."
  },
  {
    id: "9",
    movieName: "Dune",
    rating: 8.0,
    movieImg: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description:
      "A young nobleman must travel to a dangerous desert planet and protect his family while becoming part of an ancient prophecy."
  },
  {
    id: "10",
    movieName: "Gladiator",
    rating: 8.5,
    movieImg: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    description:
      "A betrayed Roman general is forced into slavery and becomes a gladiator seeking revenge against the emperor who destroyed his life."
  },
  {
    id: "11",
    movieName: "The Batman",
    rating: 7.8,
    movieImg: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description:
      "Batman investigates a series of mysterious murders that reveal corruption and secrets hidden within Gotham City."
  },
  {
    id: "12",
    movieName: "John Wick",
    rating: 7.7,
    movieImg: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    description:
      "A legendary assassin returns to his violent past after criminals take away the last reminder of his beloved wife."
  },
  {
    id: "13",
    movieName: "Iron Man",
    rating: 7.9,
    movieImg: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    description:
      "A wealthy inventor builds a powerful armored suit after being captured by terrorists and decides to use his technology for good."
  },
  {
    id: "14",
    movieName: "Black Panther",
    rating: 7.3,
    movieImg: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    description:
      "A young king returns home to the technologically advanced kingdom of Wakanda and must defend his throne from a powerful rival."
  },
  {
    id: "15",
    movieName: "Doctor Strange",
    rating: 7.5,
    movieImg: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoqZa0AjsiIDwZiFeE.jpg",
    description:
      "After losing his ability to work as a surgeon, a brilliant doctor discovers the mystical arts and learns to protect the world."
  },
  {
    id: "16",
    movieName: "Guardians of the Galaxy",
    rating: 8.0,
    movieImg: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    description:
      "A group of unlikely heroes must work together to protect the galaxy from a powerful enemy."
  },
  {
    id: "17",
    movieName: "Thor: Ragnarok",
    rating: 7.9,
    movieImg: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    description:
      "Thor must escape an alien planet and stop a powerful enemy from destroying his home world of Asgard."
  },
  {
    id: "18",
    movieName: "Mission: Impossible - Fallout",
    rating: 7.7,
    movieImg: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYsj1L3M3k0.jpg",
    description:
      "Ethan Hunt and his team race against time after a mission goes wrong and dangerous nuclear weapons fall into enemy hands."
  },
  {
    id: "19",
    movieName: "Top Gun: Maverick",
    rating: 8.2,
    movieImg: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1w0U0G.jpg",
    description:
      "A legendary fighter pilot returns to train a new generation of elite pilots for a dangerous mission."
  },
  {
    id: "20",
    movieName: "Oppenheimer",
    rating: 8.6,
    movieImg: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    description:
      "The story of scientist J. Robert Oppenheimer and his role in developing the world's first atomic bomb."
  }
];