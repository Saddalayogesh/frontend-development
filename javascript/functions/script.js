function BillCalculations(productName, price, quantity) {
    const platformFee = 10;
    const totalBill = (price * quantity) + platformFee;

    return totalBill;
}

let totalBill = BillCalculations("Apple", 50, 4);

console.log(`Total Bill: ₹ ${totalBill} ` );



function StudentMarksCalculation(maths, science, social) {
    let totalMarks = maths + science + social;
    let avgMarks = totalMarks / 3;

    return { totalMarks, avgMarks };
}

let result= StudentMarksCalculation(85, 90, 95);

console.log(`Total Marks: ${result.totalMarks}`);
console.log(`Average Marks: ${result.avgMarks.toFixed(2)}`);