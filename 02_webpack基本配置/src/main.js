import "../css/index.css";
import "../css/componse.less";

function generatorElement() {
  const div = document.createElement("div");
  div.innerHTML = ["create", "erleet"].join();
  div.className = "content size";
  document.body.appendChild(div);
}

generatorElement();

export const sum = () => {
  return "123";
};

console.log(sum(), "sum");
