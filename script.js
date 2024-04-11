//counter to select card
var counter = 0;

//user data
var userStorage = localStorage.setItem(
  "data",
  JSON.stringify({
    name: "hassan",
    email: "hassan@email.com",
    phone: "01553880080",
  })
);

//plans data
var plans_type = 0;
var planStorage = localStorage.setItem(
  "plan",
  JSON.stringify({ name: "Arcade", type: "mo", price: 9 })
);
const plans_data_month = [
  {
    name: "Arcade",
    type: "mo",
    price: 9,
  },
  {
    name: "Advanced",
    type: "mo",
    price: 12,
  },
  {
    name: "Pro",
    type: "mo",
    price: 15,
  },
];
const plans_data_years = [
  {
    name: "Arcade",
    type: "yr",
    price: 90,
  },
  {
    name: "Advanced",
    type: "yr",
    price: 120,
  },
  {
    name: "Pro",
    type: "yr",
    price: 150,
  },
];

//pick add ons
var pick_addStorage = localStorage.setItem("add", []);

//all slider
const sliders = document.querySelectorAll(".slider");
// menue  steper
const steps = document.querySelectorAll(".step");

const btns = document.querySelector(".btns");
//next button
const next_btn = document.getElementById("btn-next");
//previours button
const back_btn = document.getElementById("btn-back");

//on clicke on next button , chanege slide
next_btn.addEventListener("click", () => {
  removeClasses();
  counter++;
  if (counter > 0) {
    back_btn.style.visibility = "visible";
  } else {
    back_btn.style.visibility = "hidden";
  }
  if (counter == 3) {
    next_btn.style.backgroundColor = "var(--Purplish-blue)";
    next_btn.innerText = "Conform";
  } else {
    next_btn.style.backgroundColor = "var(--Marine-blue))";
    next_btn.innerText = "Next Step";
  }

  sliders[counter].classList.add("active");
  if (counter == 4) {
    btns.style.display = "none";
    steps[3].classList.add("active");
  } else {
    steps[counter].classList.add("active");
  }
});

//on clicke on back button , chanege slide
back_btn.addEventListener("click", (e) => {
  removeClasses();
  counter = counter - 1;
  if (counter > 0) {
    back_btn.style.visibility = "visible";
  } else {
    back_btn.style.visibility = "hidden";
  }
  if (counter == 3) {
    next_btn.style.backgroundColor = "var(--Purplish-blue)";
    next_btn.innerText = "Conform";
  } else {
    next_btn.style.backgroundColor = "var(--Marine-blue)";
    next_btn.innerText = "Next Step";
  }
  sliders[counter].classList.add("active");
  steps[counter].classList.add("active");
});

function removeClasses() {
  sliders.forEach((e) => {
    e.classList.remove("active");
  });
  steps.forEach((e) => {
    e.classList.remove("active");
  });
}

// Step 2 functionality
const plans = document.querySelectorAll(".item-card");
const descriptions_divs = document.querySelectorAll(".description");
var checkbox = document.querySelector("input[name=checkbox]");
plans.forEach((e) =>
  e.addEventListener("click", () => {
    plans.forEach((e) => {
      e.classList.remove("selected");
    });
    e.classList.add("selected");
    slideTwo(e.getAttribute("data-card"));
  })
);
checkbox.addEventListener("change", function () {
  plans.forEach((e) => {
    e.classList.remove("selected");
  });
  plans[0].classList.add("selected");

  if (this.checked) {
    descriptions_divs.forEach((e) => {
      if (e.classList.contains("month")) {
        e.style.display = "none";
      } else {
        e.style.display = "block";
      }
    });
    plans_type = 1;
    slideTwo(0);
  } else {
    descriptions_divs.forEach((e) => {
      if (e.classList.contains("month")) {
        e.style.display = "block";
      } else {
        e.style.display = "none";
      }
    });
    plans_type = 0;
    slideTwo(0);
  }
});

// Pick Add-ons
var input_pick_add = document.querySelectorAll(
  ".card-checkbox input[type=checkbox]"
);
var pick_add = document.querySelectorAll(".pick-add-item-card");
input_pick_add.forEach((e) => {
  e.addEventListener("change", () => {
    if (e.checked) {
      e.parentElement.parentElement.classList.add("selected");
    } else {
      e.parentElement.parentElement.classList.remove("selected");
    }
  });
});

//  add data to localStorage

function slideOne() {}
function slideTwo(index) {
  if (plans_type == 0) {
    localStorage.setItem("plan", JSON.stringify(plans_data_month[index]));
  } else {
    localStorage.setItem("plan", JSON.stringify(plans_data_years[index]));
  }

  console.log(JSON.parse(localStorage.getItem("plan")));
}

function slideTwo(index) {
  if (plans_type == 0) {
    localStorage.setItem("plan", JSON.stringify(plans_data_month[index]));
  } else {
    localStorage.setItem("plan", JSON.stringify(plans_data_years[index]));
  }

  console.log(JSON.parse(localStorage.getItem("plan")));
}
