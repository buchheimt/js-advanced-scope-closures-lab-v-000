const produceDrivingRange = (range) => {
  return function(locationA, locationB) {
    distance = Math.abs(parseInt(locationA) - parseInt(locationB));
    if (distance <= range) {
      return `within range by ${Math.abs(range - distance)}`;
    } else {
      return `${Math.abs(range - distance)} blocks out of range`;
    }
  }
}

const produceTipCalculator = (rate) => {
  return function(fare) {
    return fare * rate;
  }
}

const createDriver = () => {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
