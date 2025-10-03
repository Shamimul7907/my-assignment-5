console.log('script file connect')
// copy-available=id coppy button er 
// btn-box-copy
// btn-call-1
// title-1

function getElement(id){
  const element = document.getElementById(id);
  return element;
}

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
  // const history = getElement("card-box").innerText
   const cardHistory= getElement("call-history-1");
//   
  alert(`Calling ${cardTitle}: ${cardNumber}`)
  const newCard = document.createElement("div");
   newCard.innerHTML =`<div  class="border-1 border-gray-300 mt-3 p-4">
                    <h1 id="history-box" class="font-semibold mt-3">${cardTitle}</h1>
                     <p>${cardNumber}</p>
                             
                </div>`;
                     cardHistory.append(newCard)

    const newCoin = getElement("coin-nav").innerText;
    // console.log(newCoin)
     if(newCoin >= 20){
          getElement("coin-nav").innerText=newCoin-20;
    }
    else{
      alert("You don’t have enough coins. At least 20 coins are required to make a call")
    }

  })
}


// document.getElementById('btn-call-1').addEventListener("click",function(){

//   const title = getElement ("title-1").innerText;
//   const number = getElement("card-number-1").innerText;

//   //  const history = getElement("card-box").innerText;

//   //  console.log(title,number,history)
  
//  
              
              
//          

//   })



// document.getElementById("btn-box-copy").addEventListener("click",function(){
// // const btnCopy = getElement("btn-box-copy").innerText;
// // const copy =  getElement("copy-available").innerText;




// const newCopy =Number(copy)+1;

// // console.log(newCopy)
// getElement("copy-available").innerText= newCopy;
// })


// const copyBtn = document.querySelectorAll("#btn-box-copy");


// const newCopy = document.getElementById("copy-available");


// copyBtn.forEach(button => {
//   button.addEventListener("click", () => {
//     let currentCopy = parseInt(newCopy.innerText);
//     newCopy.innerText = currentCopy + 1;
//   });
// });