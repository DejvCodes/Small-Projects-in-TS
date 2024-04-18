// Importujeme knihovnu inquirer, která nám umožňuje ptát se uživatele na vstupy v příkazovém řádku
import inquirer from "inquirer";

// Výchozí proměnné
let todos: string[] = [];
let loop: boolean = true;

// Ukládání úkolů
while(loop) {
    const answers: {
        TODOs: string
        addMore: boolean
    } = await inquirer.prompt([
        {
            // Úkol zadaný uživatelem
            type: "input",
            name: "TODOs",
            message: "Co si přejete přidat do seznamu úkolů?"
        }, 
        {
            // Další úkol zadaný uživatelem
            type: "confirm",
            name: "addMore",
            message: "Přejete si přidat další úkol do seznamu úkolů?",
            default: false
        }
    ]);

    const {TODOs, addMore} = answers;
    // console.log(answers);

    // Opakování cyklu while
    loop = addMore;

    // Uložení do pole
    if (TODOs) {
        todos.push(TODOs);
    } else {
        console.log("Zadejte platný úkol.");
    }
}

// console.log(todos)

// Vypsání jednotlivých úkolů
if (todos.length > 0) {
    console.log("Vaše ůkoly: ");
    let count = 1;
    todos.forEach(todo => {
        console.log(`${count}. ${todo}`);
        count++;
    });
} else {
    console.log("Nemáte žádný úkol.");
}