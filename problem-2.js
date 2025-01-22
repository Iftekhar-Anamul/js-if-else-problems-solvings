// ২. দতনটি সংখ্যার মজযয সেজেজয় েড়টি খ্ ুঁজ  বের িরা
// দতনটি সংখ্যা ইনপুি নাও। যদি িথমটি সেজেজয় েড় হয়, তাহজে কনজসাজে "Number 1 is largest"
// দিন্ট করজে, অনযথায় দিতীয় ো ততীয়টি বেক করজে।

var numberOne = 10;

var numberTwo = 8;

var numberThree = 10;

if (numberOne > numberTwo) {
  if (numberOne > numberThree) {
    console.log("Number 1 is largest");
  } else if (numberOne === numberThree) {
    console.log("numberOne and NumberThree is Equal.");
  } else {
    console.log("number Tree is largest");
  }
} else if (numberTwo < numberThree) {
  console.log("number three is largest");
} else if (numberOne === numberTwo) {
  console.log("numberOne and NumberTwo is Equal.");
} else {
  console.log("numberTwo is largest");
}
