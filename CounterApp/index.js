const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const startCount = Number(counter.innerHTML);
    const incr = target / 100;

    if (startCount < target) {
      counter.innerHTML = `${Math.round(startCount + incr)}`;
      setTimeout(updateCount, 5);
    } else {
      counter.innerHTML = target;
    }
  };

  updateCount();
});
