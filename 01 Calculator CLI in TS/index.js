// Importujeme knihovnu inquirer, která nám umožňuje ptát se uživatele na vstupy v příkazovém řádku
import inquirer from "inquirer";
// Požádáme uživatele o zadání dvou čísel a operátoru
const answer = await inquirer.prompt([
    {
        // Ptáme se uživatele na první číslo.
        type: "number",
        name: "numberOne",
        message: "Zadejte prosím první číslo: "
    },
    {
        // Ptáme se uživatele na druhé číslo
        type: "number",
        name: "numberTwo",
        message: "Zadejte prosím druhé číslo: "
    },
    {
        // Ptáme se uživatele na operátor (+, -, *, /)
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Zvolte operátor: "
    }
]);
// console.log(answer)
// Do proměnných uložíme hodnoty od uživatele
const numberOne = answer.numberOne;
const numberTwo = answer.numberTwo;
const operator = answer.operator;
// Validace, zdali všechny tři proměnné existují
if (numberOne && numberTwo && operator) {
    // Inicializace proměnné `result` na hodnotu 0.
    let result = 0;
    // Podmínky pro provádění aritmetických operací na základě proměnné `operator`
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    else if (operator === "*") {
        result = numberOne * numberTwo;
    }
    else if (operator === "/") {
        result = numberOne / numberTwo;
    }
    // Vypsání výsledku do konzole
    console.log(`Váš výsledek je: ${result}`);
}
else {
    console.log("Zadejte prosím platný vstup");
}
