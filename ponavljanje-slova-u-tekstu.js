const karakter = "a"
let brojac = 0
const tekst = "Moje je ime Davorin Bogović, a ovo sve oko mene je crno-bijeli svijet."

for (var i = 0; i < tekst.length; i++) {
  if (tekst[i] == karakter) brojac++
}

console.log(brojac)
