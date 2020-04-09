class Hoge {
  private age: number;
  private created_at: Date;

  constructor($age: number, $created_at: Date) {
    this.age = $age;
    this.created_at = $created_at;
  }

  /**
   * Getter $created_at
   * @return {Date}
   * NOTE: getter, setter >= ES5
   */
  public get $created_at(): Date {
    return new Date(this.created_at.getTime());
  }

  /**
   * Setter $created_at
   * @param {Date} value
   */
  public set $created_at(value: Date) {
    this.created_at = value;
  }
}

const hoge = new Hoge(13, new Date());
let tmp_date = hoge.$created_at;
tmp_date = new Date(2030, 1, 1);
console.log(hoge.$created_at);

function voidf(): void {
  console.log(123);
}
function neverf(): never {
  while (true) {}
}
function objectf(): object {
  // return 1;
  return new Number(1);
}

let arr: unknown[] = [];
arr.push(123);
// arr[0].toFixed()

let crosst: number & string; // = never
let uniont: number | null = null;
let literalt: "hoge" | "geho" = "geho";

let obj = { foo: "bar" };
let obj2: typeof obj = { foo: "asdf" };
// obj2.gaho = 123;
let mykey: keyof typeof obj = "foo";

// let callback: (message: string) => string = (msg: string): number => {
let callback: (message: string) => number = (msg: string): number => {
  console.log(msg);
  return 123;
};
callback("123");

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

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
  height?: number;
  width?: number;

  constructor() {
    this.height = 100;
  }
}

const component: Component = new Component();
// console.log(component.height); // undefined
// console.log(component.width); // undefined
console.log(component); // Component {}
for (let key in component) {
  console.log(key); // 何も出ない
}

type State = {
  code: number;
};
const currentState: Readonly<State> = { code: 100 };

type DirectionKeys = "a" | "b";
type User = {
  name: string;
  //   [k: string]: number | string;
  [k: string]: any;
  directions: {
    [k2 in DirectionKeys]: Direction;
  };
};

const tuple1 = [false, 1, "2"];
const tuple2 = [false, 1, "2"] as [false, 1, "2"];
tuple2[2] = "2";
const tuple3 = [false, 1, "2"] as const;

type UserA = {
  role: "admin";
  name: string;
};
type UserB = {
  role: "normal";
  name: string;
};
type UserC = {
  role: "restricted";
  name: string;
};

function isUserA(user: UserA | UserB | UserC): user is UserA {
  return user.role === "admin";
}

function hoge2(user: UserA | UserB | UserC) {
  if (isUserA(user)) {
    console.log(user);
    return;
  }
  if (!isUserA(user)) {
    console.log(user);
  }

  console.log(user);
}

class Creator {}
class Animal extends Creator {}
class Human extends Creator {}

// UserA, UserB, UserCは型情報で実態はないため、instanceofに使えない
function hoge3(creature: Creator | Animal | Human) {
  const c0 = creature;
  if (creature instanceof Animal) {
    const c1 = creature;
    console.log(c1);
    return; // returnないとc2は3つのunion
  }
  const c2 = creature;
}

declare var foo2: number;
// foo2 = 123; // 実行時エラー. not declared

// mytypes/sample.d.ts
// console.log(hoge10); // 実行時エラー. not declared
