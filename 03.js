// ## 3.this

// 1. <빈칸>을 작성해주세요
const obj1 = {
  value: 20,
  getValue() {
    return this.value;
  },
};
console.log(obj1.getValue()); //  출력값 20

// 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
// 첫번째 this는 obj2에 의해 호출되었기 때문에 this가 obj2를 가리킵니다.
// 두번째 this는 브라우저에서 window를 가리킵니다. setTimeout의 콜백함수는 setTimeout과 다른 context에서 호출된다.
// 즉, setTimeout의 콜백은 독립적으로 호출돼서 전역객체인 window를 가리키게 된다!
const obj2 = {
  method: function () {
    console.log("첫번째 this : ", this);

    const innerMethod = () => {
      setTimeout(function () {
        console.log("두번째 this : ", this);
      });
    };
    innerMethod();
  },
};

obj2.method();
