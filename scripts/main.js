const myImage = document.querySelector("img"); //const关键字用于声明一个只读的常量不可被修改 querySelector的作用类似于元素切片，选出img属性的元素

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/01.jpg") {
    myImage.setAttribute("src", "images/02.jpg");
  } else {
    myImage.setAttribute("src", "images/01.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("你是谁？.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = function () {
    setUserName();
  };
  
    
