const prompt = require('prompt-sync')()
const calImc = require('./script');


const peso = Number(prompt('Digite seu peso'));
const altura = Number(prompt('Digite sua altura'));

const imc = calImc(peso, altura);

console.log(`Seu imc é ${imc.toFixed(2)}`);