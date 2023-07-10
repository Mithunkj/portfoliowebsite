modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener("click", () => {
      modal(i); /*  close button *   */
    });
  });
  
  modalClose.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
      modalViews.forEach((modalViews) => {
        modalViews.classList.remove("active-modal");
      });
    });
  });
  