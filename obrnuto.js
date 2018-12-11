const tekst = "Ana voli Milovana"

let obrnuto = ""
for (let i = tekst.length - 1; i >= 0; i--) {
  obrnuto += tekst[i]
}

console.log(obrnuto)

// function obrnuti(tekst) {
//   let obrnuto = ""
//   for (let i = tekst.length - 1; i >= 0; i--) {
//     obrnuto += tekst[i]
//   }
//   return obrnuto
// }
//
// console.log(obrnuti("Ana voli Milovana"))
