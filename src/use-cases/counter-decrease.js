
export const downCounter = (counter) => {

    if (counter > 0) {
        counter--;
    }
    else{
        // shows error in console uwu
        console.warn("Negative numbers are not allowed");
        return 0;   // In this scope the function always return 0, does no exist negative numbers
    }

    return counter;
    // If you read this, i hate u 
}
