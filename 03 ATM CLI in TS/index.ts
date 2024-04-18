// Importujeme knihovnu inquirer, která nám umožňuje ptát se uživatele na vstupy v příkazovém řádku
import inquirer from "inquirer";

// Definice rozhraní pro odpověď od uživatele
interface answersType {
    userID: string
    userPIN: number
    accountType: string
    transactionType: string
    amount: number
}

// Odpovědi, které nám zadá uživatel
const answers: answersType = await inquirer.prompt([
    {
        // Uživatelské ID
        type: "string",
        name: "userID",
        message: "Zadejte své uživatelské ID: " // Zpráva pro uživatele
    },
    {
        // Uživatelský PIN 
        type: "number",
        name: "userPIN",
        message: "Zadejte svůj uživatelský PIN: " // Zpráva pro uživatele
    }, 
    {
        // Typ účtu
        type: "list",
        name: "accountType",
        choices: ["Běžný účet", "Spořící účet"],
        message: "Zadejte typ svého bankovního účtu: " // Zpráva pro uživatele
    }, 
    {
        // Typ transakce
        type: "list",
        name: "transactionType",
        choices: ["Rychlý výběr", "Výběr"],
        message: "Vyberte částku: ", // Zpráva pro uživatele
        when(answers) {
            return answers.accountType;
        }
    },
    {
        // Typ transakce => Rychlý výběr
        type: "list",
        name: "amount",
        choices: [1000, 2000, 3000, 10000], // Volby pro uživatele
        message: "Vyberte částku: ", // Zpráva pro uživatele
        when(answers) {
            return answers.transactionType == "Rychlý výběr";
        }
    },
    {
        // Typ transakce => Výběr
        type: "number",
        name: "amount",
        message: "Zadejte částku: ", // Zpráva pro uživatele
        when(answers) {
            return answers.transactionType == "Výběr";
        }
    }
]);

// Výstup odpovědi
// console.log(answers);

// Validace stavu bankovního účtu
if (answers.userID && answers.userPIN) {
    // Výchozí zůstatek účtu
    const balance: number = 10000;

    // Částka zadaná uživatelem
    const enteredAmount = answers.amount;

    // Validace, zdali je výchozí zůstatek větší než zadaná hodnota uživatelem
    if (balance >= enteredAmount) {
        const remaiming = balance - enteredAmount;
        console.log("Na účtě Vám zbývý: ", remaiming);
    } else {
        console.log("Nedostatek pěněz na účtě.");
    }
}