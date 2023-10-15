const id = location.search.slice(4);

fetch("../mock/blog-data.json")
  .then((response) => response.json())
  .then((getData) => {
    const findData = getData.blogs.find((getData_data) => {
      return getData_data.id == id;
    });
    return findData;
  })
  .then((findData) => {
    const readingTime = Math.floor(findData.content.split(" ").length / 200);
    const date = new Date(findData.post_date);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    const postDate = `${monthName} ${day.toString().padStart(2, "0")}, ${year}`;

    return (setHtml = `
    <section class="blog-view">
      <div class="container">
        <div class="blog-view-con">
          <div class="blog-view-info-con">
            <div class="blog-view-info-cover">
              <img
                src="${findData.blog_cover}?auto=compress&cs=tinysrgb&w=2560"
                alt="cover-img"
              />
              <h1>${findData.title}</h1>
            </div>
            <div class="blog-view-info-detail-con">
              <div class="blog-view-info-detail-intro-con">
                <div class="blog-view-info-detail-intro-text-con">
                  <p>
                  ${findData.intro || ""}
                  </p>
                </div>
                <div class="blog-view-info-detail-intro-writer-con">
                  <div class="blog-view-info-detail-intro-writer-pic">
                    <img
                      src="${
                        findData.author_cover
                      }?auto=compress&cs=tinysrgb&w=42"
                      alt="writer-img"
                    />
                  </div>
                  <div class="blog-view-info-detail-intro-writer-content-con">
                    <div class="blog-view-info-detail-intro-writer-name-con">
                      <div
                        class="blog-view-info-detail-intro-writer-name-text"
                      >
                        <a href="#">${findData.author}</a>·
                      </div>
                      <div
                        class="blog-view-info-detail-intro-writer-name-state"
                      >
                        <a href="#">Follow</a>
                      </div>
                    </div>
                    <div
                      class="blog-view-info-detail-intro-writer-published-con"
                    >
                      <div
                        class="blog-view-info-detail-intro-writer-published-group-con"
                      >
                        <div
                          class="blog-view-info-detail-intro-writer-published-label"
                        >
                          Published in
                        </div>
                        <div
                          class="blog-view-info-detail-intro-writer-published-group"
                        >
                          <a href="#">Thitipong</a>
                          <div
                            class="blog-view-info-detail-intro-writer-published-group-dot"
                          >
                            ·
                          </div>
                        </div>
                      </div>
                      <div
                        class="blog-view-info-detail-intro-writer-published-date-con"
                      >
                        <div
                          class="blog-view-info-detail-intro-writer-published-readtime"
                        >
                          ${readingTime < 1 ? "<1" : readingTime} min read
                        </div>
                        ·
                        <div
                          class="blog-view-info-detail-intro-writer-published-date"
                        >
                        ${postDate}
                        </div>
                      </div>
                      <div
                        class="blog-view-info-detail-intro-writer-published-group-dot"
                      >
                        ·
                      </div>
                      ${intToString(findData.views)} views
                    </div>
                  </div>
                </div>
              </div>
              <div class="blog-view-info-detail-content-con">
                ${findData.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="blog-view-category">
      <div class="container">
        <div class="blog-view-category-con">
          <div class="blog-view-category-info">${findData.category}</div>
        </div>
      </div>
    </section>
    <section class="blog-view-writer">
      <div class="container">
        <div class="blog-view-writer-con">
          <div class="blog-view-writer-action-con">
            <div class="blog-view-writer-pic">
              <img
                src="${findData.author_cover}?auto=compress&cs=tinysrgb&w=62"
                alt="writer-img"
              />
            </div>
            <div class="blog-view-writer-action">
              <button class="blog-view-writer-action-btn">Follow</button>
            </div>
          </div>
          <div class="blog-view-writer-name">
            <h2>Written by</h2>
            <h2>${findData.author}</h2>
          </div>
          <div class="blog-view-writer-group">
            <div class="blog-view-writer-group-follow">
              <a href="#">999 Followers</a>
            </div>
            <div class="blog-view-writer-group-content">
              <a href="#">Written for Thitipong</a>
            </div>
          </div>
          <div class="blog-view-writer-intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nam!
            Laborum.
          </div>
        </div>
      </div>
    </section>
    <section class="blog-view-comment">
      <div class="container">
        <div class="blog-view-comment-list-con">
          <div class="blog-view-comment-item">
            <div class="blog-view-comment-item-label-con">
              <div class="blog-view-comment-item-label-img">
                <img
                  src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=42"
                  alt="commenter-img"
                />
              </div>
              <div class="blog-view-comment-item-label-name-con">
                <div class="blog-view-comment-item-label-name">
                  Lorem ipsum
                </div>
                <div class="blog-view-comment-item-label-date">
                  Oct 09, 2023
                </div>
              </div>
            </div>
            <div class="blog-view-comment-item-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              explicabo repudiandae maiores cupiditate voluptates facilis?
            </div>
            <div class="blog-view-comment-item-action"></div>
          </div>
          <div class="blog-view-comment-item">
            <div class="blog-view-comment-item-label-con">
              <div class="blog-view-comment-item-label-img">
                <img
                  src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=42"
                  alt="commenter-img"
                />
              </div>
              <div class="blog-view-comment-item-label-name-con">
                <div class="blog-view-comment-item-label-name">
                  Lorem ipsum
                </div>
                <div class="blog-view-comment-item-label-date">
                  Oct 09, 2023
                </div>
              </div>
            </div>
            <div class="blog-view-comment-item-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              explicabo repudiandae maiores cupiditate voluptates facilis?
            </div>
            <div class="blog-view-comment-item-action"></div>
          </div>
          <div class="blog-view-comment-item">
            <div class="blog-view-comment-item-label-con">
              <div class="blog-view-comment-item-label-img">
                <img
                  src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=42"
                  alt="commenter-img"
                />
              </div>
              <div class="blog-view-comment-item-label-name-con">
                <div class="blog-view-comment-item-label-name">
                  Lorem ipsum
                </div>
                <div class="blog-view-comment-item-label-date">
                  Oct 09, 2023
                </div>
              </div>
            </div>
            <div class="blog-view-comment-item-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              explicabo repudiandae maiores cupiditate voluptates facilis?
            </div>
            <div class="blog-view-comment-item-action"></div>
          </div>
        </div>
        <div class="blog-view-comment-box-con">
          <div class="blog-view-comment-box-img">
            <img
              src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=42"
              alt="commenter-img"
            />
          </div>
          <div class="blog-view-comment-box-input">
            <input type="text" class="comment-box" /><i
              class="fa-solid fa-paper-plane"
            ></i>
          </div>
        </div>
      </div>
    </section>`);
  })
  .then((setHtml) => {
    document.getElementById("blog-view-main").innerHTML = setHtml;
  })
  .catch((err) => console.log("error:", err));
