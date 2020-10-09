let yourMoney = document.querySelector(".money");
let money = 0;

document.querySelector(".btn").onclick = function() {
      money += 1;

      document.querySelector(".money").innerHTML = money + "₽";
}

document.querySelector("#discharge").onclick = function() {
      money = 0;

      document.querySelector(".money").innerHTML = money + "₽";
}