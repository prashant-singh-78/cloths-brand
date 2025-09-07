document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const productPriceMap = {
      "Cool T-Shirt": 199,
      "Premium Hoodie": 599,
      "Basic Tee": 149
    };

    const productName = form.product.value;
    const amount = productPriceMap[productName] || 199;

    const data = {
      name: form.name.value,
      email: form.email.value,
      mobile: form.mobile.value,
      product: productName,
      size: form.size.value,
     district_name: form["district_name"].value,

      address: form.address.value,
      amount: amount.toString()
    };

    localStorage.setItem("orderData", JSON.stringify(data));
    window.location.href = "payment.html";
  });
});
