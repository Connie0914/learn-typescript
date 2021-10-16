/* eslint-disable @typescript-eslint/no-unused-vars */

/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "a";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple あんまり使わない
let tuple: [number, string] = [0, "a"];

// any なんでも入れられる、型を指定している意味がない
let any: any = false;

// vold
const funcA = () => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {}; //これはあんまり使わない
let obj2: { id: number; name: string } = { id: 0, name: "aaaa" };
