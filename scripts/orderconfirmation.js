document.addEventListener('DOMContentLoaded', (event) => {
    const orderForm = document.getElementById('order-form');
    const thankYouMessageDiv = document.getElementById('thank-you-message');

    function createFieldset(legendText, fields) {
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = legendText;
        fieldset.appendChild(legend);

        fields.forEach(field => {
            const label = document.createElement('label');
            label.setAttribute('for', field.id);
            label.textContent = field.labelText;

            const input = document.createElement('input');
            input.setAttribute('type', field.type);
            input.setAttribute('id', field.id);
            input.setAttribute('name', field.name);

            fieldset.appendChild(label);
            fieldset.appendChild(input);
            fieldset.appendChild(document.createElement('br'));
        });

        return fieldset;
    }

    const personalDetailsFields = [
        { labelText: 'First Name:', type: 'text', id: 'first-name', name: 'first-name', required: true },
        { labelText: 'Last Name:', type: 'text', id: 'last-name', name: 'last-name', required: true },
        { labelText: 'Email:', type: 'email', id: 'email', name: 'email', required: true }
    ];

    const deliveryDetailsFields = [
        { labelText: 'Address:', type: 'text', id: 'address', name: 'address', required: true },
        { labelText: 'City:', type: 'text', id: 'city', name: 'city', required: true },
        { labelText: 'Postal Code:', type: 'number', id: 'postal-code', name: 'postal-code', required: true }
    ];

    const paymentInformationFields = [
        { labelText: 'Card Number:', type: 'text', id: 'card-number', name: 'card-number', required: true, pattern: "\\d{16}", maxlength: 16 },
        { labelText: 'Expiry Date:', type: 'month', id: 'expiry-date', name: 'expiry-date', required: true },
        { labelText: 'CVV:', type: 'text', id: 'cvv', name: 'cvv', required: true, maxlength: 3 }
    ];

    orderForm.appendChild(createFieldset('Personal Details', personalDetailsFields));
    orderForm.appendChild(createFieldset('Delivery Details', deliveryDetailsFields));
    orderForm.appendChild(createFieldset('Payment Information', paymentInformationFields));

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Pay now';
    orderForm.appendChild(submitButton);

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const postalCode = document.getElementById('postal-code').value;
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        // Basic validation
        if (!firstName || !lastName || !email || !address || !city || !postalCode || !cardNumber || !expiryDate || !cvv) {
            alert('Please fill out all fields.');
            return;
        }

        // Validate card number length
        if (cardNumber.length !== 16) {
            alert('Card number must be 16 digits.');
            return;
        }

        // Validate CVV length
        if (cvv.length !== 3) {
            alert('CVV must be 3 digits.');
            return;
        }

        // Validate expiry date
        const currentDate = new Date();
        const [expiryYear, expiryMonth] = expiryDate.split('-');
        const cardExpiryDate = new Date(expiryYear, expiryMonth - 1);

        if (cardExpiryDate < currentDate) {
            alert('Card has expired.');
            return;
        }

        // If all validations pass
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 7); // Add 7 days for delivery

        thankYouMessageDiv.innerHTML = `
            <p>Thank you for your purchase, ${firstName} ${lastName}!</p>
            <p>Your order will be delivered to ${address}, ${city}, ${postalCode}.</p>
            <p>Estimated delivery date: ${deliveryDate.toDateString()}</p>
        `;
        thankYouMessageDiv.style.display = 'block';
    });
});

