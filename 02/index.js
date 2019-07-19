"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var flag = false;
flag = true;
var arr = [1, 2, 3];
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color["blue"] = "8";
})(Color || (Color = {}));
var c = Color.red;
console.log(c); // 1 如果标志符没有赋值 它的值就是下标
var num;
function run1() {
    return 1;
}
function run2() { }
// let a:never; // 重来不会出现的类型
// a=(() => {
//   throw new Error('xx');
// })();
// ? 可选参数需要放在必传参数后面
function getInfo(name, age) {
    if (age) {
        return name + "-" + age;
    }
    return name + "-\u5E74\u9F84\u4FDD\u5BC6";
}
getInfo('LISI');
getInfo('LISI', 18);
function sum1(a, b, c) {
    return a + b + c;
}
sum1(1, 2, 3);
// ... params是个数组
function sum2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0, len = params.length; i < len; i++) {
        sum += params[i];
    }
    return sum;
}
sum2(1, 2, 3, 4, 5, 6);
function info(str) {
    if (typeof str === 'string') {
        return "\u6211\u662F\u540D\u5B57" + str;
    }
    else {
        return "\u6211\u662F\u5E74\u9F84" + str;
    }
}
info('LISU');
// ts class
var Person1 = /** @class */ (function () {
    function Person1(v) {
        this.name = v;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    Person1.prototype.setName = function (name) {
        this.name = name;
    };
    return Person1;
}());
var p1 = new Person1('LiHua');
p1.getName();
// ts继承 extends super
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.run = function () {
        return this.name;
    };
    return Person2;
}());
var p2 = new Person2('wangwu');
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    return Web;
}(Person2));
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = 'zhangsan'; // 属性 前面默认public关键字
        this.name = name;
    }
    return Person3;
}());
// ts 多态 属于继承
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this) || this;
    }
    Dog.prototype.eat = function () { }; // 实现dog类的方法
    return Dog;
}(Animal));
// ts 抽象类 不能直接被实例化  继承的子类必须要实现
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    return Animal2;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(name) {
        return _super.call(this, name) || this;
    }
    Dog2.prototype.eat = function () {
        console.log(this.name);
    };
    return Dog2;
}(Animal2));
function getName(name) {
}
var md5 = function (key, value) {
    return key + value;
};
md5('name', 'zhansan');
var arr1 = [0, 1];
var Dog1 = /** @class */ (function () {
    function Dog1(name) {
        this.name = name;
    }
    Dog1.prototype.eat = function () {
        console.log(this.name + 'chifang');
    };
    return Dog1;
}());
var dog = new Dog1('xiaohua');
dog.eat();
// 泛型
function fn(v) {
    return v;
}
fn(1);
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (v) {
        this.list.push(v);
    };
    return MinClass;
}());
var m = new MinClass();
var getData = function (v) {
    return v;
};
getData('lihua');
function getData2(v) {
    return v;
}
var myGetData2 = getData2;
myGetData2('20');
// 把类作为参数约束数据传入的类型
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
    }
    MySqlDb.prototype.add = function (user) {
        console.log(user);
    };
    return MySqlDb;
}());
var u = new User();
u.userName = 'zhansan';
u.passWord = '1111';
var Db = new MySqlDb();
Db.add(u);
var MySqlDb2 = /** @class */ (function () {
    function MySqlDb2() {
    }
    MySqlDb2.prototype.add = function (user) {
        console.log(user);
    };
    return MySqlDb2;
}());
var User2 = /** @class */ (function () {
    function User2() {
    }
    return User2;
}());
var u2 = new User2();
u.userName = 'zhansan';
u.passWord = '1111';
var Db2 = new MySqlDb2();
Db.add(u);
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        var title = params.title, desc = params.desc, status = params.status;
        this.title = title;
        this.desc = desc;
        this.status = status;
    }
    return ArticleCate;
}());
var art = new ArticleCate({
    title: 'fenlei',
    desc: 'miaoshu',
    status: 1
});
var Db3 = new MySqlDb2();
Db3.add(art);
// 普通类装饰器
function logClass(target) {
    target.prototype = {
        apiUrl: 'http://www.baidu.com',
        run: function () {
            console.log('我是run方法');
        }
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
var hc = new HttpClient();
hc.run();
console.log('=========我是分割线=========');
// 类装饰器：装饰器工厂（可传参）
function logClass2(params) {
    return function (target) {
        console.log(params); // hello 参数
        console.log(target); // 是类
        target.prototype = {
            run: function () {
                console.log('我是HttpClient2的run方法');
            }
        };
    };
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
    }
    HttpClient2.prototype.getData = function () { };
    HttpClient2 = __decorate([
        logClass2('hello')
    ], HttpClient2);
    return HttpClient2;
}());
var hc2 = new HttpClient2();
hc2.run();
function logClass3(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = '我是修改后的apiUrl';
            return _this;
        }
        class_1.prototype.getData = function () {
            console.log(this.apiUrl);
        };
        return class_1;
    }(target));
}
var HttpClient3 = /** @class */ (function () {
    function HttpClient3() {
        this.apiUrl = '我是构造函数里面的apiUrl';
    }
    HttpClient3.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    HttpClient3 = __decorate([
        logClass3
    ], HttpClient3);
    return HttpClient3;
}());
var hc3 = new HttpClient3();
hc3.getData();
// 属性装饰器
// 类
function logClass4(params) {
    return function (target) { };
}
//属性
console.log('=========我是分割线=========');
function logProperty(params) {
    return function (target, attr) {
        console.log(params); // http://baidu.com
        target[attr] = params + '.....';
        console.log(target, attr); // 类 url
    };
}
var HttpClient4 = /** @class */ (function () {
    function HttpClient4() {
    }
    HttpClient4.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        logProperty('http://baidu.com')
    ], HttpClient4.prototype, "url", void 0);
    HttpClient4 = __decorate([
        logClass4('hello')
    ], HttpClient4);
    return HttpClient4;
}());
var hc4 = new HttpClient4();
hc4.getData();
// 方法装饰器一
console.log('=========我是分割线=========');
function logMethod(params) {
    return function (target, methodName, desc) {
        console.log(target);
        console.log(methodName);
        console.log(desc);
        target.run = function () {
            console.log('我是新增run');
        };
    };
}
var HttpClient5 = /** @class */ (function () {
    function HttpClient5() {
    }
    HttpClient5.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        logMethod('http://gooole.com')
    ], HttpClient5.prototype, "getData", null);
    return HttpClient5;
}());
var hc5 = new HttpClient5();
hc5.run();
// 方法装饰器二
console.log('=========我是分割线=========');
function logMethod2(params) {
    return function (target, methodName, desc) {
        console.log(params); // http://gooole.com
        console.log(target); // HttpClient5 { getData: [Function] }
        console.log(methodName); // getData
        console.log(desc); // { value: [Function], writable: true, enumerable: true,configurable: true }
        var oMethod = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (v) {
                return String(v);
            });
            console.log(args);
            oMethod.apply(this, args);
        };
    };
}
var HttpClient6 = /** @class */ (function () {
    function HttpClient6() {
        this.url = 'http//:goole.com';
    }
    HttpClient6.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        logMethod2('http://baidu.com')
    ], HttpClient6.prototype, "getData", null);
    return HttpClient6;
}());
var hc6 = new HttpClient6();
hc6.getData(1, 'abc');
// 方法参数装饰器
console.log('=========我是分割线=========');
function logParams(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
    };
}
var HttpClient7 = /** @class */ (function () {
    function HttpClient7() {
        this.url = 'http//:goole.com';
    }
    HttpClient7.prototype.getData = function (uuid) {
        console.log(this.url);
    };
    __decorate([
        __param(0, logParams('uuid'))
    ], HttpClient7.prototype, "getData", null);
    return HttpClient7;
}());
var hc7 = new HttpClient7();
hc7.getData(12);
// 执行顺序：属性 》 方法 》 方法参数 》 类
// 如果有多个同样的装饰器，它会先执行后面的
