var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//--------------------------------------------------------------------------------------- Inheritance --------------------------------------------------------------------------------------------------------\\
var CARS = /** @class */ (function () {
    function CARS(name, isLightVehicle, brand, color, price) {
        this.name = name;
        this.isLightVehicle = isLightVehicle;
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
    return CARS;
}());
//--------------------------\\
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(name, isLightVehicle, brand, color, price, createDate, horsepower, topSpeed) {
        var _this = _super.call(this, name, isLightVehicle, brand, color, price) || this;
        _this.createDate = createDate;
        _this.horsepower = horsepower;
        _this.topSpeed = topSpeed;
        return _this;
    }
    return BMW;
}(CARS));
var bmwM5 = new BMW("M5", true, "BMW", "Black", 100000, 2024, 560, 305);
console.log(bmwM5);
//------------Mercedes--------------\\
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(name, isLightVehicle, brand, color, price, createDate, horsepower, topSpeed) {
        var _this = _super.call(this, name, isLightVehicle, brand, color, price) || this;
        _this.createDate = createDate;
        _this.horsepower = horsepower;
        _this.topSpeed = topSpeed;
        return _this;
    }
    return Mercedes;
}(CARS));
var mercedesSClass = new Mercedes("S-Class", true, "Mercedes", "White", 120000, 2023, 500, 290);
console.log(mercedesSClass);
//------------Audi--------------\\
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(name, isLightVehicle, brand, color, price, createDate, horsepower, topSpeed) {
        var _this = _super.call(this, name, isLightVehicle, brand, color, price) || this;
        _this.createDate = createDate;
        _this.horsepower = horsepower;
        _this.topSpeed = topSpeed;
        return _this;
    }
    return Audi;
}(CARS));
var audiRS7 = new Audi("RS7", true, "Audi", "Red", 110000, 2022, 600, 310);
console.log(audiRS7);
//--------------------------------------------------------------------------------------- Encapsulation -------------------------------------------------------------------------------------------------\\
//-------------------User--------------------\\
var User = /** @class */ (function () {
    function User(fname, lname, username, age, phone) {
        this.fname = fname;
        this.lname = lname;
        this.username = username;
        this.age = age;
        this.phone = phone;
    }
    User.prototype.getAge = function () {
        var currentYear = new Date().getFullYear();
        return currentYear - this.age;
    };
    return User;
}());
//-------------------Student--------------------\\
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fname, lname, username, age, phone, studentId, course) {
        var _this = _super.call(this, fname, lname, username, age, phone) || this;
        _this.studentId = studentId;
        _this.course = course;
        return _this;
    }
    return Student;
}(User));
var user = new User("John", "Doe", "john32", 34, 994445566);
console.log(user);
console.log("John Doe's calculated age: ".concat(user.getAge()));
var student = new Student("Alice", "Smith", "alice123", 20, 998877665, "S12345", "Computer Science");
console.log(student);
console.log("Alice Smith's calculated age: ".concat(student.getAge()));
//-------------------Teacher--------------------\\
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(fname, lname, username, age, phone, employeeId, subject) {
        var _this = _super.call(this, fname, lname, username, age, phone) || this;
        _this.employeeId = employeeId;
        _this.subject = subject;
        return _this;
    }
    return Teacher;
}(User));
var teacher = new Teacher("Robert", "Brown", "robertT", 45, 887766554, "T98765", "Mathematics");
console.log(teacher);
console.log("Robert Brown's calculated age: ".concat(teacher.getAge()));
//--------------------------------------------------------------------------------------- Abstraction -------------------------------------------------------------------------------------------------\\
var Parallelepiped = /** @class */ (function () {
    function Parallelepiped() {
    }
    return Parallelepiped;
}());
//-----------------Yuza-------------\\
var Yuza = /** @class */ (function (_super) {
    __extends(Yuza, _super);
    function Yuza(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Yuza.prototype.getArea = function () {
        return 2 * (this.a * this.b + this.b * this.c + this.c * this.a);
    };
    Yuza.prototype.getHajim = function () {
        throw new Error("Method not implemented in this class");
    };
    return Yuza;
}(Parallelepiped));
var yuzasi = new Yuza(3, 4, 5);
console.log("Parallelepiped yuzasi: ".concat(yuzasi.getArea(), " kvadrat birlik"));
//-----------------Hajim-------------\\
var Hojim = /** @class */ (function (_super) {
    __extends(Hojim, _super);
    function Hojim(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Hojim.prototype.getHajim = function () {
        return this.a * this.b * this.c;
    };
    Hojim.prototype.getArea = function () {
        throw new Error("Method not implemented in this class");
    };
    return Hojim;
}(Parallelepiped));
var hajmi = new Hojim(3, 4, 5);
console.log("Parallelepiped hajmi: ".concat(hajmi.getHajim(), " kub birlik"));
//-----------------Kub-------------\\
var Kub = /** @class */ (function (_super) {
    __extends(Kub, _super);
    function Kub(a) {
        var _this = _super.call(this) || this;
        _this.a = a;
        return _this;
    }
    Kub.prototype.getArea = function () {
        return 6 * (this.a * this.a);
    };
    Kub.prototype.getHajim = function () {
        return this.a * this.a * this.a;
    };
    return Kub;
}(Parallelepiped));
var kub = new Kub(3);
console.log("Kub yuzasi: ".concat(kub.getArea(), " kvadrat birlik"));
console.log("Kub hajmi: ".concat(kub.getHajim(), " kub birlik"));
//--------------------------------------------------------------------------------------- Polymorphism -------------------------------------------------------------------------------------------------\\
var MathAdd = /** @class */ (function () {
    function MathAdd() {
    }
    MathAdd.prototype.add = function (a, b) {
        return a + b;
    };
    return MathAdd;
}());
//----------------StringConcat--------------\\
var StringConcat = /** @class */ (function (_super) {
    __extends(StringConcat, _super);
    function StringConcat() {
        return _super.call(this) || this;
    }
    StringConcat.prototype.add = function (a, b) {
        return a + b;
    };
    return StringConcat;
}(MathAdd));
var stringConcat = new StringConcat();
console.log(stringConcat.add("Hello, ", "World!"));
//----------------ArrayMerge--------------\\
var ArrayMerge = /** @class */ (function (_super) {
    __extends(ArrayMerge, _super);
    function ArrayMerge() {
        return _super.call(this) || this;
    }
    ArrayMerge.prototype.add = function (a, b) {
        return __spreadArray(__spreadArray([], a, true), b, true);
    };
    return ArrayMerge;
}(MathAdd));
var arrayMerge = new ArrayMerge();
console.log(arrayMerge.add([1, 2, 3], [4, 5, 6]));
//----------------ObjectMerge--------------\\
var ObjectMerge = /** @class */ (function (_super) {
    __extends(ObjectMerge, _super);
    function ObjectMerge() {
        return _super.call(this) || this;
    }
    ObjectMerge.prototype.add = function (a, b) {
        return __assign(__assign({}, a), b);
    };
    return ObjectMerge;
}(MathAdd));
var objectMerge = new ObjectMerge();
console.log(objectMerge.add({ a: 1, b: 2 }, { c: 3, d: 4 }));
