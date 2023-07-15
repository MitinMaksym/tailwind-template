const checkbox = () => {
  const checkboxes = Array.from(document.querySelectorAll(".checkbox"));
  if (checkboxes.length === 0) {
    return;
  }

  const toggleCheckState = (chIcon, state) => {
    if (state) {
      chIcon.classList.remove("hidden");
    } else {
      chIcon.classList.add("hidden");
    }
  };

  checkboxes.forEach((ch) => {
    const checkIcon = ch.parentNode.querySelector(".ch-icon");
    ch.addEventListener("change", () => {
      toggleCheckState(checkIcon, ch.checked);
    });
  });
};

export default checkbox;
