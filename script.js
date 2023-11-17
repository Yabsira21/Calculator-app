"use strict";

let current_toggled_btn = 0;
let theme1 = document.querySelector("#theme-1");
let theme2 = document.querySelector("#theme-2");
let theme3 = document.querySelector("#theme-3");

let toggle_container = document.querySelector(".container");
let screen = document.querySelector(".screen");
let grid = document.querySelector(".grid");
let keys = document.querySelectorAll(".front");
let keys_bg = document.querySelectorAll(".pushable");
let numbers = document.querySelectorAll(".numbers");

let del_keys = document.querySelectorAll(".del_clr");
let del_keys_bg = document.querySelectorAll(".del_clr_bg");

let equ_key = document.querySelector("#sp_key");
let equ_key_bg = document.querySelector("#sp_key_bg");

let toggle_btns = document.querySelectorAll(".toggle-btn");

let checknumAndAddScreen = function (e) {
  let isnum = /^\d+$/.test(e.key);
  if (isnum) {
    screen.value += Number(e.key);
  } else if (e.key == ".") {
    screen.value += e.key;
  }
};
// theme = {
//   0: {
//     backgroundColor: "hsl(222, 26%, 31%)",
//   },
// };
let themeOne = function () {
  if (current_toggled_btn != 0) {
    toggle_btns[current_toggled_btn].classList.toggle("hidden");
    toggle_btns[0].classList.toggle("hidden");
    current_toggled_btn = 0;
    document.querySelector("body").style.backgroundColor = "hsl(222, 26%, 31%)";
    document.querySelector("section").style.color = "white";
    toggle_container.style.backgroundColor = "hsl(223, 31%, 20%)";
    screen.style.backgroundColor = "hsl(223, 31%, 20%)";
    screen.style.color = "white";
    grid.style.backgroundColor = "hsl(223, 31%, 20%)";
    for (let i = 0; i < keys.length; i++) {
      keys[i].style.backgroundColor = "rgb(234, 227, 219)";
      keys_bg[i].style.backgroundColor = "#b3a397";
      keys[i].style.color = "hsl(221, 14%, 31%)";
    }
    for (let i = 0; i < del_keys.length; i++) {
      del_keys[i].style.backgroundColor = "hsl(225, 21%, 49%)";
      del_keys_bg[i].style.backgroundColor = "hsl(224, 28%, 35%)";
      del_keys[i].style.color = "white";
    }
    equ_key.style.backgroundColor = "hsl(6, 63%, 50%)";
    equ_key_bg.style.backgroundColor = "hsl(6, 70%, 34%)";
    equ_key.style.color = "white";
  }
};

let themeTwo = function () {
  if (current_toggled_btn != 1) {
    toggle_btns[current_toggled_btn].classList.toggle("hidden");
    toggle_btns[1].classList.toggle("hidden");
    current_toggled_btn = 1;
    document.querySelector("body").style.backgroundColor = "hsl(0, 0%, 90%)";
    document.querySelector("section").style.color = "hsl(60, 10%, 19%)";
    toggle_container.style.backgroundColor = "hsl(0, 5%, 81%)";
    screen.style.backgroundColor = "hsl(0, 0%, 93%)";
    screen.style.color = "hsl(60, 10%, 19%)";
    grid.style.backgroundColor = "hsl(0, 5%, 81%)";
    for (let i = 0; i < keys.length; i++) {
      keys[i].style.backgroundColor = "hsl(45, 7%, 89%)";
      keys_bg[i].style.backgroundColor = "hsl(35, 11%, 61%)";
      keys[i].style.color = "hsl(221, 14%, 31%)";
    }
    for (let i = 0; i < del_keys.length; i++) {
      del_keys[i].style.backgroundColor = "hsl(185, 42%, 37%)";
      del_keys_bg[i].style.backgroundColor = "hsl(185, 58%, 25%)";
      del_keys[i].style.color = "white";
    }
    equ_key.style.backgroundColor = "hsl(25, 98%, 40%)";
    equ_key_bg.style.backgroundColor = "hsl(25, 99%, 27%)";
    equ_key.style.color = "white";
  }
};

let themeThree = function () {
  if (current_toggled_btn != 2) {
    toggle_btns[current_toggled_btn].classList.toggle("hidden");
    toggle_btns[2].classList.toggle("hidden");
    current_toggled_btn = 2;
    document.querySelector("body").style.backgroundColor = "hsl(268, 75%, 9%)";
    document.querySelector("section").style.color = "hsl(52, 100%, 62%)";
    toggle_container.style.backgroundColor = "hsl(268, 71%, 12%)";
    screen.style.backgroundColor = "hsl(268, 71%, 12%)";
    screen.style.color = "hsl(52, 100%, 62%)";
    grid.style.backgroundColor = "hsl(268, 71%, 12%)";
    for (let i = 0; i < keys.length; i++) {
      keys[i].style.backgroundColor = "hsl(281, 89%, 26%)";
      keys_bg[i].style.backgroundColor = "hsl(285, 91%, 52%)";
      keys[i].style.color = "hsl(52, 100%, 62%)";
    }
    for (let i = 0; i < del_keys.length; i++) {
      del_keys[i].style.backgroundColor = "hsl(268, 47%, 21%)";
      del_keys_bg[i].style.backgroundColor = "hsl(290, 70%, 36%)";
      del_keys[i].style.color = "white";
    }
    equ_key.style.backgroundColor = "hsl(176, 100%, 44%)";
    equ_key_bg.style.backgroundColor = "hsl(177, 92%, 70%)";
    equ_key.style.color = "hsl(198, 20%, 13%)";
  }
};

// function ThemeChanger(theme) {}
theme1.addEventListener("click", themeOne);
theme2.addEventListener("click", themeTwo);
theme3.addEventListener("click", themeThree);

document.querySelector("body"),
  addEventListener("keypress", checknumAndAddScreen);

//keys adding to the screen

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    screen.value += Number(numbers[i].textContent);
  });
}

let point = document.querySelector(".pt");
point.addEventListener("click", function () {
  screen.value += ".";
});

// calculation part
let equal = document.querySelector("#sp_key");
let stack = [];
let NoOfNums = 0;
let operations = document.querySelectorAll(".op");
let ops = {
  "+": function (a, b) {
    return Number(a) + Number(b);
  },
  "-": function (a, b) {
    return Number(a) - Number(b);
  },
  "/": function (a, b) {
    return Number(a) / Number(b);
  },
  x: function (a, b) {
    return Number(a) * Number(b);
  },
};

for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", function () {
    if (stack.length >= 2) {
      let res = ops[stack[1]](stack[0], Number(screen.value));
      stack[0] = res;
      stack[1] = operations[i].textContent;
    }
    stack.push(Number(screen.value), operations[i].textContent);
    screen.value = "";
  });
}

//equal part
equal.addEventListener("click", function () {
  if (stack.length > 0) {
    let res = ops[stack[1]](stack[0], Number(screen.value));
    screen.value = res;
    stack = [];
  }
});

//deleting part
let deleteNum = document.querySelector(".delete");

deleteNum.addEventListener("click", function () {
  screen.value = String(screen.value).slice(0, -1);
});

//reseting part
let resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", function () {
  stack = [];
  screen.value = "";
});
