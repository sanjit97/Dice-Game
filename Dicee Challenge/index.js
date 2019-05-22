var number1,number2;
number1=Math.floor(((Math.random())*6))+1;
number2=Math.floor(((Math.random())*6))+1;

if (number1>number2){
  document.querySelector("h1").innerHTML="Player 1 Wins";
  for(var i=2;i<7;i++){
    for(var j=1;j<i;j++){
      if (number1==i && number2==j){
        document.querySelector("div img.img1").setAttribute("src","images/dice"+number1+".png");
        document.querySelector("div img.img2").setAttribute("src","images/dice"+number2+".png");
      }
    }
  }
}

else if (number2>number1){
  document.querySelector("h1").innerHTML="Player 2 Wins";
  for(var j=2;j<7;j++){
    for(var i=1;i<j;i++){
      if (number1==i && number2==j){
        document.querySelector("div img.img1").setAttribute("src","images/dice"+number1+".png");
        document.querySelector("div img.img2").setAttribute("src","images/dice"+number2+".png");
      }
    }
  }
}

else{
  document.querySelector("h1").innerHTML="Its a Draw";
  for(var i=1,j=1;i<7,j<7;i++,j++){
      if (number1==i && number2==j){
        document.querySelector("div img.img1").setAttribute("src","images/dice"+number1+".png");
        document.querySelector("div img.img2").setAttribute("src","images/dice"+number2+".png");
      }
  }
}
