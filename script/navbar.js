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

const intToString = (num) => {
  num = num.toString().replace(/[^0-9.]/g, "");
  if (num < 1000) {
    return num;
  }
  let si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break;
    }
  }
  return (
    (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
    si[index].s
  );
};

fetch("../mock/statistical-data.json")
  .then((response) => response.json())
  .then((getData) => {
    const setHtml_blogs = `${intToString(
      getData.statistics.totalBlogs
    )} Articles`;
    const setHtml_views = `${intToString(
      getData.statistics.totalViews
    )} Total Views`;

    return { setHtml_blogs, setHtml_views };
  })
  .then((setHtml) => {
    document.getElementById("statistical-blogs").innerHTML =
      setHtml.setHtml_blogs;
    document.getElementById("statistical-views").innerHTML =
      setHtml.setHtml_views;
  })
  .catch((err) => console.log("error:", err));

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    document.getElementById("moon").style.display = "none";
    document.getElementById("sun").style.display = "flex";
  } else {
    setTheme("theme-dark");
    document.getElementById("moon").style.display = "flex";
    document.getElementById("sun").style.display = "none";
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("moon").style.display = "flex";
    document.getElementById("sun").style.display = "none";
  } else {
    setTheme("theme-light");
    document.getElementById("moon").style.display = "none";
    document.getElementById("sun").style.display = "flex";
  }
})();
