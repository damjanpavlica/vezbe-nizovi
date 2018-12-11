const brojevi = [44, 33, 22, 44, -1, -33, 5, 5, 3222, 3]

let najveci = brojevi[0]
for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] > najveci) najveci = brojevi[i]
}

let najmanji = brojevi[0]
for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] < najmanji) najmanji = brojevi[i]
}

// for (let i = 0; i < brojevi.length; i++) {
//   if (brojevi[i] < najmanji) najmanji = brojevi[i]
//   if (brojevi[i] > najveci) najveci = brojevi[i]
// }

console.log(najmanji);
console.log(najveci);
