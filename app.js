

function generatePassword(length, includeLowerCase,includeUpperCase,includeNumbers,includeSymbols) {

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789"
    const symbolChars = "!@%$";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "" ;
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    console.log(allowedChars);


    if(length <= 0) {
        return  "Password Length has to be atleast than 1";
    }
    if(allowedChars.length === 0){
        return "At least 1 set of characters has to be selected";
    }

    for(let i = 0; i < length; i++)
    {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);

        password += allowedChars[randomIndex];


    }
    

    return password;
}


const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function createPassword()
{
    const password = generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);
    document.getElementById('password').textContent = password;
}


