let formDOM = document.querySelector("#formList")  // form listesini çağırdık
 formDOM.addEventListener('submit', formHandler)

function formHandler (event) {                 
    event.preventDefault();             // sayfa yenilenmesine izin vermedik
    const writeDOM = document.querySelector ("#write")   // inputu çağırdık
    if (writeDOM.value) {                                // eğer bilgi varsa diye koşul koyduk
        addItem(writeDOM.value)                          // additem fonksiyonunu çalıştırdık.
        writeDOM.value = "" 
        alert ("succes")                            // input değeri sıfırladık.
    } else 
        alert("You must write something!");
    

    let close = document.getElementsByClassName("close");       // close classını çağırdık
    let i;                                
    for (i = 0; i < close.length; i++) {                 //döngü oluşturduk 
     close[i].onclick = function() {                     //close clasına tıklayınca fonksiyonunu belirttik
     let remove = this.parentElement;                  
     remove.style.display = "none";                      // tıklayınca ekrandan kaybol dedik.
  }
}
    } 


let close = document.getElementsByClassName("close");   //input için yaptıgımızı mevcut liste için yaptık.
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let remove = this.parentElement;
    remove.style.display = "none";
  }
}

let ulDOM = document.querySelector("#list")            //ul çağırdık
 
function addItem (write) {                            // addıtem fonsiyonunu yazıp yukarı yolaldık.
    let liDOM = document.createElement("li")
    let spanDOM = document.createElement ('span');       //li ve span oluşturduk
    spanDOM.className = "close"                          //spana close clasını yerleştirdik 
    liDOM.innerHTML =`${write} <span class="close">×</span>`       //liste içine gelecekleri yazdık
    ulDOM.append(liDOM)                                           //li listenin sonuna yerleştirdik
}


let listDOM = document.querySelector("ul");                             //ul cagırdık
 
listDOM.addEventListener("click", function (checked) {                // ul dinledik
    if (checked.target.tagName === "LI") {                         //checked classına tıklama ekledik
        checked.target.classList.toggle("checked") }               // checked clasını li ye hedefledik
}, false);                                                         // ne olacagını belirttik



