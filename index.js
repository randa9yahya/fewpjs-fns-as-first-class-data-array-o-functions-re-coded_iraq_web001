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
 let b = routine[1](dogName,dogBreed)
 let c = routine[2](dogName,dogBreed)
 let d = routine[3](dogName,dogBreed)
 let e = routine[4](dogName,dogBreed)
 let f = routine[5](dogName,dogBreed)
 let value =[a,b,c,d,e,f]
 return value;
}




زينب عزام, [15.05.20 16:41]
function wakeDog(dogName, dogBreed)
{
  
  console.log(`Wake ${dogName} the ${dogBreed}`);
  let ret=`Wake ${dogName} the ${dogBreed}`
  return ret;
}
function leashDog (dogName, dogBreed)
{
  
  console.log(`Leash ${dogName} the ${dogBreed}`);
  let ret=`Leash ${dogName} the ${dogBreed}`
  return ret;
}
function walkToPark (dogName, dogBreed)
{
  
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  let ret=`Walk to the park with ${dogName} the ${dogBreed}`
  return ret;
}
function throwFrisbee(dogName, dogBreed)
{
  
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  let ret=`Throw the frisbee for ${dogName} the ${dogBreed}`
  return ret;
  
}
function walkHome(dogName, dogBreed)
{
  
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
   let ret=`Walk home with ${dogName} the ${dogBreed}`
  return ret;
}
function unleashDog (dogName, dogBreed)
{
  
  console.log(`Unleash ${dogName} the ${dogBreed}`);
   let ret=`Unleash ${dogName} the ${dogBreed}`
  return ret;
}

let routine =[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog (dogName, dogBreed)
{
  let routine =[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
 let a=routine[0](dogName, dogBreed)
 let b=routine[1](dogName, dogBreed)
 let c=routine[2](dogName, dogBreed)
 let d=routine[3](dogName, dogBreed)
 let e=routine[4](dogName, dogBreed)
 let f=routine[5](dogName, dogBreed)
 let g=[a,b,c,d,e,f]
 return g ;
  
  
}