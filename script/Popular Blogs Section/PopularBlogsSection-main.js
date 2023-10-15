fetch("mock/blog-data.json")
  .then((response) => response.json())
  .then((data) => data.blogs.sort(compareByView))
  .then((sortedData) => sortedData.slice(0, 10))
  .then((popularBlogs) => {
    let setHtml = "";
    popularBlogs.map((popularBlogs_data) => {
      setHtml += `<div class="popular-blogs-list-item">
      <div class="img">
        <img
          src="${popularBlogs_data.blog_cover}?auto=compress&cs=tinysrgb&w=2560"
          alt="popular-blog-list-img"
        />
      </div>
      <div class="title">
        <h3>${popularBlogs_data.title}</h3>
        <i 
          class="fa-solid fa-up-right-from-square" 
          onclick="location.href = 'pages/blog-view.html?id=${popularBlogs_data.id}';"
        ></i>
      </div>
      <div class="content">
        <p>
        ${popularBlogs_data.content}
        </p>
      </div>
      <div class="category-view">
        <div class="category-list">
          <div class="category-item">${popularBlogs_data.category}</div>
        </div>
        <div class="view">${popularBlogs_data.views} views</div>
      </div>
    </div>`;
    });
    return setHtml;
  })
  .then((setHtml) => {
    document.getElementById("popular-blogs-list").innerHTML += setHtml;
  })
  .catch((err) => console.log("error:", err));

const compareByView = (a, b) => {
  return b.views - a.views;
};
