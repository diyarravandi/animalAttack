var bodyX = 202;
var bodyY = 218;
var bodyW = 98;
var bodyH = bodyW/2;
var noseSize = 340;
var noseSize2 = 102;
var noseSize3 = 225;
var noseSize4 = 85;
var noseSize5 = 224;
var noseSize6 = 63;


draw = function() {
    background(207, 254, 255);
    fill(219, 120, 168);
    ellipse(bodyX, bodyY, bodyW, 102); // body?
  
    ellipse(bodyX, bodyY-145, bodyH, 43); // face?
   fill(255, 255, 255);
   ellipse(215,70,15,-10);
   fill(0, 0, 0);
   ellipse(216,70,2,1);
    rect(197,95,9,71);

    fill(0, 0, 0);
   triangle(noseSize,noseSize2,noseSize3,noseSize4,noseSize5,noseSize6);
    line(173,262,151,359);
    line(173,262,151,359);
    noseSize+=1;
    noseSize2+=1;
    noseSize3+=1;
    noseSize4+=1;
    noseSize5+=1;
    noseSize6+=1;
    
 line(227,264,252,363);
 

};
