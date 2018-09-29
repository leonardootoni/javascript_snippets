const getTip = amount => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    throw Error("Amount is not a number");
  }
};

try {
  const result = getTip(true);
} catch (error) {
  console.log(error);
}
