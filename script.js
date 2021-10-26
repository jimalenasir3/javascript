// Censor swear words - assigning right number of * per swear word
// Using functions and Loops

let userSen = prompt("Enter Sentence")
alert(removeSwear(userSen))

function removeSwear(string){
    const bad = ["Fuck","Shit","Bitch","Rat","Pussy"]
    for (i=0; i<bad.length;i++){
    string=string.replaceAll(bad[i], "*".repeat(bad[i].length))
    }
    return string
}
