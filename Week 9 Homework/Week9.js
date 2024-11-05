
let mainDeck= document.getElementById("mainDeck");
let flowers = ["./images/blue.png","./images/pink.png","./images/purple.png","./images/red.png"];
let h1 = document.getElementById("b");

let flowerList = [];

for(let i=0; i<=39; i++){
    let elt = document.createElement("img");
    elt.src="./images/grass.png";
    elt.style.width= "10%";
    //elt.onclick = () => elt.classList.toggle("flipped");
    mainDeck.append(elt);
    flowerList.push(elt);
    
    showAllButton.onclick=function(){
      flowerList.forEach(elt => {
        let pic = parseInt(Math.random()*flowers.length)
        elt.src= flowers[pic];
        
      });
    }

    elt.onclick= function(){
      let pic = parseInt(Math.random()*flowers.length)
      elt.src= flowers[pic];
      flowerList.push(elt);
    }

  }

  hideAllButton.onclick=function(){
    flowerList.forEach(elt => {
      elt.src="./images/grass.png";
      
    });
  }
