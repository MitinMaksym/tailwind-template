const tabs = ({selector: tabs}) => {

  if(!tabs) {
    return;
  }

  let activeIndex = Number(tabs.getAttribute("data-active-index")) || 1;
  const navButtons = Array.from(tabs.querySelectorAll(".nav-btn"));
  const panels = Array.from(tabs.querySelectorAll(".tab-panel"));

  const setActivePanel = () => {
    const currentActivePanel = panels.find(el => !el.classList.contains("hidden"));
    if(currentActivePanel) {
      currentActivePanel.classList.add("hidden")
    }
    const panel = panels.find(pan => Number(pan.getAttribute("data-index")) === activeIndex);
    if(panel) {
      panel.classList.remove("hidden")
    }
  }

  const setActiveButton = () => {
    const currentActiveBtn = navButtons.find(el => el.classList.contains("active"));
    if(currentActiveBtn) {
      currentActiveBtn.classList.remove("active")
    }
    const btn = navButtons.find(but => Number(but.getAttribute("data-for")) === activeIndex);
    if(btn) {
      btn.classList.add("active")
    }
  }

  const setActive = (index) => {
    if(index) {
      activeIndex = index;
    }

    setActivePanel();
    setActiveButton();
  }
  setActive();

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const getCurrentIndex = Number(btn.getAttribute("data-for"));
      setActive(getCurrentIndex)
    })
  })
}

export default tabs;
