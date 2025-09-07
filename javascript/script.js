document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll(".add-to-cart-btn");

  cartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productCard = btn.closest(".pro");
      const name = productCard.querySelector("h5").innerText;
      const price = productCard.querySelector("h4").innerText;

      document.getElementById("productName").value = name;
      document.getElementById("productPrice").value = price;

      const form = document.getElementById("order-form");
      form.style.display = "block";
      form.scrollIntoView({ behavior: "smooth" });
    });
  });
});
