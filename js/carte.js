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
  console.log(text[i],price[i])
  i++;
}
var panier= document.getElementById("menuPanier");
        var cocaqu = 1, sevenqu = 1, pepsiqu = 1;

        function coca(){
            var coc = document.querySelectorAll("#cocaCola");
            for(var j = 0; j < coc.length; j++){
                coc[j].style.display = "none";
            }
            var div = document.createElement("div");
            div.setAttribute("id", "cocaCola");
            div.setAttribute("class", "rows");
            var text1 = document.createElement("h3");
            var text2 = document.createElement("h3");
            var text3 = document.createElement("h3");
            text1.innerText = "CocaCola";
            text2.innerText = "x"+cocaqu;
            text3.innerText = "15Dh";
            div.appendChild(text1);
            div.appendChild(text2);
            div.appendChild(text3);
            panier.appendChild(div);
            cocaqu++;
        }