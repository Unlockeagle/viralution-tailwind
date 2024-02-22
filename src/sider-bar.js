export { menuBurgers };

const menuBurgers = document.querySelectorAll("#toggleBtn");

menuBurgers.forEach((toggleBtn) => {
  toggleBtn.addEventListener("click", () => {
    const sideBar = document.querySelectorAll("#sideBar");
    sideBar.forEach((sideBar) => {
      sideBar.classList.toggle("hidden");
    });
  });
});
