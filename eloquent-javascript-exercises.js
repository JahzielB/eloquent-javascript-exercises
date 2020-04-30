(function(){
    "use strict";

    // Looping a triangle
    for (let i = '#'; i.length < 8; i = i + '#') {
        console.log(i);
    }

    //FizzBuzz
    for (let number = 1; number <= 100; number++) {
        if (number % 5 == 0 && number % 3 == 0) {
            console.log("FizzBuzz");
        } else if (number % 3 == 0) {
            console.log("Fizz");
        } else if (number % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(number);
        }
    }
})();