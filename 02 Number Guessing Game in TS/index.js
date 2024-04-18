// Importujeme knihovnu inquirer, která nám umožňuje ptát se uživatele na vstupy v příkazovém řádku
import inquirer from "inquirer";
// Generování náhodného čísla od 0 do 9
const systemGeneratedNum = Math.floor(Math.random() * 10);
// Čekáme na odpověď od uživatele pomocí knihovny inquirer.
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Napiš svůj odhad." // Zpráva pro uživatele
    }
]);
// Uložení odpovědi od uživatele
const userGuess = answers.userGuess;
// Validace, zdali uživatel uhodl vygenerované číslo
if (userGuess === systemGeneratedNum) {
    console.log("Vaše odpověď je správná!! Gratulujeme!!");
}
else {
    console.log("Špatně, zkuste to znovu :(");
}
console.log(`Zvolil jste číslo ${userGuess}. Vygenerováno bylo číslo ${systemGeneratedNum}`);
