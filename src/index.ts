let numero1 = <HTMLInputElement>document.getElementById("numero1");
let numero2 = <HTMLInputElement>document.getElementById("numero2");
let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");
let val: number = calculator(numero1, numero2, "+");
btnEnviar1.addEventListener("click", () => {
  console.log(val);
});
function calculator(numero1: number, numero2: number, operation: string) {
  switch (operation) {
    default:
      console.log("Invalid operator");
      return 0;
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    case "*":
      return numero1 * numero2;
      break;
    case "/":
      return numero1 / numero2;
  }
}
