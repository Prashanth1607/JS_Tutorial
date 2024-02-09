// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    //Named iife
    console.log('DB Connected');
})();

( (name) => {
    //unnamed iife
    console.log(`Db ${name}`);
})('hitesh')


