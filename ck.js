//reverse a string
function reversed(ch)
{
  var ch2=[]
  for(var i=ch.length-1;i>=0;i--)
  {
    ch2.push(ch[i])
  }
  return ch2
}
mot="hello"
console.log(reversed(mot))
//Create a function that counts the number of characters in a string.
function count1(ch)
{
  var n=0
  for(var i=0 ; i<ch.length;i++)
  {
    n++
  }
  return n
}
console.log(count1("hello"))


function capitalizeWords(sentence) {
  let words = sentence.split(" "); 
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
  }
  return words.join(" "); 
}

console.log(capitalizeWords("bonjour tout le monde")); // Output: "Bonjour Tout Le Monde"



//array
//Write functions to find the maximum and minimum values in an array of numbers.
function maximini(arr) {
   var max = arr[0];
  var min = arr[0];
 
  for (var i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }

   return [max, min];
}

 var arr = [1, 4, 9, -1, 7, 5];
console.log(maximini(arr));   
//Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumofarray(arr)
{
  var s=0
  for(var i=0;i<arr.length ;i++)
  {
    s=s+arr[i]
  }
  return s
}
var arr = [1, 4, 9, -1, 7, 5];
console.log(sumofarray(arr))



function filterArray(array, condition) {
   const filteredArray = [];

   for (let i = 0; i < array.length; i++) {
     if (condition(array[i])) {
      filteredArray.push(array[i]); // Ajouter l'élément au tableau filtré s'il passe la condition
    }
  }

   return filteredArray;
}
 
var numbers = [1, 2, 3, 4, 5, 6];
var isEven = num => num % 2 === 0;  
console.log(filterArray(numbers, isEven)); 
 
//Factorial: Write a function to calculate the factorial of a given number.
function fact(n)
{
  if(n==1 || n==0)
  {
    return 1
  }
  var s=1
  for(var i=1 ; i<=n ;i++)
  {
    s=s*i
  }
  return s
}
console.log(fact(1))
console.log(fact(3))
console.log(fact(5))


 function prime(n) {
   if (n <= 1) {
    return false;
  }
 
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;   
    }
  }

   return true;
}

console.log(prime(1)); // false
console.log(prime(3)); // true
console.log(prime(6)); // false


function generateFibonacci(n) {
  let fib = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) fib.push(0);
    else if (i === 1) fib.push(1);
    else fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

console.log(generateFibonacci(6)); //[0, 1, 1, 2, 3, 5]
