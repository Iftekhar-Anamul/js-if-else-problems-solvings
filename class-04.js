// friday te sopner bazar

// offer 1: 550 Taka er  shopping e jodi bkash payment koren, 50 taka cashback paben

// offer 2 : 1010 Taka er shopping e Visa card diye payment koren, 100 taka discount paben

// offer 3 :  5500 taka er shopping e Bkash/Nagad e pay korle 100 tka cashback,  visa card diye payment korle 5% discount upto 500

var totalAmt = 15000;

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
