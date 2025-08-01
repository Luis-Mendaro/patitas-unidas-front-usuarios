const monthsToYears = (petAge) => {
  let age = "";
  if (petAge < 12) {
    return (age = `${petAge} meses`);
  } else if (petAge >= 12 && petAge < 24) {
    return (age = `1 año`);
  } else {
    return (age = `${Math.floor(petAge / 12)} años`);
  }
};

export default monthsToYears;
