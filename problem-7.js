// ৭. মাজসর দিন দনযণ ারর্ 
// একটি মাজসর নাম ইনপুি নাও (বযমন: "January", "February")। কনজসাজে মাসটির দিন সংখ্যা 
// দিন্ট কজরা। উিাহরণ: 
// • "January" হজে দিন্ট করজে "31 days"। 
// • "February" হজে বেক করজে দেপ ইয়ার দকনা এেং "28 or 29 days" দিন্ট করজে। 


var month;

var year;

year = 2025;

month = "february"


if (month === "january") {
    console.log("31 days");
} else {
    if (month === "february") {
        if (year % 400 === 0) {
            console.log("29 days");
        } else if (year % 4 === 0) {
           if (year % 100 !== 0) {
            console.log("29 days")
           } else {
            console.log("28 days")
           }
        } else {
            console.log("28 days")
        }
    }
} 