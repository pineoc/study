var ClickCounterView = function(clickCounter, options) {
  if (!clickCounter) throw new Error();
  const view = {
    updateView() {
      options.updateEl.text(clickCounter.getCounter());
    },
    increaseAndUpdateView() {
      clickCounter.increase();
      this.updateView();
    }
  };

  options.triggerEl.on('click', () => {
    view.increaseAndUpdateView();
  });
  return view;
}