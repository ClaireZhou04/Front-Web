
let num=0;
const bts = document.querySelectorAll("button");
let div1= document.getElementById("div1");
let div2= document.getElementById("div2");
let div3= document.getElementById("div3");

bts.forEach(button=> 
button.onclick=function(){
    getElement();
    ID1();
    ID2();
    num++;
    if(num % 2 == 0){
    document.body.style.color="black";
    document.body.style.backgroundColor="white";
    }else{
    document.body.style.color="white";
    document.body.style.backgroundColor="blue";   
    }
}
)

function getElement(){
    let hNum = document.getElementsByTagName("h1").length;
    div1.innerHTML = "There are " + hNum + " titles tags on this page.";
}

function ID1(){
    let class2 = document.getElementsByClassName("class1");
    let num2 = class1.getElementsByTagName("h1").length;
    div2.innerHTML = "There are " + num2 + " elements in class 1.";
}

function ID2(){
    let class3 = document.getElementsByClassName("class2");
    let num3= class2.getElementsByTagName("h1").length;
    div3.innerHTML = "There are " + num3 + " elements in class 2.";
}
