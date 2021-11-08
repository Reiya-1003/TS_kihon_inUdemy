import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Data from "./data.json";
import TestComponent from "./TestComponent";

const name = "hello";
//ミテラル型
let username: string = "world";
//アノーテーション　型の推論
let dummynum = 2;
let bool = true;

let array1 = [true, false];
let array２ = [0, 1, "さん"];

interface NANE {
  first: string;
  last: string | null;
} //型きめる

let nameObj: NANE = { first: "egami", last: null };

const func1 = (x: number, y: number): number => {
  return x + y;
};

//Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 32,
  city: "saitama",
  username: "egaega",
  password: "peichan",
};

//Union types
let value: boolean | number;
value = true;
value = 22;

let arrayUni: (number | string)[];
arrayUni = [0, 2, "safas"];

let company: "Facebook" | "google" | "anazon";
company = "google";

let memory: 154 | 33232 | 342;
memory = 154;

//typeof
let msg: string = "Hi";
let msg2: typeof msg;
//データ定義を使いまわせる

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

//keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

//typeof + keyof

const SPORTS = {
  soccer: "Soccor",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

//enum 列挙型
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OStype: OS;
}

const PC1: PC = {
  id: 1,
  OStype: OS.Windows,
};

const PC2: PC = {
  id: 2,
  OStype: OS.Mac,
};

//型のこかんせい
const comp1 = "test1";
let comp2: string = comp1;

let comp3: string = "test";

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};
//funcComp1=funcComp2  エラー

//ジェニリックス
interface GEN<T> {
  item: T;
}

const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN ={ item:"hello"} エラー
// const gen2: GEN<number> = { item: "hello" }; エラー

interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = { item: "hello" };

interface GEN2<T extends string | number> {
  item: T;
}

const gen4: GEN2<string> = { item: "koin" };

function funGen<T>(props: T) {
  return { item: props };
}

const gen6 = funGen<string>("test");
const gen7 = funGen<string | null>(null);

function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}

const gen8 = funcGen1("hello");
//const gen9 = funcGen1(3); エラー

interface PROPS {
  price: number;
}

function funcGen2<T extends PROPS>(props: T) {
  return { value: props.price };
}
const gen10 = funcGen2({ price: 10 });

const funcgen3 = <T extends PROPS>(props: T) => {
  return { value: props.price };
};

//JSON型推論

type USERS = typeof Data;

//react hooks　props型

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="ささきくみ" />
      </header>
    </div>
  );
};

export default App;
