
var sum=0;
var text=[];
var i=0;
function add(price, name){
  sum+=price;
  console.log(sum);
  document.getElementById("inputid").value=sum;
  if(document.getElementById("not")!=undefined){
      document.getElementById("not").remove()
  }

  const cont = document.getElementById("cont")
  var p = document.createElement("p")
  text[i]=document.createTextNode(name,price)
      p.appendChild(text[i])
  cont.appendChild(p)
  console.log(text[i])
  i++;
}