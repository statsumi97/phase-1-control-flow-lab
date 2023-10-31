function scuberGreetingForFeet(someNumber){
  let result;
  if (someNumber <= 400) {
  return 'This one is on me!';
} else if (someNumber <= 2000) {
  return 'That will be twenty bucks.';
} else if (someNumber > 2000 && someNumber < 2500) {
  return 'I will gladly take your thirty bucks.';
} else if (someNumber > 2500) {
  return 'No can do.';
}
}

function ternaryCheckCity(someCity){
  let cityResult;
  if (someCity === 'NYC') {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(someCharm){
  let charmResult;
  switch (someCharm) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}