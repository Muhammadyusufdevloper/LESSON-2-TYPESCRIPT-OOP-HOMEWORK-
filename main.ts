//--------------------------------------------------------------------------------------- Inheritance --------------------------------------------------------------------------------------------------------\\
class CARS {
  name: string;
  isLightVehicle: boolean;
  brand: string;
  color: string;
  price: number;

  constructor(
    name: string,
    isLightVehicle: boolean,
    brand: string,
    color: string,
    price: number
  ) {
    this.name = name;
    this.isLightVehicle = isLightVehicle;
    this.brand = brand;
    this.color = color;
    this.price = price;
  }
}
//--------------------------\\
class BMW extends CARS {
  createDate: number;
  horsepower: number;
  topSpeed: number;

  constructor(
    name: string,
    isLightVehicle: boolean,
    brand: string,
    color: string,
    price: number,
    createDate: number,
    horsepower: number,
    topSpeed: number
  ) {
    super(name, isLightVehicle, brand, color, price);
    this.createDate = createDate;
    this.horsepower = horsepower;
    this.topSpeed = topSpeed;
  }
}
let bmwM5: BMW = new BMW("M5", true, "BMW", "Black", 100000, 2024, 560, 305);
console.log(bmwM5);
//------------Mercedes--------------\\
class Mercedes extends CARS {
  createDate: number;
  horsepower: number;
  topSpeed: number;

  constructor(
    name: string,
    isLightVehicle: boolean,
    brand: string,
    color: string,
    price: number,
    createDate: number,
    horsepower: number,
    topSpeed: number
  ) {
    super(name, isLightVehicle, brand, color, price);
    this.createDate = createDate;
    this.horsepower = horsepower;
    this.topSpeed = topSpeed;
  }
}
let mercedesSClass: Mercedes = new Mercedes(
  "S-Class",
  true,
  "Mercedes",
  "White",
  120000,
  2023,
  500,
  290
);
console.log(mercedesSClass);
//------------Audi--------------\\
class Audi extends CARS {
  createDate: number;
  horsepower: number;
  topSpeed: number;

  constructor(
    name: string,
    isLightVehicle: boolean,
    brand: string,
    color: string,
    price: number,
    createDate: number,
    horsepower: number,
    topSpeed: number
  ) {
    super(name, isLightVehicle, brand, color, price);
    this.createDate = createDate;
    this.horsepower = horsepower;
    this.topSpeed = topSpeed;
  }
}

let audiRS7: Audi = new Audi(
  "RS7",
  true,
  "Audi",
  "Red",
  110000,
  2022,
  600,
  310
);

console.log(audiRS7);

//--------------------------------------------------------------------------------------- Encapsulation -------------------------------------------------------------------------------------------------\\
//-------------------User--------------------\\
class User {
  public fname: string;
  public lname: string;
  private username: string;
  readonly age: number;
  public phone: number;

  constructor(
    fname: string,
    lname: string,
    username: string,
    age: number,
    phone: number
  ) {
    this.fname = fname;
    this.lname = lname;
    this.username = username;
    this.age = age;
    this.phone = phone;
  }

  getAge() {
    let currentYear: number = new Date().getFullYear();
    return currentYear - this.age;
  }
}
//-------------------Student--------------------\\
class Student extends User {
  public studentId: string;
  public course: string;

  constructor(
    fname: string,
    lname: string,
    username: string,
    age: number,
    phone: number,
    studentId: string,
    course: string
  ) {
    super(fname, lname, username, age, phone);
    this.studentId = studentId;
    this.course = course;
  }
}
let user: User = new User("John", "Doe", "john32", 34, 994445566);
console.log(user);
console.log(`John Doe's calculated age: ${user.getAge()}`);

let student: Student = new Student(
  "Alice",
  "Smith",
  "alice123",
  20,
  998877665,
  "S12345",
  "Computer Science"
);
console.log(student);
console.log(`Alice Smith's calculated age: ${student.getAge()}`);
//-------------------Teacher--------------------\\
class Teacher extends User {
  public employeeId: string;
  public subject: string;

  constructor(
    fname: string,
    lname: string,
    username: string,
    age: number,
    phone: number,
    employeeId: string,
    subject: string
  ) {
    super(fname, lname, username, age, phone);
    this.employeeId = employeeId;
    this.subject = subject;
  }
}

let teacher: Teacher = new Teacher(
  "Robert",
  "Brown",
  "robertT",
  45,
  887766554,
  "T98765",
  "Mathematics"
);
console.log(teacher);
console.log(`Robert Brown's calculated age: ${teacher.getAge()}`);

//--------------------------------------------------------------------------------------- Abstraction -------------------------------------------------------------------------------------------------\\
abstract class Parallelepiped {
  abstract getArea(): number;
  abstract getHajim(): number;
}
//-----------------Yuza-------------\\
class Yuza extends Parallelepiped {
  a: number;
  b: number;
  c: number;

  constructor(a: number, b: number, c: number) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    return 2 * (this.a * this.b + this.b * this.c + this.c * this.a);
  }
  getHajim(): number {
    throw new Error("Method not implemented in this class");
  }
}

let yuzasi = new Yuza(3, 4, 5);
console.log(`Parallelepiped yuzasi: ${yuzasi.getArea()} kvadrat birlik`);

//-----------------Hajim-------------\\
class Hojim extends Parallelepiped {
  a: number;
  b: number;
  c: number;

  constructor(a: number, b: number, c: number) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getHajim(): number {
    return this.a * this.b * this.c;
  }
  getArea(): number {
    throw new Error("Method not implemented in this class");
  }
}

let hajmi = new Hojim(3, 4, 5);
console.log(`Parallelepiped hajmi: ${hajmi.getHajim()} kub birlik`);

//-----------------Kub-------------\\
class Kub extends Parallelepiped {
  a: number;

  constructor(a: number) {
    super();
    this.a = a;
  }

  getArea(): number {
    return 6 * (this.a * this.a);
  }

  getHajim(): number {
    return this.a * this.a * this.a;
  }
}
let kub = new Kub(3);
console.log(`Kub yuzasi: ${kub.getArea()} kvadrat birlik`);
console.log(`Kub hajmi: ${kub.getHajim()} kub birlik`);

//--------------------------------------------------------------------------------------- Polymorphism -------------------------------------------------------------------------------------------------\\

class MathAdd {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}
//----------------StringConcat--------------\\
class StringConcat extends MathAdd {
  constructor() {
    super();
  }
  add(a: any, b: any): any {
    return a + b;
  }
}

let stringConcat: StringConcat = new StringConcat();
console.log(stringConcat.add("Hello, ", "World!"));

//----------------ArrayMerge--------------\\
class ArrayMerge extends MathAdd {
  constructor() {
    super();
  }
  add(a: any, b: any): any {
    return [...a, ...b];
  }
}

let arrayMerge: ArrayMerge = new ArrayMerge();
console.log(arrayMerge.add([1, 2, 3], [4, 5, 6]));
//----------------ObjectMerge--------------\\
class ObjectMerge extends MathAdd {
  constructor() {
    super();
  }
  add(a: any, b: any): any {
    return { ...a, ...b };
  }
}

let objectMerge: ObjectMerge = new ObjectMerge();
console.log(objectMerge.add({ a: 1, b: 2 }, { c: 3, d: 4 }));
