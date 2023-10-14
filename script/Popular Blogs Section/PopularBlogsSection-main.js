fetch("mock/blog-data.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("error"));

const headLine = "Lorem ipsum dolor sit amet consectetur";
const blogName = "Lorem ipsum dolor sit amet consectetur";
const content =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, quidem non quam exercitationem odio autem voluptas voluptatem incidunt laboriosam facilis";

const setHtml = `
<div class="container">
  <div class="hero-con">
    <h1>${headLine}</h1>
    <div class="hero-img">
      <img
        src="https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&w=2560"
        alt="hero-img"
      />
    </div>
    <div class="hero-info-con">
      <div class="hero-info-article">
        <h3>${blogName}</h3>
        <i class="fa-solid fa-up-right-from-square"></i>
      </div>
      <div class="hero-info-detail-con">
        <div class="hero-info-detail-maindetail-con">
          <div class="hero-info-detail-maindetail">
            <p>
              ${content}
            </p>
          </div>
        </div>
        <div class="hero-info-detail-subdetail-con">
          <div class="hero-info-writer-con">
            <div class="hero-info-writer-detail-con">
              <div class="hero-info-writer-detail-label">
                Written by
              </div>
              <div class="hero-info-writer-detail-info-con">
                <div class="hero-info-writer-detail-info-pic">
                  <img
                    src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=25"
                    alt="hero-writer-img"
                  />
                </div>
                <div class="hero-info-writer-detail-info-name">
                  Lorem ipsum
                </div>
              </div>
            </div>
          </div>
          <div class="hero-info-publihed-con">
            <div class="hero-info-publihed-lable">Published on</div>
            <div class="hero-info-publihed-date">09 October 2023</div>
          </div>
        </div>
        <div class="hero-info-detail-contegory-con">
          <div class="hero-info-contegory-label">Contegory</div>
          <div class="hero-info-contegory-info-con">
            <div class="hero-info-contegory-info">Lorem</div>
            <div class="hero-info-contegory-info">Ipsum</div>
            <div class="hero-info-contegory-info">Dolor</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
document.getElementById("section-hero").innerHTML = setHtml;
