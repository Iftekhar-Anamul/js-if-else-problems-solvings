// ৪. েছর দিপ ইয়ার দিনা তা বেি িরা
// একটি েছর ইনপুি নাও। যদি েছরটি ৪ দিজয় ভাগ যায় এেং ১০০ দিজয় ভাগ না যায়, অথো ৪০০
// দিজয় ভাগ যায়, তাহজে এটি দেপ ইয়ার।

var year;

year = 2100;

if (year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else if (year % 4 === 0) {
  if (year % 100 !== 0) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
} else {
  console.log(`${year} is not a leap year`);
}
