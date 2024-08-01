// ## 2. 스코프
// 1. 출력값과 출력되는 값의 이유를 설명해주세요
// function a의 스코프에 name이 없으므로 상위 스코프인 myName에서 name을 찾아 출력합니다.

var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName();

// 2. 출력값과 출력되는 값의 이유를 설명해주세요
// var는 함수형 스코프를 지원하는데, if는 함수가 아니므로 if { } 외부에서도 x를 알 수 있습니다. 따라서 가장 가까운 x인 2를 출력합니다.

function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test();

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
// 화살표는 this 바인딩을 하지 않아 가장 마지막에 바인딩된 this인 nameObj가 this입니다. 따라서 this.name은 nameObj.namedls 'yuno'입니다.
// 독립적으로 함수를 호출하는 경우 this는 전역 객체입니다. 전역 범위에는 name이 지정되어있지 않기 때문에 undefined입니다.

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
    }
    arrow();
    normal();
  },
};

nameObj.method();
