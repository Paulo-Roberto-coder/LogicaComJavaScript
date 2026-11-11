// Monta uma escadinha de números: 1, 12, 123, 1234, 12345

let valor = '';

for (let n = 1; n <= 5; n++) {
    valor += n;          // como valor é texto, o += COLA o número no final (concatenação)
    console.log(valor);  // mostra o texto acumulado a cada volta
}
