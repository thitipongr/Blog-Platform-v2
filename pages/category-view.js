const category = location.search.slice(10).replaceAll("%20", " ");

fetch("../mock/blog-data.json")
  .then((response) => response.json())
  .then((getData) => {
    let findData = removeDuplicates(getData.blogs, "category");
    return findData;
  })
  .then((findData) => {
    return findData.sort(compareByCategory);
  })
  .then((sortedData) => {
    let setHtml = "";
    sortedData.forEach((sortedData_data) => {
      if (sortedData_data.category === category) {
        setHtml += `<option value="${sortedData_data.category}" selected="selected">${sortedData_data.category}</option>`;
      } else {
        setHtml += `<option value="${sortedData_data.category}">${sortedData_data.category}</option>`;
      }
    });
    return setHtml;
  })
  .then((setHtml) => {
    document.getElementById("category").innerHTML += setHtml;
  })
  .catch((err) => console.log("error:", err));

const removeDuplicates = (array, property) => {
  const uniqueArray = [];
  const seen = new Set();

  array.filter((item) => {
    const itemValue = item[property];
    if (!seen.has(itemValue)) {
      seen.add(itemValue);
      uniqueArray.push(item);
    }
  });

  return uniqueArray;
};

const compareByCategory = (a, b) => {
  return a.category.localeCompare(b.category);
};

const filterCategory = (value) => {
  fetch("../mock/blog-data.json")
    .then((response) => response.json())
    .then((getData) => {
      let setHtml = "";
      if (value !== "All") {
        getData.blogs.map((getDatas_data) => {
          if (getDatas_data.category === value) {
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
                    <div class="category-item" onclick="location.href = 'category-view.html?category=${getDatas_data.category}'">${getDatas_data.category}</div>
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
                  <div class="category-item" onclick="location.href = 'category-view.html?category=${getDatas_data.category}'">${getDatas_data.category}</div>
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
      document.getElementById("category-blog-list-con").innerHTML = setHtml;
    })
    .catch((err) => console.log("error:", err));
};

filterCategory(category || "All");
