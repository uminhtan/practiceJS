var rectangle = {
    width: 47,
    height: 49,
    getWidth: function () { // assign to a specific object so called Object Method
      console.log(this.width);
    },
    getHeight: function () {
      console.log(this.height);
    },
    getArea: function () {
      console.log(this.width * this.height);
    }
  };
console.log(rectangle.getWidth());