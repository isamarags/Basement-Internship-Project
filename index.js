function printNumber() {
    let number;
    let limite = 100;

    for(number = 1; number <= limite; number++) {
        if (number % 3 === 0) {
            console.log("Fizz");
        } else if (number % 5 === 0) {
            console.log("Buzz");
        } else if (number % 3 === 0 && number % 5 === 0) {
            console.log("Fizz Buzz");
        }else{
            console.log(number);
        }

    }

}

    printNumber();