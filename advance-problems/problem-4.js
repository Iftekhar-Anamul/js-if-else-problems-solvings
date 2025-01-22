// ৪. ইজমইি এেং পাসওয়াডণ যাোই
// ইজমইে এেং পাসওয়াডধ ইনপুি নাও। িতধগুজো:
// • যদি ইজমইে "user@example.com" এেং পাসওয়াডধ "123456" হয়, "Welcome User"
// দিন্ট কজরা।
// • যদি ইজমইে ভে হয়, "Invalid Email" দিন্ট কজরা।
// • যদি ইজমইে সটিক হয় দকন্তু পাসওয়াডধ ভে হয়, "Invalid Password" দিন্ট কজরা।

var email;

var password;

email = "user@example.com";
password = 123456;

if (email === "user@example.com") {
  if (password === 123456) {
    console.log("Welcome User");
  } else {
    console.log("Invalid Password");
  }
} else {
  console.log("Invalid Email");
}
