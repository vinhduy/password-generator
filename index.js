// list of all possible characters for password generator
let btn1 = document.getElementById("btn1")
let characters = ['A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+', 1,2,3,4,5,6,7,8,9,0]

let passwordEl = document.querySelectorAll(".btn")
let visible = false
//function for creating random password
function passwordGen(){
    let passLength = document.getElementById("inputfield").value
    let password = "";
    let arrayOfPasswords = []
    for (let i=0; i< passLength; i++){
    password = characters[(Math.floor(Math.random()*characters.length))]
    arrayOfPasswords.push(password)
        }
            return arrayOfPasswords
    }

function passwordGens(){
    for (let i=0; i < 4; i++ ){
        passwordEl[i].textContent = passwordGen().join("")
        }
}
