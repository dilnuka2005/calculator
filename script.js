let total = 0;

function addProduct() {
    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;

    if (productName && quantity && price) {
        const totalProductPrice = quantity * price;
        total += totalProductPrice;

        const billBody = document.getElementById("billBody");
        const newRow = billBody.insertRow();
        newRow.insertCell(0).innerText = productName;
        newRow.insertCell(1).innerText = quantity;
        newRow.insertCell(2).innerText = price;
        newRow.insertCell(3).innerText = totalProductPrice;

        // Calculate and display total amount
        let finalAmount = total;

        // Apply discount if total exceeds 5000
        if (total > 5000) {
            const discount = total * 0.10; // 10% discount
            finalAmount = total - discount;
            alert(`A discount of ${discount} has been applied!`);
        }

        document.getElementById("totalAmount").innerText = finalAmount.toFixed(2);

        // Clear the input fields
        document.getElementById("billingForm").reset();
    }
}
