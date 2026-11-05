function track(name, params) {
  if (typeof gtag === "function") gtag("event", name, params || {});
}

document.querySelectorAll("a[href='#signup']").forEach(function (a) {
  a.addEventListener("click", function () {
    track("select_promotion", { promotion_name: "signup_cta" });
  });
});

var viewedOffer = false;
window.addEventListener("scroll", function () {
  var cta = document.getElementById("signup");
  if (!viewedOffer && cta && cta.getBoundingClientRect().top < window.innerHeight) {
    viewedOffer = true;
    track("view_promotion", { promotion_name: "first_order_discount" });
  }
});

document.querySelectorAll(".form-subscribe").forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var input = form.querySelector("input[type=email]");
    if (!input.value) return;
    track("generate_lead", { currency: "UAH", value: 150 });
    form.querySelector(".row").classList.add("d-none");
    form.querySelector(".submit-success").classList.remove("d-none");
  });
});

document.querySelectorAll("a[data-track]").forEach(function (a) {
  a.addEventListener("click", function () {
    track("click_external", { link_url: a.href });
  });
});
