function solve(description) {
  const heroes = description.map((hero) => {
    const [name, levelStr, items] = hero.split(" / ");
    return {
      name,
      level: Number(levelStr),
      items: items ? items.split(", ") : [],
    };
  });

  return JSON.stringify(heroes);
}

console.log(
  solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);

console.log(solve(["Jake / 1000 / Gauss, HolidayGrenade"]));
