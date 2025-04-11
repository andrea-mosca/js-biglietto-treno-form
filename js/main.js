const utentKm = document.getElementById("utent-km");
const utentAge = document.getElementById("utent-age");
const sendInfoButton = document.getElementById("send-information-button");
const utentName = document.getElementById("utent-name");

const ticketName = document.getElementById("ticket-name");
const ticket = document.getElementById("ticket");
const discountAmount = document.getElementById("sconto-applicato");
const ticketCode = document.getElementById("codice-biglietto");
const finalTicketPrice = document.getElementById("prezzo-biglietto");

sendInfoButton.addEventListener("click", function(event){
   event.preventDefault();
   ticket.classList.remove("d-none");

   const km = parseInt(utentKm.value);
   const age = parseInt(utentAge.value);

   const eurForKm = km * 0.21;
   let ticketPrice = eurForKm;
   const underageDiscount = ticketPrice - (ticketPrice * 0.8);
   const elderlyDiscount = ticketPrice - (ticketPrice * 0.6);
   let discount = "prezzo intero";
   let randomTicketCode = Math.floor(Math.random() * 9000)+ 10000;
   if(age < 18){
      ticketPrice = ticketPrice - underageDiscount;
      discount = underageDiscount;
     } else if(age > 65){
      ticketPrice = ticketPrice - elderlyDiscount;
      discount = elderlyDiscount;
     }
   
   ticketName.textContent = utentName.value;
   finalTicketPrice.textContent = `${ticketPrice.toFixed(2)} $`;
   ticketCode.textContent = randomTicketCode;
   if(typeof discount === "number"){
      discountAmount.textContent = `${discount.toFixed(2)} $`;
   } else{
      discountAmount.textContent = discount;
   }
  
})

