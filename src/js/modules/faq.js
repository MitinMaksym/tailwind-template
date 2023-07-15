const faq = () => {
  const container = document.querySelector(".faq");

  if(!container) {
    return;
  }


  const rows = Array.from(container.querySelectorAll(".row"));
  const setActive = (row) => {
    const current = rows.find(r => r.classList.contains('active'));
    if(current) {
      current.classList.remove("active");
      current.querySelector(".icon").style.transform = "rotate(0deg)";
      current.querySelector(".slide").classList.add("hidden");
    }

    if(row !== current) {
      row.classList.add("active");
      row.querySelector(".icon").style.transform = "rotate(180deg)";
      row.querySelector(".slide").classList.remove("hidden");
    }

  }

  rows.forEach(r => {
    r.querySelector(".opener").addEventListener('click', () => {
      setActive(r);
    })
  })
}

export default faq;