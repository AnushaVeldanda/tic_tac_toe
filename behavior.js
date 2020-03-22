var id;
var Counter =0;
var name_arry =[];
var values =[9,9,9,9,9,9,9,9,9,9];

function Track(index,value){
values[index] =value;
if((values[1]!=9)&&(values[2]!=9)&&(values[3] !=9 ))
if((values[1]==values[2])&&(values[2]==values[3]))
return true;
if((values[4]!=9)&&(values[5]!=9)&&(values[6] !=9 ))
if((values[4]==values[5])&&(values[5]==values[6]))
return true;
if((values[7]!=9)&&(values[8]!=9)&&(values[9] !=9 ))
if((values[7]==values[8])&&(values[8]==values[9]))
return true;
if((values[1]!=9)&&(values[4]!=9)&&(values[7] !=9 ))
if((values[1]==values[4])&&(values[4]==values[7]))
return true;
if((values[2]!=9)&&(values[5]!=9)&&(values[8] !=9 ))
if((values[2]==values[5])&&(values[5]==values[8]))
return true;
if((values[3]!=9)&&(values[6]!=9)&&(values[9] !=9 ))
if((values[3]==values[6])&&(values[6]==values[9]))
return true;
if((values[1]!=9)&&(values[5]!=9)&&(values[9] !=9 ))
if((values[1]==values[5])&&(values[5]==values[9]))
return true;
if((values[3]!=9)&&(values[5]!=9)&&(values[7] !=9 ))
if((values[3]==values[5])&&(values[5]==values[7]))
return true;

}

function idName(){
  var name;
  var target = event.target || event.srcElement;
  name=target.id;
  return name;
}

function Pick(){
// var target = event.target || event.srcElement;
id=idName();
document.getElementById('right').remove();
document.getElementById('wrong').remove();
document.getElementById('start').innerHTML="start the game";



}
function Click(){
var name = idName();


if(Counter <=9 )
{
if(!name_arry.includes(name)){
  if(id == "wrong"){
  document.getElementById(name).innerHTML="<img src='wrong.jpg'>";
  id="right";
  var index = name.charAt(5);
  Track(index,0);

}
else if(id == "right"){
document.getElementById(name).innerHTML="<img src='right.gif'>";
id="wrong";
var index = name.charAt(5);
Track(index,1);

}
setInterval(function(){},20000);
if(Track())
document.write("The end");
Counter++;
name_arry.push(name);
}
}
}
