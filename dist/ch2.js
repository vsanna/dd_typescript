"use strict";
class Hoge {
    constructor($age, $created_at) {
        this.age = $age;
        this.created_at = $created_at;
    }
    /**
     * Getter $created_at
     * @return {Date}
     * NOTE: getter, setter >= ES5
     */
    get $created_at() {
        return new Date(this.created_at.getTime());
    }
    /**
     * Setter $created_at
     * @param {Date} value
     */
    set $created_at(value) {
        this.created_at = value;
    }
}
const hoge = new Hoge(13, new Date());
let tmp_date = hoge.$created_at;
tmp_date = new Date(2030, 1, 1);
console.log(hoge.$created_at);
function voidf() {
    console.log(123);
}
function neverf() {
    while (true) { }
}
function objectf() {
    // return 1;
    return new Number(1);
}
let arr = [];
arr.push(123);
// arr[0].toFixed()
let crosst; // = never
let uniont = null;
let literalt = "geho";
let obj = { foo: "bar" };
let obj2 = { foo: "asdf" };
// obj2.gaho = 123;
let mykey = "foo";
// let callback: (message: string) => string = (msg: string): number => {
let callback = (msg) => {
    console.log(msg);
    return 123;
};
callback("123");
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// NG. 無関係propertyも表示される
for (let key in Direction) {
    console.log(key);
}
// OK
// const enum will be replaced inline, so we cannot use this style with const enum
Object.entries(Direction).forEach((key, value) => {
    console.log(`${key}:${value}`);
});
class Component {
    constructor() {
        this.height = 100;
    }
}
const component = new Component();
// console.log(component.height); // undefined
// console.log(component.width); // undefined
console.log(component); // Component {}
for (let key in component) {
    console.log(key); // 何も出ない
}
const currentState = { code: 100 };
const tuple1 = [false, 1, "2"];
const tuple2 = [false, 1, "2"];
tuple2[2] = "2";
const tuple3 = [false, 1, "2"];
function isUserA(user) {
    return user.role === "admin";
}
function hoge2(user) {
    if (isUserA(user)) {
        console.log(user);
        return;
    }
    if (!isUserA(user)) {
        console.log(user);
    }
    console.log(user);
}
class Creator {
}
class Animal extends Creator {
}
class Human extends Creator {
}
// UserA, UserB, UserCは型情報で実態はないため、instanceofに使えない
function hoge3(creature) {
    const c0 = creature;
    if (creature instanceof Animal) {
        const c1 = creature;
        console.log(c1);
        return; // returnないとc2は3つのunion
    }
    const c2 = creature;
}
// foo2 = 123; // 実行時エラー. not declared
// mytypes/sample.d.ts
console.log(hoge10);
