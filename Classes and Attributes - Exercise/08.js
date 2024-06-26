function solve(data) {
  const bottles = new Map();
  const quantities = {};

  for (const record of data) {
    const [juice, quantity] = record.split(" => ");
    if (!quantities.hasOwnProperty(juice)) {
      quantities[juice] = 0;
    }
    quantities[juice] += Number(quantity);

    const bottlesQt = Math.floor(quantities[juice] / 1000);
    if (bottlesQt) {
      quantities[juice] = quantities[juice] % 1000;
      if (!bottles.has(juice)) {
        bottles.set(juice, 0);
      }
      bottles.set(juice, bottles.get(juice) + bottlesQt);
    }
  }

  for (const juice of bottles.entries()) {
    console.log(`${juice[0]} => ${juice[1]}`);
  }
}
