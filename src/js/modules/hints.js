const hints = () => {
  const overlay = document.querySelector(".hint-overlay");
  const hintArr = Array.from(document.querySelectorAll(".hint"));

  const onHintClose = () => {
    overlay.classList.add("hidden");
    const currentActiveHint = hintArr.filter(hint => hint.classList.contains("active"))[0];

    if(currentActiveHint) {
      currentActiveHint.classList.remove("active");
      currentActiveHint.style.zIndex = 0;
      currentActiveHint.querySelector(".hint-body").classList.add("hidden")
    }
  }
  const onHintOpen = (hint) => {
    overlay.classList.remove("hidden");
    hint.classList.add("active");
    hint.style.zIndex = 30;
    hint.querySelector(".hint-body").classList.remove("hidden")
  }

  if(hintArr.length > 0) {
    hintArr.map(hint => {
      const hintBody = hint.querySelector(".hint-body");
      const btn = hint.querySelector(".hint-opener");
      btn.addEventListener("click", () => {
        if(hint.classList.contains("active")) {
          onHintClose();
        } else {
          onHintOpen(hint)
        }
      })
    })
  }

  overlay?.addEventListener("click", onHintClose);
}

export default hints;
