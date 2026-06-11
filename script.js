/*let name="sivani";
var age=20;
const height=5.1;
console.log(name);
console.log(age);
console.log(height);
console.log(age+3);
console.log(age-2);
console.log(age*2);
console.log(age/2);
console.log(age%5);
age+=4;
console.log(age);
age-=2;
console.log(age);
age*=2;
console.log(age);
age/=2;
console.log(age);
age%=5;
console.log(age);
let age1="20";
console.log(age>age1);
console.log(age<age1);
console.log(age>=age1);
console.log(age<=age1);
console.log(age===age1);
console.log(age!=age1); 
let food="biriyani";
let breakfast="idly";
let food1="dosa";
let food2="poori";
let food3="Pongal";
let food4="Upma";
if(food==breakfast){
    c/*onsole.log("I am having idly for breakfast");
} else if(food==food1){
    console.log("I am having Dosa for breakfast");
} else if(food==food3){
    console.log("I am having Pongal for breakfast");
} else {
    console.log("I am having Upma for breakfast")
}*/

/*let num=1000;


if (num>=500){
    let notes=Math.floor(num/500);
    console.log(notes+" 500$ notes required");}
else if (num>=200){
    let notes=Math.floor(num/200);
    console.log(notes+" 200$ notes required");}
else{
    console.log("Amount is less");
}*/
/*let amount = 2500;
if (amount >= 500) {
    let notes = Math.floor(amount / 500); // Capital 'M' in Math
    console.log("500 notes x " + notes);
    amount = amount % 500;                // Keeps the remaining balance
}
if (amount >= 200) {
    let notes = Math.floor(amount / 200);
    console.log("200 notes x " + notes);
    amount = amount % 200;
}
if (amount >= 100) {
    let notes = Math.floor(amount / 100);
    console.log("100 notes x " + notes);
    amount = amount % 100;
}
if (amount > 0) {
    console.log("Remaining change: " + amount);
}
let i=1;
while(i<=30){
    console.log("Day "+i+" completed");
    i++;
}
let user_name="sivani";
let password="sivani123";
let name="pooji";
let pin="p477";
let name1="praisy";
let pin1="sunny123";
if(user_name=="sivani"){
    console.log(user_name);
    if(password=="sivani123"){
        console.log("Welcome sivani");
    }
}*/
/*for(let i=1;i<=10;i++)
    {
        for(let j=1;j<=10;j++){

        console.log("2 x "+j+" = "+2*j);
        }
    }
let num = 5;

let name1 = "1";
let name2 = "2";
let name3 = "3";
let name4 = "4";
let name5 = "5";

if (num % 2 === 0) {
    console.log(name1 + "\n" + name3 + "\n" + name5);
    console.log(name2 + "\n" + name4);
} else {
    console.log("last chocolate by " + name4);
} */
/*function cook()
{
     console.log("pour the batter in pan");
     console.log("rub that in round shape with garita");
     console.log("give some touchup with oil");
     console.log("twist with dosa garita");
     console.log("serve the dosa");

}
cook();
function dishwash(vessels){
    console.log("we have to wash "+vessels+"vessels");
}
dishwash(2);
function num(n)
{
    if(n>10){
      return;
    }
    console.log(n);
    n+=1;
    num(n);

}
num(1);*/
function guess(n) {
    let userGuess = Number(prompt("Enter a number:"));

    if (userGuess == n) {
        console.log("Congratulations! You guessed the number.");
    } else if (userGuess < n) {
        console.log("Too low! Try again.");
        guess(n);
    } else {
        console.log("Too high! Try again.");
        guess(n);
    }
}

let number = Math.floor(Math.random() * 100) + 1;
guess(number);