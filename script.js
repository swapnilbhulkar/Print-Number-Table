let btn = document.querySelector("#btn");

let get_value = document.querySelector("#input_value");

let print_err = document.querySelector("#print_error");

let boxes = document.querySelectorAll(".box");

const print_table = () => {
  let num = get_value.value;
  if (num < 1) {
    print_err.innerText = "Enter valid num";
  } else {
    print_err.innerText = "";
    let count = 1;
    boxes.forEach((box) => {
      //   box.innerText = num + "  X  " + count + "  =  " + num * count;
      box.innerHTML = `<span style="color: rgb(33,207,255);">${num}</span>  X  <span style="color: rgb(255,177,0);">${count}</span>  =  ${num * count
        }`;
      box.style.border = "1.5px solid rgba(3, 102, 214, 0.3)";
      box.style.backgroundColor = "rgb(245, 250, 255)";
      count++;
    });
  }
};

btn.addEventListener("click", print_table);

get_value.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    print_table();
  }
});
