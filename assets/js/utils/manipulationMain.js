const main = document.querySelector("#main");
export function clear() {
  main.innerHTML = "";
}
export function addClass(active=false) {
const mainList = document.querySelector(".list");
if(active != false) {
    main.classList.add('list')
}
else{
    main.classList.remove('list')
}

}
export function addChildren(fun) {
    main.appendChild(fun);
  }
  