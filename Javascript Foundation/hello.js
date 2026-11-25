// console.log: text ko terminal mein print karta hai
// end mein naya line (\n) apne aap lagata hai
console.log("hello world!");

// ye bhi alag line mein print hoga, kyunki log naya line deta hai
console.log("Hello chai");

// process.stdout.write: sirf string print karta hai
// naya line NAHI lagata, isliye "chai" upar wali line ke baad
// aur aage ke output se judkar aayega
// naya line chahiye to "chai\n" likhna padega
process.stdout.write("chai");

// console.table: object/array ko table (rows aur columns) ki shakal mein dikhata hai
// yahan "city" row banegi aur uski value 'Jaipur' dikhegi
// dhyan dein: write ne naya line nahi diya, to table ki pehli line
// "chai" ke saath ek hi line par shuru ho sakti hai
console.table({ city: "Jaipur" });

// console.warn: log jaisa hi print karta hai, lekin ise warning maana jata hai
// ye stderr mein jata hai (stdout mein nahi)
// browser mein ye peele (yellow) rang mein dikhta hai
console.warn({ city: "Jaipur" });
