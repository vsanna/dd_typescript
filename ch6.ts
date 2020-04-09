namespace ch6 {
  console.log("ch6");

  interface User {
    name: string;
    age: number | null;
    gender: "male" | "female" | "other";
    birthplace?: string;
  }
  interface SubUser {
    name: string;
    age: number | null;
  }

  type ROUser = Readonly<User>;
  type PartialUser = Partial<User>;
  type RUser = Required<User>;
  type PUser = Pick<User, "name" | "age">;
  type RecordUser = Record<"user", User>;
  type OUser = Omit<User, "birthplace">;
  // type ExcludedUser = Exclude<User, SubUser>;
  // type ExtractedUser = Extract<User, SubUser>;
  type ExcludedType = Exclude<"name" | "age", "age">;
  type ExtractedType = Extract<"name" | "age", "age">;

  type Unpack<T> = T extends (infer U)[]
    ? U
    : T extends (...args: any[]) => infer U
    ? U
    : T extends Promise<infer U>
    ? U
    : T;
  type U1 = Unpack<string>;
  type U2 = Unpack<Array<number>>;
  type U3 = Unpack<Promise<string>>;
  type U4 = Unpack<() => boolean>;

  type Unbox<T> = T extends { [k: string]: infer U }
    ? U
    : T extends (infer U)[]
    ? U
    : T;

  type U5 = Unbox<{ a: "a"; b: "b" }>;
  type U6 = Unbox<["0", 1, false]>;

  type IsPrimitive<T> = T extends Unbox<T> ? T : never;
  type IP1 = IsPrimitive<12>;
  type IP2 = IsPrimitive<"bar">;
  type IP3 = IsPrimitive<[1, 2, 3]>;

  interface User {
    birth: {
      year: number;
      month: number;
      day: number;
    };
  }
  type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends IsPrimitive<T[K]>
      ? T[K]
      : DeepReadonly<T[K]>;
  };
  type U7 = DeepReadonly<User>;
  let user: U7 = {
    name: "a",
    age: 20,
    gender: "male",
    birth: {
      year: 2000,
      month: 10,
      day: 1,
    },
  };
  // user.birth.day = 10; // ERROR
}
