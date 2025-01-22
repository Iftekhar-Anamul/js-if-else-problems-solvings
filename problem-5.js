// ৫. ব াড় এেং ৫ এর গুদর্তি বেি িরা
// একটি সংখ্যা ইনপুি নাও। যদি সংখ্যা ব াড় হয় এেং ৫ দিজয় দেভা য হয়, তাহজে "Even and
// divisible by 5" দিন্ট কজরা। অনযথায়, "Not both" দিন্ট কজরা।

var number;

number = 20;

if (number % 2 === 0) {
  if (number % 5 === 0) {
    console.log(`${number} Even and divisible by 5`);
  } else {
    console.log(`${number} Even but not divisible by 5`);
  }
} else {
  console.log("Not both");
}
