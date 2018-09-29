const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  };
};

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();
console.log(counter.get());

//Adder
const createAdder = a => {
  return b => {
    return a + b;
  };
};
const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));

//Tip calculator function
const createTipper = tipPercent => {
  return amount => {
    return amount * tipPercent;
  };
};
const tipBase15 = createTipper(0.15);
const tipBase20 = createTipper(0.2);
console.log(`15% Tip for $350 bill is ${tipBase15(350)}`);
console.log(`20% Tip for $350 bill is ${tipBase20(350)}`);
