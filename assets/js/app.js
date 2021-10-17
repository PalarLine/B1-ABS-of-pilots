

function userFillForm() {

let userInput = formInput.value.toLowerCase();

if(userInput.length == 0) {

    document.getElementById('formGetting').innerHTML = '&nbsp;';
}

console.log(userInput);

let userInputArrey = userInput.split('');
console.log(userInputArrey);

let resultArrey = [];
let resultStr;


for (let i = 0; i < userInputArrey.length; i++) {

let alphabet = [
    {letter: 'a', code: 'Alpha'},
    {letter: 'b', code:'Bravo'},
    {letter: 'c', code:'Charly'},
    {letter: 'd', code:'Delta'},
    {letter: 'e', code:'Echo'},
    {letter: 'f', code:'Foxtrot'},
    {letter: 'g', code:'Golf'},
    {letter: 'h', code:'Hotel'},
    {letter: 'i', code:'India'},
    {letter: 'j', code:'Juliett'},
    {letter: 'k', code:'Kilo'},
    {letter: 'l', code:'Lima'},
    {letter: 'm', code:'Mike'},
    {letter: 'n', code:'November'},
    {letter: 'o', code:'Oscar'},
    {letter: 'p', code:'Papa'},
    {letter: 'q', code:'Quebec'},
    {letter: 'r', code:'Romeo'},
    {letter: 's', code:'Sierra'},
    {letter: 't', code:'Tango'},
    {letter: 'u', code:'Uniform'},
    {letter: 'v', code:'Victor'},
    {letter: 'w', code:'Whiskey'},
    {letter: 'x', code:'X-ray'},
    {letter: 'y', code:'Yankee'},
    {letter: 'z', code:'Zulu'},
    {letter: '0', code:'zero'},
    {letter: '1', code:'one'},
    {letter: '2', code:'two'},
    {letter: '3', code:'three'},
    {letter: '4', code:'four'},
    {letter: '5', code:'five'},
    {letter: '6', code:'six'},
    {letter: '7', code:'seven'},
    {letter: '8', code:'eight'},
    {letter: '9', code:'nine'},
    
];

alphabet = alphabet.find( item => item.letter == userInputArrey[i]);

console.log(alphabet);


resultArrey.push(alphabet.code);

console.log(resultArrey);


resultStr = resultArrey.join(' ');

console.log(resultStr);

    
document.getElementById('formGetting').innerHTML = resultStr;

}
} 