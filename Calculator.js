const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("=== Kalkulator Sederhana ===");

rl.question("Masukkan angka pertama: ", (angka1) => {
  rl.question("Masukkan operator (+, -, *, /): ", (operator) => {
    rl.question("Masukkan angka kedua: ", (angka2) => {
      const num1 = parseFloat(angka1);
      const num2 = parseFloat(angka2);
      let hasil;

      switch (operator) {
        case "+":
          hasil = num1;
          break;
        case "-":
          hasil = num1 - num2;
          break;
        case "*":
          hasil = num1 * num2;
          break;
        case "/":
          hasil = num2 !== 0 ? num1 / num2 : "Error: Pembagian dengan nol!";
          break;
        default:
          hasil = "Operator tidak dikenali!";
      }

      console.log(`Hasil: ${hasil} dari fauzi dan rezky`);
      rl.close();
    });
  });
});
