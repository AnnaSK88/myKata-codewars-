//1
//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
//     if (flower1%2==0 & flower2%2==0) {
//         return false;
//     } else if (flower1%2==1 & flower2%2==1){
//         return  false;
//     } else{
//         return true;
//     }
//   }
    return (flower1+flower2)%2 === 1
}

//   console.log(lovefunc(1,4))//, true)
//   console.log(lovefunc(2,2))//, false)
//   console.log(lovefunc(67,9))//false

  //2
//Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
    return Math.floor(time*0.5);
  }

//   console.log(litres(2))//1
//   console.log(litres(1.4))//0
//   console.log(litres(12.3))//6
//   console.log(litres(0.82))//0
//   console.log(litres(11.8))//5

//   //3
  //Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

  sortme = function( names ){
      return names.sort()
}
//console.log(sortme(['one', 'two', 'three' ]))//, ["one", "three", "two"])