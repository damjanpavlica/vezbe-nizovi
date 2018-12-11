const filmovi = [
  "Prohujalo sa vihorom",
  "Fahrenheit 451",
  "Bitka na Neretvi",
  "Rocky",
  "The Shining",
  "Blade Runner ",
  "Povratak u buducnost",
  "Povratak u buducnost II",
  "Quick Change",
  "Povratak u buducnost III",
  "Terminator 2",
  "JFK",
  "Night on Earth",
  "Groundhog Day",
  "Forrest Gump",
  "Hrabro Srce",
  "Apollo",
  "Fallen Angels",
  "Dobri Vil Hanting",
  "Life Is Beautiful",
  "Fight Club",
  "Animal Farm 2",
  "In the Mood for Love",
  "Gladijator",
  "The Patriot",
  "ali",
  "Blow",
  "Sympathy for Mr Vengeance",
  "Old Boy",
  "Matrix 2",
  "Matrix 3",
  "2046",
  "V for Vendetta",
  "batman begins",
  "Ostrov",
  "the pursuit of happyness",
  "No Country for Old Men",
  "Lust, Caution",
  "Rise of the Planet of the Apes",
  "Sibir. Monamur",
  "The Book Thief",
  "Cubo and two strings",
  "Deadpool",
  "Blade Runner 2049"
]

const fraza = "Pov"
const filtrirano = []

for (let i = 0; i < filmovi.length; i++) {
  if (filmovi[i].includes(fraza))
    filtrirano.push(filmovi[i])
}

console.log(filtrirano)
