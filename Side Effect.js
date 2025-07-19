// // Side Effect :

// // const { useEffect } = require("react");

// let thesis = {name: "Church's", date: 1936};

// function renameThesis(newName){
//     thesis.name = newName;
//     console.log("Renamed!")
// }

// renameThesis("Church-Turing"); // Renamed!
// console.log(thesis); // {name: "Church-Turing", date: 1936}
// // This Function Effect The Global Variable (OBJECT). (SIDE EFFECT)


// No Side Effect :

const thesis = {name: "Church's", date: 1936};

function renameThesis(oldThesis, newName){
    return {
        name : newName, date: oldThesis.date
    }
}

const thesis2 = renameThesis(thesis, "Church-Turing");

console.log(thesis); // {name: "Church's", date: 1936};
console.log(thesis2); // {name: "Church-Turing", date: 1936};
// This Function Not Effect on The GLobal Variable (OBJECT). (NO SIDE EFECT)