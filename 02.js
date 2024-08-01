// 1
var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName();

// yuno2, 가장 가까운 scope의 변수를 참조한다.

// 2 
function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test();

// 2, var은 블록스코프를 지원하지 않아서 if 밖으로 나와서 x를 바꾼다.

// 3 
const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();

// 화살표 함수는 this 바인딩을 하지 않아서 의도한 this를 쓸 수 있다.
