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

function getValue() {
      let theme = document.getElementById("themeCostomize").value;
      
      console.log(theme);

      if (theme == "green")
      {
            document.body.style.background = "#4bdf11";
      }

      if (theme == "orange")
      {
            document.body.style.background = "#ff7200";
      }
}