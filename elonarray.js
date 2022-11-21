let objArray = [
    {
        id: 1,
        name: "AirPods Pro",
        image: "img/jImRpPw.jpg",
        price: 249990000,
    },
    {
        id: 2,
        name: "Nintendo Switch",
        image: "./img/LUyQhmF.jpg",
        price: 29999000,
    },
    {
        id: 3,
        name: "PS5",
        image: "./img/CugpEfY.jpg",
        price: 49999000,
    },
    {
        id: 4,
        name: "Xbox Series X",
        image: "./img/HgPROm3.jpg",
        price: 49978000,
    },
    {
        id: 5,
        name: "Iphone 14 Pro Max - 1TB",
        image: "./img/SH7FrjV.jpg",
        price: 1599000,
    },
    {
        id: 6,
        name: "Samsung S22 Ultra - 1TB",
        image: "./img/1Vf4DWy.jpg",
        price: 13990000,
    },
    {
        id: 7,
        name: "MacBook Pro 14' M1 Max (64GB RAM | 4TB)",
        image: "./img/69V42nb.jpg",
        price: 46990000,
    },
    {
        id: 8,
        name: "2022 Mac Studio M1 Ultra (128GB RAM | 8TB)",
        image: "./img/TaO01Rv.jpg",
        price: 69990000,
    },
    {
        id: 9,
        name: "Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)",
        image: "./img/PXJj7z0.jpg",
        price: 495099,
    },
    {
        id: 10,
        name: "Razer Blade 14 Top spec (2022)",
        image: "./img/XrStrbb.jpg",
        price: 1770130,
    },
    {
        id: 11,
        name: "Mac Pro Top spec (2022) (28 Cores, 8TB SSD, 1TB RAM, 32GB Video)",
        image: "./img/Kx4cEmk.jpg",
        price: 53799999,
    },
    {
        id: 12,
        name: "Man dan",
        image: "/img/MU.jpg",
        price: 20000000000,
    }
]
function objectArray() {
    let showProduct = document.getElementById("allElements");
    let listProduct = "";
    for (let i = 0; i < objArray.length; i++) {
        listProduct += `
        <div class="app-item">
              <img src="${objArray[i].image}" alt="">
              <p id="name"> ${objArray[i].name} </p>
              <div id="price"> USD ${objArray[i].price}</div>
              <div class="buyAndSell">
                <button class="btn-sell" id="sell"> Sell</button>
                <div class="amount" id="amount"> 0 </div>
                <button class="btn-buy" id="buy"> Buy</button>
              </div>
            </div>
        `
    }
    showProduct.innerHTML = listProduct;
}
objectArray();

let buttonBuy = document.querySelectorAll(".btn-buy");
let buttonSell = document.querySelectorAll(".btn-sell");
let Buyed = document.querySelectorAll(".amount");
let totalMoney = document.getElementById("totalMoney");
let remaining = 217000000000 ;
let percentageLeft = document.getElementById("percentageLeft");
let remainingPercentage = "";
// let check=1;
for (let i = 0;i < buttonBuy.length; i++)  {
    let count = 0;
    buttonBuy[i].onclick = () =>{
        count++;
        Buyed[i].innerHTML = count;
        remaining = remaining - objArray[i].price;
        const formatted = remaining.toLocaleString('en-US');
        // console.log(formatted); 
        totalMoney.innerHTML = `Remaining: ${formatted} USD`;
        // buyPercentage = (1 - remaining/ 217000000000) * 100;
        buyPercentage = (217000000000 - remaining) / 217000000000 * 100;
            let base = 10**6;
            let result = Math.round(buyPercentage * base) / base ;
            percentageLeft.innerHTML = `You only spent ${result}% of the total!` ;       
        for(let i=0;i<buttonBuy.length; i++){
            if(objArray[i].price > remaining){
                buttonBuy[i].disabled = true;  
            //     check++;
            //    if( check == 3 ){
            //     document.getElementById("shopMoney").innerHTML="ban da het tien";
                
            //    }else{
            //     totalMoney.innerHTML = `Remaining: ${formatted} USD`;
            //     document.getElementById("shopMoney").innerHTML=
            //     `
            //         <p class="totalMoney" id="totalMoney">Remaining: $${formatted}USD</p>
            //         <p class="percentageLeft" id="percentageLeft">
            //         .
            //         </p>
            //     `
        // return remaining;                
            } 
            }         
         }
      
     
    
   
    buttonSell[i].onclick = () => {
        if (count == 0)  {
            return;
        } 
        count--;
        Buyed[i].innerHTML = count;
        remaining = remaining + objArray[i].price;
        const formatted = remaining.toLocaleString('en-US');
        totalMoney.innerHTML = `Remaining: ${formatted} USD`;
        buyPercentage =  (1 - remaining / 217000000000 ) * 100;
        let base = 10**6;
        let result = Math.round(buyPercentage * base) / base ;
        percentageLeft.innerHTML = `You only spent ${result}% of the total!` ;      
        if (result == 0) {
            percentageLeft.innerHTML = `You only spent 0.000000% of the total!` ; 
        }   else {
            percentageLeft.innerHTML = `You only spent ${result}% of the total!` ;
        }        
            for (let index = 0; index < buttonBuy.length; index++) {
                if (remaining > objArray[i].price) {
                buttonBuy[index].disabled = false;  
            }
        }
     }

     
}
