// Importujeme knihovnu inquirer, která nám umožňuje ptát se uživatele na vstupy v příkazovém řádku
import inquirer from "inquirer";

const answer: {
    Sentence: string
} = await inquirer.prompt([
    {
        // Věta zadaná uživatelem
        type: "input",
        name: "Sentence",
        message: "Zadejte větu pro výpočet slov: "
    }
]);

// trim() => odstraní bíle znaky  
const words = answer.Sentence.trim().split(" ");
console.log(`Počet slov ve větě: ${words.length}.`);