function monthlyPayment () {
var loanBalance = document.getElementById("loanBalance").value;
var rate = document.getElementById("interestRate").value;
var loanTerm = document.getElementById("loanTerm").value;
var period = document.getElementById("period").value;


var monthlyInterestRate = (rate / 100) / period;

var numberOfPayments = loanTerm * period;

var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);

var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

var monthlyPayment = loanBalance * interestQuotient;

var total = document.createElement("p");
total.innerHTML = "Your New Total is " + monthlyPayment;
document.getElementById('singlebutton').appendChild(total);
}