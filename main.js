console.log('async');

// function superFunzione() {
//     console.log('sto eseguendo il codice dentro il timeout');
// }

// const pippo = 1;
// const pluto = 2;

// setTimeout(superFunzione, 5000);

// setTimeout(() => {
//     console.log('sto eseguendo il codice dentro il timeout');
// }, 5000)

// const paperino = pippo + pluto;
// const topolino = 'javascript'

// console.log(topolino + paperino);

// setInterval(() => {
//     console.log('sto eseguendo il codice dentro l\'intervallo');
// }, 2000);

// function gestisciRisposta(resp) {
//     return resp.text();
// }

// function gestisciRisultatoFinale(res) {
//     const dittoObj = JSON.parse(res);

//     console.log(dittoObj);
// }

// fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(gestisciRisposta).then(gestisciRisultatoFinale);
fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((pippo) => pippo.json()).then((pluto) => console.log(pluto));