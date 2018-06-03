let assert = require("assert");

describe('Array Test', function () {
  describe('indexOf() method', function () {
    it('if no value on method result, return -1', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
    it('if has value, return right index', function () {
      assert.equal(0, [1,2,3].indexOf(1));
      assert.equal(2, [1,2,3].indexOf(3));
    });
  });
});

describe('Async code test', function () {
  describe('#setTimeout', function () {
    it('it should done within 2 seconds', function (done) {
      setTimeout(function () {
        done();
      }, 1500);
    });
  });
});

describe('다양한 hooks 방법', function () {
  let a = 10;
  let b = 20;

	before(function () {
    // 이 블록 내의 테스트들을 실행하기에 앞서 한번 실행되는 부분
    console.log('before log');
	});

	after(function () {
    // 이 블록 내의 테스트들을 모두 실행한 후에 한번 실행되는 부분
    console.log('after log');
	});

	beforeEach(function () {
    // 이 블록 내의 각 테스트들이 실행되기 전에 실행
    console.log('before each!');
	});

	afterEach(function () {
    // 이 블록 내의 각 테스트들이 실행된 후에 실행
    console.log('after each!');
	});

  // test cases
  describe('add', function () {
    it('10+20===30', function () {
      assert.equal(30, a+b);
    });
  });
  describe('subtract', function () {
    it('10-20===-10', function () {
      assert.equal(-10, a-b);
    });
  })
});