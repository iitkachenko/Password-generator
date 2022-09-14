const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const letters = characters.join('').replace(/([^A-Z^a-z].*)/,'').split('');
const numbers = characters.join('').replace(/([A-Za-z]+)/,'').replace(/([\W].*)/,'').split('');
const symbols = characters.join('').replace(/([\w]+)/,'').split('');

const pass1El = document.getElementById('pass1');
const pass2El = document.getElementById('pass2');
    
      
document.getElementById('generator').onclick = () => {
    const chLet = document.querySelector('[value="letter"]');
    const chNum = document.querySelector('[value="number"]');
    const chSymb = document.querySelector('[value="symbol"]');
    const passLength = +document.getElementById('passLength').value;
    genPass(chLet.checked, chNum.checked, chSymb.checked, passLength);
};

function genPass(chLetAdd, chNumAdd, chSymbAdd, passLength) {
    let pass1 = '';
    let pass2 = '';
    let charArr = [];
    if (chLetAdd) {
        charArr = charArr.concat(letters);
    }
    if (chNumAdd) {
        charArr = charArr.concat(numbers);   
    }
    if (chSymbAdd) {
        charArr = charArr.concat(symbols);   
    }
    if (charArr.length > 0) {
        for(let i = 0; i < passLength; i++) {
            pass1 += getSymb(charArr);
            pass2 += getSymb(charArr);
        }
    }
    pass1El.textContent = pass1;
    pass2El.textContent = pass2;
    
}

function getSymb(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
}