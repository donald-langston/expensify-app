const isAdult = adult => adult >= 18;

const canDrink = adult => adult >= 21;

const isSenior = senior => senior >= 65;

export { isAdult, canDrink, isSenior as default };