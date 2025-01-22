var totalAmt = 1010;

var paymentMethod = "visa";

if (paymentMethod === "bkash") {
  if (totalAmt >= 5500) {
    console.log("you got 100 taka discount for paying using bkash!");
  } else if (totalAmt >= 550) {
    console.log("you got 50 taka cashback paying using bkash");
  }
} else if (paymentMethod === "nagad") {
  if (totalAmt >= 5500) {
    console.log("you got 100 taka cashback paying using nagad");
  }
} else if (paymentMethod === "visa") {
  if (totalAmt >= 5500) {
    var discount = (totalAmt * 5) / 100;
    if (discount < 500) {
      console.log(`you got ${discount} taka for paying using visa card!!`);
    } else {
      console.log("you got 500 taka for paying using visa card!");
    }
  } else if (totalAmt >= 1010) {
    console.log("you got 100 taka for paying using visa card!!!");
  }
}
