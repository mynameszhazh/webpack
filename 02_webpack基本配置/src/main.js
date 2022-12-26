import "./font/iconfont.css";
import "./css/index.css";
import "./css/test.css";
import "./css/componse.less";

function generatorElement() {
  const div = document.createElement("div");
  div.innerHTML = ["create", "erleet"].join();
  div.className = "content size";

  // 图片
  const img = new Image();
  img.src = require("./img/person.webp").default;
  div.appendChild(img);

  // 背景图片盒子
  const bgDiv = document.createElement("div");
  bgDiv.style.width = 200 + "px";
  bgDiv.style.height = 200 + "px";
  bgDiv.className = "bg-img";
  bgDiv.style.backgroundColor = "red";
  div.appendChild(bgDiv);

  // 字体图标
  const iel = document.createElement("i");
  iel.className = "iconfont icon-car xjh_icon";
  div.appendChild(iel);

  document.body.appendChild(div);
}

generatorElement();

export const sum = () => {
  return "123";
};

console.log(sum(), "sum");
