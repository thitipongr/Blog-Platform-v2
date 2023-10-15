const menuExpand = () => {
  const menuList = document.getElementById("nav-menu");
  if (menuList.className === "menu") {
    menuList.className += " menu-display";
  } else {
    menuList.className = "menu";
  }
};
