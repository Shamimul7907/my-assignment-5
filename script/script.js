console.log('script file connect')


function getElement(id){
  const element = document.getElementById(id);
  return element;
}


// #heart-button er kaj

const heartBtns = document.getElementsByClassName("heart-btn")
 
for (let heartBtn of heartBtns ){
  // console.log(heartBtn)
heartBtn.addEventListener("click",function(){

  const newHeart =getElement("heart-count").innerText;
  const finalHeat = Number(newHeart) + 1
   getElement("heart-count").innerText = finalHeat 
})
}



// call-btn er jonno


 const cardBtns = document.getElementsByClassName("card-btn")
// console.log(cardBtns)

for (let cardBtn of cardBtns){
  // console.log(cardBtn)
  cardBtn.addEventListener("click",function(){
    // console.log("btn-clicked");
   
const cardTitle=cardBtn.parentNode.parentNode.childNodes[3].innerText;
    //  console.log(cardTitle)
 const cardNumber=cardBtn.parentNode.parentNode.childNodes[7].innerText;
   //  console.log(cardNumber)
const cardHistory= getElement("call-history-1");

 const newCoin = getElement("coin-nav").innerText;
    // console.log(newCoin)
     if(newCoin >= 20){
         
       alert(`Calling ${cardTitle}: ${cardNumber}`);
       const now = new Date();
       const localTime = now.toLocaleTimeString();
       console.log(localTime)

       const newCard = document.createElement("div");
       newCard.innerHTML =`<div  class="border-1 border-gray-300 mt-3 p-4 flex justify-between items-baseline shadow-sm">
                    <div>
                         <h1 id="history-box" class="text-[15px] font-semibold mt-3">${cardTitle}</h1>
                     <p>${cardNumber}</p>
                    </div>
                    <span class="text-gray-600 text-[15px]">${localTime}</span>    
                     
                </div>`;
                     cardHistory.append(newCard)

      
                getElement("coin-nav").innerText=newCoin-20;
    
              }
    
              else{
              alert("You don’t have enough coins. At least 20 coins are required to make a call")
      
             }
})
}


// coppy-btn er jonno

const copyBtns = document.getElementsByClassName("copy-btn")
 
for (let copyBtn of copyBtns ){
  //  console.log(copyBtn)
 copyBtn.addEventListener("click", async function(){
  // console.log()
   const cardNumber=copyBtn.parentNode.parentNode.childNodes[7].innerText;
  const newCopy = getElement("copy-available").innerText;
   
  try {
    await navigator.clipboard.writeText(cardNumber)
  
  }
  catch (err){

   }

   const finalCopy = Number(newCopy) + 1
 
   getElement("copy-available").innerText = finalCopy;
   alert(`Number is Copied: ${cardNumber}`)
})
 }


// clear-button er jonno

 document.getElementById('clear-btn').addEventListener("click",function(){

     const cardHistory= getElement("call-history-1");
    cardHistory.innerHTML=""
})
