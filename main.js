let items = ["3 Litre Su İç","Ödevlerini YAP","EN AZ 3 Saat Kodlama Yap","Yemek Yap","50 Sayfa Kitap Oku"] // listeye eklemek isteğimiz ilk bilgileri değişkene atadık.

let localInfo = localStorage.getItem ? Number(localStorage.getItem("myKeys")) : 0; //local strogedan bilgi alsın dedik.
let txtItemDOM = document.querySelector("#txtItem"); // localstroge için input textimizi çağırdık.
txtItemDOM.innerHTML = localInfo; // input değerini localstrogedan alsın.

let listDOM = document.querySelector("#myList");     //UL ÇAĞIRDIK
// let itemDOM = "";                                         //HTML BİLGİ YAZMAK İÇİN

    items.forEach(function(item) {     // Arrayimizın bilgilerini döndürdük. createıtem fonksiyonu aynı işlemler aktardık.
      createItem(item);
    });
      
    listDOM.addEventListener("click",function(item){  // ul yi dinliyoruz item parametresi ile devam ediyoruz
            if(item.target.tagName === "LI") {// UL )li nesnesine eşit mi tıklanan li elementi ise devam?target.tagNameile sorguluyoruz
                item.target.classList.toggle("checked") // öyle ise ul classtlistine toogle olarak checked classını ekliyoruz.
            }
    })

    document.querySelector("#click").onclick = function(){      //butonumuzu çağırıp dinledik onclick ile etkinleştirdik
         let txtItemDOM = document.querySelector("#txtItem");   //inputu tekrar çağırdık değerine ihtiyacımz var
       
       if(txtItemDOM.value) {                                   //inputta değer varsa createItem fonksiyonunu çağırdık ve li ekledik
        createItem(txtItemDOM.value);                           //bu fonksiyona input value değerimizi parametre verdik.
        toast()                                                  // toast yerleştirdik.
        txtItemDOM.value= "";                                   //input değerini sıfırladık
       }else {
        toast2()                          
    }
   }
           // toast'lar için fonksiyonlar.
    function toast () {
     new bootstrap.Toast(document.querySelector('#liveToast')).show();
     }
    function toast2 () {
        new bootstrap.Toast(document.querySelector('#liveToast2')).show();
        }


    function createItem(item){
         // itemDOM += `<li class="list-group-item">${item} </li>`      //bu sekilde bilgiyi yolayabiliyoruz farklı yolu ise;
         let liDOM = document.createElement("li");    // li elemanı oluşturduk
         let tDom = document.createTextNode(item);   // bir elemanın içine gelecek texti oluşturdul.
 
         liDOM.className = "list-group-item";     // liye clasımızı ekledik.
         liDOM.appendChild(tDom);                 //li elemanı parent element t elemanı ise (bilgilerimiz) child element olarak kurduk.
         listDOM.appendChild(liDOM);                     // oluşturğumuz li elementini ulye ekledik parent-child kurduk.
 
         let spanDOM = document.createElement("span"); //  close için span oluşturduk
         let xDom = document.createTextNode('\u00d7');  //  kapatma için x oluşturduk
         spanDOM.className = "close"                   // spana daha önce oluşturduğumuz close calssını ekledik
         spanDOM.appendChild(xDom);                    // x nesnemizi spanın childi yaptık
         liDOM.appendChild(spanDOM)                    // span nesnemizi li childi yaptık
 
         localStorage.setItem("myKeys",item)            //LLocal stroge kurduk.

         //İnputtan gelen li' leri kaldırmak için.
         spanDOM.onclick = function() {
            let liDOM = this.parentElement;
            liDOM.style.display = "none";
         }
        

    }

    // Eklediğimiz mevcut li'leri kaldırmak için.!
    let closeDOM = document.querySelectorAll(".close");  //spanımıza close clası vermiştik onu çağırdık
    for (let i = 0; i < closeDOM.length; i++ ) {         //her x kapatması için for döngüsü kurduk for eachde olurdu.
        closeDOM[i].onclick = function(){        //her bir close spanına ulaşmak için, ve onclick ile x etkinleştirip fonskyon yazdık
            let liDOM = this.parentElement;     // spanın parent elemeniti li ve kapatmak istediğimiz. this dediği de spanımız
            liDOM.style.display = "none";       // close tagını seçmiştik yani spanımızı ona click işlemi ile fonksiyon yazdık ve her x için yapması için döngü kurduk. parent elementi yani liyi gizlemek istediğimiz için li leri çağırdık ve this.parentelement ile this dediği spanımız. parent elemanı oldugunu sölyedik ve li lere kapatmak için d-none stilini uyguladık.
        }
    }
