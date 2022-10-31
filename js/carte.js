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
let logoc = document.querySelectorAll(".logoc")

logoc.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        let cart = document.getElementById("cont")
         if (cart.style.display == "none")
         {
            cart.style.display = "block"
         }else{
            cart.style.display = "none"
         }
    })
})