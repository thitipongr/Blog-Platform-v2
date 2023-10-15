const searchInput = location.search.slice(12).replaceAll("%20", " ");

const filterCategory = (value) => {
  fetch("../mock/blog-data.json")
    .then((response) => response.json())
    .then((getData) => {
      let setHtml = "";
      if (value !== "") {
        getData.blogs.map((getDatas_data) => {
          if (
            getDatas_data.title.toLowerCase().includes(value.toLowerCase()) ||
            getDatas_data.content.toLowerCase().includes(value.toLowerCase()) ||
            getDatas_data.category.toLowerCase().includes(value.toLowerCase())
          ) {
            setHtml += `
              <div class="popular-blogs-list-item">
                <div class="img">
                  <img
                    src="${getDatas_data.blog_cover}?auto=compress&cs=tinysrgb&w=2560"
                    alt="popular-blog-list-img"
                  />
                </div>
                <div class="title">
                  <h3>${getDatas_data.title}</h3>
                  <i 
                    class="fa-solid fa-up-right-from-square" 
                    onclick="location.href = 'blog-view.html?id=${getDatas_data.id}';"
                  ></i>
                </div>
                <div class="content">
                  <p>
                  ${getDatas_data.content}
                  </p>
                </div>
                <div class="category-view">
                  <div class="category-list">
                    <div 
                      class="category-item" 
                      onclick="location.href = 'category-view.html?category=${getDatas_data.category}'"
                      >${getDatas_data.category}
                    </div>
                  </div>
                  <div class="view">${getDatas_data.views} views</div>
                </div>
              </div>
            `;
          }
        });
      } else {
        getData.blogs.map((getDatas_data) => {
          setHtml += `
            <div class="popular-blogs-list-item">
              <div class="img">
                <img
                  src="${getDatas_data.blog_cover}?auto=compress&cs=tinysrgb&w=2560"
                  alt="popular-blog-list-img"
                />
              </div>
              <div class="title">
                <h3>${getDatas_data.title}</h3>
                <i 
                  class="fa-solid fa-up-right-from-square" 
                  onclick="location.href = 'blog-view.html?id=${getDatas_data.id}';"
                ></i>
              </div>
              <div class="content">
                <p>
                ${getDatas_data.content}
                </p>
              </div>
              <div class="category-view">
                <div class="category-list">
                  <div 
                    class="category-item" 
                    onclick="location.href = 'category-view.html?category=${getDatas_data.category}'">
                    ${getDatas_data.category}
                  </div>
                </div>
                <div class="view">${getDatas_data.views} views</div>
              </div>
            </div>
          `;
        });
      }

      return setHtml;
    })
    .then((setHtml) => {
      document.getElementById("popular-blogs-list").innerHTML = setHtml;
    })
    .catch((err) => console.log("error:", err));
};

document.getElementById("search-page-box").value = searchInput;
filterCategory(searchInput || "");
