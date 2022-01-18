 const first = () => {
     const greet = 'hi';
     const second =  () => {
         alert(greet);
     }
     return second
 }

 const newFunc = first()
 newFunc();
// Curriyng - (Rozwijanie funkcji)
  const multiply = (a, b) => a * b;
  const curriedMultiply = (a) => (b) => a * b; 
  const multiplyBy3 = curriedMultiply(3) //Creates a function which always multiplies by 3 
//Tests
  const divide = (a, b) => a / b;
  const curriedDivide = (a) => (b) => a / b; 
  const divideBy10 = curriedDivide(10) // creates a function which always divdes by 10

//Compose 

const compose = (f, g) => (a) => f(g(a)); 

const sum = (num) => num + 1; 

compose(sum, sum)(5); 