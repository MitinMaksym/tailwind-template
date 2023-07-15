const video = () => {
  const modal = document.querySelector('#video');
  const openers = Array.from(document.querySelectorAll('.video-opener'));
  const closers = Array.from(document.querySelectorAll('.video-close'));

  if(modal && openers.length > 0 && closers.length > 0) {
    openers.forEach(opener => {
      opener.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      })
    });
    closers.forEach(closer => {
      closer.addEventListener("click", () => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      })
    })
  }
}

export default video;
