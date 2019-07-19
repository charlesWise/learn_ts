let flag:boolean = false;
flag = true;

let arr:number[] = [1,2,3];

enum Flag {
  success= 1,
  error= 2
}
let f:Flag = Flag.success;

enum Color {
  red, blue = '8'
}
let c:Color = Color.red;
console.log(c); // 1 如果标志符没有赋值 它的值就是下标

let num:number | undefined | null;

function run1(): number | undefined {
  return 1
}
function run2(): void {}

// let a:never; // 重来不会出现的类型
// a=(() => {
//   throw new Error('xx');
// })();

// ? 可选参数需要放在必传参数后面
function getInfo(name: string, age?: number): string {
  if (age) {
    return `${name}-${age}`;
  }
  return `${name}-年龄保密`;
}
getInfo('LISI');
getInfo('LISI', 18);

function sum1(a:number, b:number, c:number):number {
  return a + b + c;
}
sum1(1, 2, 3);

// ... params是个数组
function sum2(...params: number[]):number {
  let sum = 0;
  for(let i = 0, len = params.length; i < len; i++) {
    sum += params[i];
  }
  return sum;
}
sum2(1, 2, 3, 4, 5, 6);

// ts重载
function info(name: string): string;
function info(age: number): number;
function info(str: any): any {
    if(typeof str === 'string') {
        return `我是名字${str}`;
    } else {
        return `我是年龄${str}`;
    }
}
info('LISU');

// ts class
class Person1 {
  name: string; // 属性 前面默认public关键字
  constructor(v: string) { // 构造函数 实例化类的时候触发的方法
    this.name = v;
  }
  getName(): string {
    return this.name;
  }
  setName(name:string):void {
    this.name = name;
  }
}
let p1 = new Person1('LiHua');
p1.getName();

// ts继承 extends super
class Person2 {
  name: string; // 属性 前面默认public关键字
  constructor(name: string) { // 构造函数 实例化类的时候触发的方法
    this.name = name;
  }
  run(): string {
    return this.name;
  }
}
let p2 = new Person2('wangwu');
class Web extends Person2 {
  constructor(name: string) {
    super(name); // 初始化父类的构造函数
  }
}

class Person3 {
  name: string = 'zhangsan'; // 属性 前面默认public关键字
  constructor(name: string) { // 构造函数 实例化类的时候触发的方法
    this.name = name;
  }
  // static run(): string {
  //   return this.name; // 出错 静态方法不能访问属性 name
  // }
}

// ts 多态 属于继承
class Animal {
  constructor () {
  }
  eat() {

  }
}
class Dog extends Animal {
  constructor () {
    super();
  }
  eat() {} // 实现dog类的方法
}

// ts 抽象类 不能直接被实例化  继承的子类必须要实现
abstract class Animal2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract eat(): any;
}
class Dog2 extends Animal2 {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(this.name);
  }
}

// 接口
interface FullName {
  firstName:string;
  lastName?:string; // ?可选接口属性
}
function getName(name: FullName): void {

}

// 定义函数类型接口
interface encrypt {
  (key: string, value: string): string
}
let md5:encrypt = function(key: string, value: string): string {
  return key + value;
}
md5('name', 'zhansan');

//可索引接口：数组/对象的约束
interface userArr {
  [index:number]: number
}
let arr1:userArr = [0, 1];

//类类型接口：对类对约束  和  抽象类相似
interface Animal3 {
  name: string;
  eat(str: string): void;
}
class Dog1 implements Animal3 {
  name: string;
  constructor(name:string) {
    this.name = name;
  }
  eat() {
    console.log(this.name + 'chifang');
  }
}
let dog = new Dog1('xiaohua');
dog.eat();

// 泛型
function fn<T>(v:T):T {
  return v;
}
fn<number>(1);

class MinClass<T> {
  public list: T[]=[];
  add(v:T):void {
    this.list.push(v);
  }
}
let m = new MinClass<number>();

interface ConfigFn {
  <T>(v: T): T;
}
var getData:ConfigFn = function<T>(v: T): T {
  return v;
}
getData<string>('lihua');

interface ConfigFn2<T> {
  (v: T): T;
}
function getData2<T>(v: T): T {
  return v;
}
let myGetData2:ConfigFn2<string> = getData2;
myGetData2('20');

// 把类作为参数约束数据传入的类型
class User {
  userName: string | undefined;
  passWord: string | undefined;
}
class MySqlDb {
  add(user: User): void {
    console.log(user);
  }
}
let u = new User();
u.userName = 'zhansan';
u.passWord = '1111';
let Db = new MySqlDb();
Db.add(u);

class MySqlDb2<T> {
  add(user: T): void {
    console.log(user);
  }
}
class User2 {
  userName: string | undefined;
  passWord: string | undefined;
}
let u2 = new User2();
u.userName = 'zhansan';
u.passWord = '1111';
let Db2 = new MySqlDb2<User>();
Db.add(u);

class ArticleCate {
  title: string | undefined;
  desc: string | undefined;
  status: number | undefined;
  constructor(params: {
    title: string | undefined,
    desc: string | undefined,
    status?: number | undefined
  }) {
    const { title, desc, status } = params;
    this.title = title;
    this.desc = desc;
    this.status = status;
  }
}
let art = new ArticleCate({
  title: 'fenlei',
  desc: 'miaoshu',
  status: 1
});
let Db3 = new MySqlDb2<ArticleCate>();
Db3.add(art);

// 普通类装饰器
function logClass(target: any) {
  target.prototype = {
    apiUrl: 'http://www.baidu.com',
    run: () => {
      console.log('我是run方法');
    }
  }
}
@logClass
class HttpClient {
  constructor() {

  }
  getData() {
    
  }
}
let hc:any = new HttpClient();
hc.run();
console.log('=========我是分割线=========')
// 类装饰器：装饰器工厂（可传参）
function logClass2(params: any) {
  return function(target: any) {
    console.log(params); // hello 参数
    console.log(target); // 是类
    target.prototype = {
      run: () => {
        console.log('我是HttpClient2的run方法');
      }
    }
  }
}
@logClass2('hello')
class HttpClient2 {
  constructor() {
  }
  getData() {}
}
let hc2:any = new HttpClient2();
hc2.run();

function logClass3(target: any) {
  return class extends target {
    apiUrl: any = '我是修改后的apiUrl';
    getData() {
      console.log(this.apiUrl);
    }
  }
}
@logClass3
class HttpClient3 {
  apiUrl: string;
  constructor() {
    this.apiUrl = '我是构造函数里面的apiUrl';
  }
  getData() {
    console.log(this.apiUrl);
  }
}
let hc3:any = new HttpClient3();
hc3.getData();

// 属性装饰器
// 类
function logClass4(params: any) {
  return function(target: any) {}
}
//属性
console.log('=========我是分割线=========')
function logProperty(params: any) {
  return function(target: any, attr: any) {
    console.log(params); // http://baidu.com
    target[attr] = params + '.....';
    console.log(target, attr); // 类 url
  }
}
@logClass4('hello')
class HttpClient4 {
  @logProperty('http://baidu.com')
  public url: string | undefined;
  constructor() {
  }
  getData() {
    console.log(this.url);
  }
}
let hc4:any = new HttpClient4();
hc4.getData();

// 方法装饰器一
console.log('=========我是分割线=========')
function logMethod(params: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log(target);
    console.log(methodName);
    console.log(desc);
    target.run = function() {
      console.log('我是新增run');
    }
  }
}
class HttpClient5 {
  public url: string | undefined;
  constructor() {
  }
  @logMethod('http://gooole.com')
  getData() {
    console.log(this.url);
  }
}
let hc5:any = new HttpClient5();
hc5.run();

// 方法装饰器二
console.log('=========我是分割线=========')
function logMethod2(params: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log(params); // http://gooole.com
    console.log(target); // HttpClient5 { getData: [Function] }
    console.log(methodName); // getData
    console.log(desc); // { value: [Function], writable: true, enumerable: true,configurable: true }
    let oMethod = desc.value;
    desc.value = function(...args: any) { // 修改原来的方法
      args = args.map((v: any) => {
        return String(v);
      })
      console.log(args)
      oMethod.apply(this, args);
    }
  }
}
class HttpClient6 {
  public url: string | undefined;
  constructor() {
    this.url = 'http//:goole.com';
  }
  @logMethod2('http://baidu.com')
  getData() {
    console.log(this.url);
  }
}

let hc6:any = new HttpClient6();
hc6.getData(1, 'abc');

// 方法参数装饰器
console.log('=========我是分割线=========')
function logParams(params: any) {
  return function(target: any, methodName: any, paramsIndex: any) {
    console.log(params);
    console.log(target);
    console.log(methodName);
    console.log(paramsIndex);
  }
}
class HttpClient7 {
  public url: string | undefined;
  constructor() {
    this.url = 'http//:goole.com';
  }
  getData(@logParams('uuid') uuid:any) {
    console.log(this.url);
  }
}
let hc7 = new HttpClient7();
hc7.getData(12);

// 执行顺序：属性 》 方法 》 方法参数 》 类
// 如果有多个同样的装饰器，它会先执行后面的