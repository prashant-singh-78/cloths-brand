function submitPayment() {
  const code = document.getElementById("txnCode").value;
   if (code.length !== 4 || isNaN(code)) {
     alert("❌ Please enter a valid 4-digit UPI code");
     return;
   }

  const data = JSON.parse(localStorage.getItem("orderData"));
  if (!data) return alert("Form data missing!");

  data.upiCode = code; // store txn code as proof

  const scriptURL = "https://script.google.com/macros/s/AKfycbzD2kQOtGy84p1on5xf3mpK7MEoVfT9Gri6oHC_H9nKwXndgj2xESAd4g_J-Ics8VQ8tw/exec";

  fetch(scriptURL, {
    method: 'POST',
    body: new URLSearchParams(data)
  })
  .then(() => {
    localStorage.setItem("paymentDone", "true");
    localStorage.removeItem("orderData");
    window.location.href = "thankyou.html";
  })
  .catch(() => alert("❌ Something went wrong"));
}