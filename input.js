function greet_morning()
{
    let text=document.getElementById("greet");
    text.innerText="Good morning";
    num=0;
}
function turn_on(){
    let light=document.getElementById("on");
    light.src="../light_on.jpeg";
}
function turn_off(){
    let light=document.getElementById("on");
    light.src="../light_off.jpeg";
}
function change_color()
{  
    let colour=document.getElementById("cap");
    colour.style.backgroundColor="black";
    let txt1=document.getElementById("Data");
    txt1.style.color="white";
    let txt2=document.getElementById("greet");
    txt2.style.color="white";
}