const calculateTemp = () => {
  const val = document.getElementById("val").value;
  const tempSelected = document.getElementById("temps");
  const choice = temps.options[tempSelected.selectedIndex].value;

  const ctf = (num) => {
    return Math.round((num * 9) / 5 + 32);
  };

  const ftc = (num) => {
    return Math.round(((num - 32) * 5) / 9);
  };

  if (choice == "cel") {
    let result = ctf(val);
    res.innerHTML = `= ${result} °Fahrenheit`;
  } else {
    let result = ftc(val);
    res.innerHTML = `= ${result} °Celcius`;
  }
};
