const plate = [44000, 14000, 20000, 55000, 200000, 33000, 22300, 33800, 44500]

let ukupno = 0
for (var i = 0; i < plate.length; i++) {
  ukupno += plate[i]
}

let prosek = ukupno / plate.length
console.log("Srednja vrednost je ", prosek)

for (var i = 0; i < plate.length; i++) {
  if (plate[i] > prosek) console.log(plate[i]);
}
