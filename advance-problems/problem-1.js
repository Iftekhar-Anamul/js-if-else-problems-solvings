// ১. ই-িমাসণ দডসিাউন্ট িযািি জিশন
// একটি পজণযর মূেয ইনপুি নাও। িতধগুজো এইভাজে িাও:
// • যদি মূেয ৫০০ এর বেদি হয়, ২০% দডসকাউন্ট।
// • যদি ২০০ বথজক ৫০০ এর মজযয হয়, ১০% দডসকাউন্ট।
// • যদি ২০০ এর কম হয়, বকাজনা দডসকাউন্ট বনই। দডসকাউজন্টর পর মূে িাম বের কজর
// দিন্ট কজরা।

var price;

price = 500;

if (price >= 500) {
  var discount = (price * 20) / 100;

  var afterDiscountPrice = price - discount;

  console.log(
    `Regular price is ${price} after getting 20% Product price is ${afterDiscountPrice} and here you got ${discount} Taka.`
  );
} else if (price >= 200) {
  var discount = (price * 10) / 100;

  var afterDiscountPrice = price - discount;

  console.log(
    `Regular price is ${price} after getting 10% Product price is ${afterDiscountPrice} and here you got ${discount} Taka.`
  );
} else {
  console.log("no discount");
}
