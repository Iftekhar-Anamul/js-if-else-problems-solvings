// ৩. ATM িযাশ দডজপজেজে বেি 
// একটি অযাকাউন্ট েযাজেন্স এেং উজতােন করার পদরমাণ ইনপুি নাও। িতধগুজো: 
// • যদি উজতােন করার পদরমাণ েযাজেজন্সর সমান ো কম হয়, "Transaction Successful" 
// দিন্ট কজরা। 
// • যদি উজতােন করার পদরমাণ েযাজেজন্সর বেজয় বেদি হয়, "Insufficient Balance" দিন্ট 
// কজরা। 
// • যদি উজতােন করার পদরমাণ ৫০০ এর কম হয়, "Minimum withdrawal is 500" দিন্ট 
// কজরা। 



var bankBalance; 

var drawing;


bankBalance = 1000;

drawing = 900;

if (drawing >= 500) {
    if (drawing <= bankBalance) {
        console.log("Transaction Successful");
    } else if (drawing >= bankBalance) {
console.log("Insufficient Balance");
    }
} else {
    console.log("Minimum Withdrawal is 500");
}