const createPara = () => {
  const para = document.createElement("p");
  para.textContent = "Hello odin";
  para.classList.add("text-red-600", "font-bold", "text-4xl","dark:text-amber-400");
  document.body.appendChild(para);
};
export default createPara;
