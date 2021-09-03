{
  const func1 = function () {
    func2();
  };
  const func2 = function () {
    func4();
  };
  const func3 = function () {};
  const func4 = function () {
    car = new Car();
    car.funcX();
  };
  const Car = function () {
    this.brand = "volvo";
    this.color = "red";
    this.funcX = function () {
      this.funcY();
    };
    this.funcY = function () {
      this.funcZ();
    };
    this.funcZ = function () {
      console.trace(`trace car1`);
    };
  };
  func1();
}
{
  var car;
  const func1 = function () {
    func2();
  };
  const func2 = function () {
    func4();
  };
  const func3 = function () {};
  const func4 = function () {
    car = new Car();
    car.funcX();
  };
  const Car = function () {
    this.brand = `volvo`;
    this.color = `red`;
    this.funcX = function () {
      this.funcY();
    };
    this.funcY = function () {
      this.funcZ();
    };
    this.funcZ = function () {
      console.trace(`trace car1`);
    };
  };
  func1();
}
