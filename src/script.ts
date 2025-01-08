const createPara = () => {
  const para = document.createElement("p");
  para.textContent = "Hello odin";
  para.style.cssText = "font-weight:bold;font-size:40px";
  document.body.appendChild(para);
};
export default createPara;
