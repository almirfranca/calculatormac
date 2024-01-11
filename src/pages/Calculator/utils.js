export function calculate(num, oldNum, operator) {
  switch (operator) {
    case "/":
      return parseFloat(oldNum) / parseFloat(num)
    case "x":
      return parseFloat(oldNum) * parseFloat(num)
    case "-":
      return parseFloat(oldNum) - parseFloat(num)
    case "+":
      return parseFloat(oldNum) + parseFloat(num)
    default:
      return
  }
}