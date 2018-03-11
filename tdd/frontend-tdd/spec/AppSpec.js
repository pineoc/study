describe('ClickCounter module의', () => {
  let counter;
  beforeEach(() => {
    counter = ClickCounter();
  });
  describe('getCounter()', () => {
    it('초기값이 0인 카운터 값을 반환한다.', () => {
      expect(counter.getCounter()).toBe(0);
    })
  });
  describe('increse()는', () => {
    it('카운터 값을 1만큼 증가한다', () => {
      const initialValue = counter.getCounter();
      counter.increase();
      expect(counter.getCounter()).toBe(initialValue + 1);
    });
  });
});
describe('ClickCountView 모듈의', () => {
  beforeEach(() => {
    updateEl = $('<span></span>');
    triggerEl = $('<button></button>');
    clickCounter = ClickCounter();
    view = ClickCounterView(clickCounter, {updateEl, triggerEl});
  });

  describe('ClickCountView 모듈', () => {
    const clickCounter = null;
    const updateEl = $('<span></span>');
    it('clickCounter를 주입하지 않으면 에러를 던진다', () => {
      const actual = () => ClickCounterView(clickCounter, updateEl);
      expect(actual).toThrowError();
    });
    it('updateEl를 주입하지 않으면 에러를 던진다', () => {
      const actual = () => ClickCounterView(clickCounter, updateEl);
      expect(actual).toThrowError();
    });
    it('클릭 이벤트가 발생하면 increaseAndUpdateView를 실행한다', () => {
      spyOn(view, 'increaseAndUpdateView');
      triggerEl.trigger('click');
      expect(view.increaseAndUpdateView).toHaveBeenCalled();
    });
  });
  
  describe('updateView()는', () => {
    it('ClickCounter의 getCounter() 값을 출력한다.', () => {
      const counterValue = clickCounter.getCounter().toString();
      view.updateView();
      expect(updateEl.text()).toBe(counterValue);
    });
  });

  describe('increaseAndUpdateView()는', () => {
    it('ClickCounter의 increase()를 실행한다', () => {
      spyOn(clickCounter, 'increase');
      view.increaseAndUpdateView();
      expect(clickCounter.increase).toHaveBeenCalled();
    });
    it('updateView를 실행한다', () => {
      spyOn(view, 'updateView');
      view.increaseAndUpdateView();
      expect(view.updateView).toHaveBeenCalled();
    });
  });
});
