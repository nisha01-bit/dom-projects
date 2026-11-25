/*let btn = document.querySelector("button");
let body = document.querySelector("body");
let para = document.getElementById("para");

btn.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  para.style.textAlign = "center";
  para.style.fontSize = "2rem";
  para.style.color = "green";
});
*/
let form = document.querySelector("form");
let main = document.querySelector("main");
//let card = document.querySelector("#card");
//let naam = document.querySelector("#naam");
//let email = document.querySelector("#email");
//let pass = document.querySelector("#pass");
//let url = document.querySelector("#img")
let cardArr = [
  {
    name: "Ritik",
    email: "Ritik@email.com",
    age: 24,
    imageUrl:
      "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
  },
  {
    name: "Suyash",
    email: "Suyash@email.com",
    age: 24,
    imageUrl:
      "https://i.pinimg.com/474x/78/56/a2/7856a273dd967deb3dde58339edfde1a.jpg",
  },
  {
    name: "Ravi",
    email: "Ravi@email.com",
    age: 24,
    imageUrl:
      "https://i.pinimg.com/1200x/88/73/fe/8873feebfb5a6a925b89313653542b18.jpg",
  },
  {
    name: "Vedant",
    email: "Vedant@email.com",
    age: 24,
    imageUrl:
      "https://i.pinimg.com/736x/4c/5d/20/4c5d2021f9db198540157824564e389d.jpg",
  },
];
cardArr.forEach((val) => {
  main.innerHTML += `
        <div class="user-card">
            <div class="img">
                <img src="${val.imageUrl}" alt="">
            </div>
            <div class="text">
                <h1 class="naam">${val.name}</h1>
                <p class="email">${val.email}</p>
            </div>
            <div class="btns">
                <button id="edit">Edit</button>
                <button id="del">Delete</button>
            </div>
        </div>
    `;
});
/*let renderCard = () => {
  cards.innerHTML  
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let naam = form[0].value;
  let email = form[1].value;
  let password = form[2].value;
  let url = form[3].value;

  if (!naam || !email || !pass || !url) {
    alert("please fill all details!");
    return;
  }
  cardArr.forEach((val) => {

  });
});
cardArr.push(obj);
*/
