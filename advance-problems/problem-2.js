// ২. পাসওয়াডণ যাোই দসজেম
// একটি পাসওয়াডধ ইনপুি নাও। িতধগুজো:
// • যদি পাসওয়াডধটি "Admin@123" হয়, "Login Successful" দিন্ট কজরা।
// • যদি পাসওয়াডধটি ভে হয়, "Incorrect Password" দিন্ট কজরা।
// • পাসওয়াডধ ইনপুি না দিজে "Password cannot be empty" দিন্ট কজরা।

var password;

password = "";

if (password === "Admin@123") {
  console.log("Login Successful");
} else if (password === "") {
  console.log("Password cannot be empty");
} else {
  console.log("Incorrect Password");
}
