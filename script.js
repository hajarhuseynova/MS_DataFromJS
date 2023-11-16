const container = document.querySelector(".container");
var obj = {
  name: "Victoria Secret",
  imageLogo: "./assets/Logo.svg",
  image3: "./assets/image 3.png",
  image4: "./assets/image 4.png",
  image5: "./assets/image 5.png",
  mainImage: "./assets/image 6.png",
  otto: "OTTO",
  mm: "WEIMAR - 40MM",
  imageStar: "./assets/iwwa_star.svg",
  amount: "2.299.000",
  special: "đ",
  desc: "Thiết kế Bauhaus tối giản của Weimar Otto được Curnon thể hiện trênnền của sự kết hợp màu sắc tinh tế và hiện đại Cặp dây da màu Sandcùng chi tiết kim xanh chính là điểm nhấn giúp bạn kết hợp hoàn hảovới bất kì bộ trang phục nào",
  svg: "./assets/btn.svg",
  button1: "THÊM VÀO GIỎ",
  button2: "MUA NGAY",
};

console.log(obj);

let html = `

<img src="${obj.imageLogo}" id="logo" alt="Logo" />
<div class="general">
  <div class="left">
    <div class="left_left">
      <img src="${obj.image3}" alt="Images" class="images" />
      <img src="${obj.image4}" alt="Images" class="images" />
      <img src="${obj.image5}" alt="Images" class="images" />
    </div>
    <img src="${obj.mainImage}" alt="MainImage" class="mainImage" />
  </div>
  <div class="right">
    <p id="otto">${obj.otto}</p>
    <p id="mm">${obj.mm}</p>
    <div class="stars">
      <img src="${obj.imageStar}" alt="Star" class="star" />
      <img src="${obj.imageStar}" alt="Star" class="star" />
      <img src="${obj.imageStar}" alt="Star" class="star" />
      <img src="${obj.imageStar}" alt="Star" class="star" />
      <img src="${obj.imageStar}" alt="Star" class="star" />
    </div>
    <div id="total">
      <p id="price">Price</p>
      <span id="amount">${obj.amount} </span>
      <p id="special">${obj.special}</p>
    </div>
    <p id="desc">
    ${obj.desc}
    </p>
    <button id="black">
      <img src="${obj.svg}" id="svg" alt="SVG" />
      <p>${obj.button1}</p>
    </button>
    <button id="white">${obj.button2}</button>
  </div>
</div>
`;
container.insertAdjacentHTML("beforeend", html);
