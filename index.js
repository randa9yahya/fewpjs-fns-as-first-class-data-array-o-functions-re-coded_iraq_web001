function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  let string =`Wake ${dogName} the ${dogBreed}`
  return string;
}
function leashDog(dogName, dogBreed) {
  console.log(`Leash  ${dogName} the ${dogBreed}`);
  let string =`Leash  ${dogName} the ${dogBreed}`
  return string;
}
function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  let string =`Walk to the park with ${dogName} the ${dogBreed}`
  return string;
}
function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  let string =`Throw the frisbee for ${dogName} the ${dogBreed}`
  return string;
}
function walkHome(dogName, dogBreed) {
  console.log(`Walk home with Byron ${dogName} the ${dogBreed}`);
  let string =`Walk home with Byron ${dogName} the ${dogBreed}`
  return string;
}
function unleashDog(dogName, dogBreed) {
 console.log(`Unleash ${dogName} the ${dogBreed}`);
  let string =`Unleash ${dogName} the ${dogBreed}`
  return string;
}

function exerciseDog (dogName,dogBreed){
 let routine=[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
// for(let i=0; i<routine.length; i++){
  // let value = routine[i](dogName,dogBreed)
 //}
 let a = routine[0](dogName,dogBreed)
 return value;
}
