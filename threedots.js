const ages = [20, 30 , 33, 44, 20];
const ages2 = [10, 20, 30, 50, 60];
const ages3 = [100, 200, 300, 500, 700];
// console.log( ages.concat(ages2, ages3) );

const allAges = [...ages, ...ages2, 5, 10, ...ages3];

const max = Math.max(ages, ages2, ages3);
const max2 = Math.max(...ages, ...ages2, ...ages3);
console.log( max2 );

