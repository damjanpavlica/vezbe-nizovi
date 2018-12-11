const brojevi = [44, 33, 22, 44, -1, -33, 5, 5, 3222, 3]

for (let i = 0; i < brojevi.length - 1; i++) {
  if (brojevi[i] > brojevi[i+1]) console.log(brojevi[i])
}
