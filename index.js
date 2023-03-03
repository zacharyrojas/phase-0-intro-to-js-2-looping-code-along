// Code your solutions in this file
const messages = [];

function writeCards(names, event) {
    const card = [...messages]
    for (let n = 0; n < names.length; n++) {
    messages.push(`Thank you, ${names[n]}, for the wonderful ${event} gift!`);
}
    return card;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown() {
    let n = 10;
    while (n >= 0) {
        console.log(n);
    n--;
    }
}