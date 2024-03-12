import {useState} from 'react';

function PwdGen(){

    const [pwd, setPwd] = useState("");

    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let symbols = "!@#$%^&*()_+{}[]";

    let combineChars = "";

    const generatePassword = () =>{
        const newPwd = getNewPassword();
        if(newPwd != undefined){
            document.getElementById("showPwd").value = newPwd;
        }
    }
    function getNewPassword(){
        let charLen = parseInt(document.getElementById("charLenght").value);
        let upperCheck = document.getElementById("upper");

        if(upperCheck.checked){
            combineChars += upperCase;
        }

        let lowerCheck = document.getElementById("lower");
        if(lowerCheck.checked){
            combineChars += lowerCase;
        }

        let numberCheck = document.getElementById("number");
        if(numberCheck.checked){
            combineChars += num;
        }

        let symbolCheck = document.getElementById("sym");
        if(symbolCheck.checked){
            combineChars += symbols;
        }

        if(combineChars == 0){
            alert("--All checks are empty--");
            return ;
        }

        let newPassword = "";
        for(let i=0;i<charLen;i++){
            newPassword += combineChars[Math.floor(Math.random() * combineChars.length)];
        }

        combineChars ="";
        return newPassword;
    }

    return (
        <div>
            <input type="text" placeholder="Min 8 char" id="showPwd" readOnly/>
            <input type="number" id="charLenght" min={8} max={50} defaultValue={8}/>
            <br/>
            <label>Include Upper Case : </label>
            <input type="checkbox" id='upper'/>
            <br/>
            <label>Include Lower Case : </label>
            <input type="checkbox" id='lower'/>
            <br/>
            <label>Include Numbers : </label>
            <input type="checkbox" id='number'/>
            <br/>
            <label>Include symbols : </label>
            <input type="checkbox" id='sym'/>
            <br/>
            <button onClick={generatePassword}>Generate Password</button>
        </div>
    );
}

export default PwdGen;