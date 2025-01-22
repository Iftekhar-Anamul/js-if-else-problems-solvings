// ৫. দে ো  বগ্ম 
// ১ বথজক ১০০ পযধন্ত সংখ্যার  নয: 
// • যদি সংখ্যা ৩ দিজয় দেভা য হয়, "Fizz" দিন্ট কজরা। 
// • যদি সংখ্যা ৫ দিজয় দেভা য হয়, "Buzz" দিন্ট কজরা। 
// • যদি সংখ্যা ৩ এেং ৫ িুজিা দিজয়ই দেভা য হয়, "FizzBuzz" দিন্ট কজরা। 
// • অনযথায় শুযু সংখ্যাটি দিন্ট কজরা। 


var number;

number = 50;

if (number % 3 === 0) {
    if (number % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log("Fizz");
    }
} else if (number % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(number);
}