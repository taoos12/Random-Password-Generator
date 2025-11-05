let passLength = document.getElementById('length').value;
document.getElementById('hehe').textContent = passLength;

function generatePassword(){
    let includeLowerCase = document.getElementById('lowercase').checked;
    if(includeLowerCase){
        includeLowerCase = true;
    }
    
    let includeUpperCase = document.getElementById('UPPERCASE').checked;
    if(includeUpperCase){
        includeLowerCase = true;
    }
    
    let includeNumeric = document.getElementById('numeric').checked;
    if(includeNumeric){
        includeNumeric = true;
    }
    
    let includeSymbols = document.getElementById('symbols').checked;
    if(includeSymbols){
        includeSymbols = true;
    }

    const lowerCaseCharaters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseCharaters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericCharacters = '1234567890';
    const symbolsCharacters = '`~!@#$%^&*()_+{}[];:<>,.?/\|';

    let allowedCharacter = '';
    let password = [];

    allowedCharacter += includeLowerCase ? lowerCaseCharaters : '';
    allowedCharacter += includeUpperCase ? upperCaseCharaters : '';
    allowedCharacter += includeNumeric ? numericCharacters : '';
    allowedCharacter += includeSymbols ? symbolsCharacters : '';

    for(let i = 0; i < passLength; i++){
        const randomIndex = Math.floor(Math.random() * passLength);
        password = password + allowedCharacter[randomIndex];
    }
    document.getElementById('pass1').textContent = password;
}

// console.log(generatePassword());


// let passLength = document.getElementById('passLength').value;
// document.getElementById('myP').textContent = passLength;


// let includeLowerCase = document.getElementById('lowercase').checked;
// if(includeLowerCase){
//     includeLowerCase = true;
// }

// let includeUpperCase = document.getElementById('UPPERCASE').checked;
// if(includeUpperCase){
//     includeLowerCase = true;
// }

// let includeNumeric = document.getElementById('numeric').checked;
// if(includeNumeric){
//     includeNumeric = true;
// }

// let includeSymbols = document.getElementById('symbols').checked;
// if(includeSymbols){
//     includeSymbols = true;
// }

// const lowerCaseCharaters = 'abcdefghijklmnopqrstuvwxyz';
// const upperCaseCharaters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const numericCharacters = '1234567890';
// const symbolsCharacters = '`~!@#$%^&*()_+{}[];:<>,.?/\|';

// let allowedCharacter = '';
// let password = [];

// allowedCharacter += includeLowerCase ? lowerCaseCharaters : '';
// allowedCharacter += includeUpperCase ? upperCaseCharaters : '';
// allowedCharacter += includeNumeric ? numericCharacters : '';
// allowedCharacter += includeSymbols ? symbolsCharacters : '';

// for(let i = 0; i < passLength; i++){
//     const randomIndex = Math.floor(Math.random() * passLength);
//     password.push(allowedCharacter[randomIndex]);
// }
// document.getElementById('myP1').textContent = password.join('');


// console.log(document.getElementById('length').value);