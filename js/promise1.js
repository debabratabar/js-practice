const bookTrain = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Train booked"), 2000);
  });

const bookHotel = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Hotel booked"), 2000);
  });

const bookCab = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Cab booked"), 2000);
  });

const planSightseeing = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Sightseeing planned"), 2000);
  });

bookTrain()
  .then((data) => {
    console.log(data);
    return bookHotel();
  })
  .then((data) => {
    console.log(data);
    return bookCab();
  })
  .then((data) => {
    console.log(data);
    return planSightseeing();
  })
  .then((data) => {
    console.log(data);
    console.log("Trip planned 🎉");
  })
  .catch(() => {
    console.log("Something went wrong ❌");
  });