function printSquare(n) {

    for (let i = 1; i <= n; i++) {

        let pattern = "";

        for (let j = 1; j <= n; j++) {

            pattern = pattern + "* ";

        }

        console.log(pattern);

    }

}

printSquare(4);


/* Reverse Triangle*/
function printReverseTriangle(n) {

    for (let i = n; i >= 1; i--) {

        let pattern = "";

        for (let j = 1; j <= i; j++) {

            pattern = pattern + "* ";

        }

        console.log(pattern);

    }

}

printReverseTriangle(5);


/* Palindrome*/
function isPalindrome(word) {

    let reverse = "";

    for (let i = word.length - 1; i >= 0; i--) {

        reverse = reverse + word[i];

    }

    if (word == reverse) {

        console.log("Palindrome");

    }

    else {

        console.log("Not a Palindrome");

    }

}

isPalindrome("madam");

isPalindrome("dad");

