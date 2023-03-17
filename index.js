// Code your solution in this file!

function distanceFromHqInBlocks(val) {
   return Math.abs(val - 42)
}

function distanceFromHqInFeet(val) {
   return (distanceFromHqInBlocks(val) * 264)
}

function distanceTravelledInFeet(s, d) {
   return (Math.abs(d - s) * 264)
}

function calculatesFarePrice(s, d) {
   const feet = distanceTravelledInFeet(s, d)

   if (feet <= 400) {
     return 0;
   } else if (feet > 2500) {
     return 'cannot travel that far'
   } else if (feet < 2000) {
     return ((feet - 400) * 2) / 100
   } else {
     return 25
   }
}
