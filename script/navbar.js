const menuExpand = () => {
  const menuList = document.getElementById("nav-menu");
  if (menuList.className === "menu") {
    menuList.className += " menu-display";
  } else {
    menuList.className = "menu";
  }
};

const navSearch = (x) => {
  const searchText = document.getElementById("nav-search-box").value;
  x === `pages`
    ? window.open(`search-view.html?searchText=${searchText}`, "_self")
    : window.open(`pages/search-view.html?searchText=${searchText}`, "_self");
};
