document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".js-wa").forEach((link) => {
  link.addEventListener("click", () => {
    try {
      const key = "darkscale_cta_clicks";
      const count = Number(localStorage.getItem(key) || "0") + 1;
      localStorage.setItem(key, String(count));
    } catch (_) {}
  });
});

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll("details").forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});
