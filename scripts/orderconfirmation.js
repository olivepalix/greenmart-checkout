
    document.addEventListener('DOMContentLoaded', (event) => {
    const orderForm = document.getElementById('order-form');

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
        { labelText: 'First Name:', type: 'text', id: 'first-name', name: 'first-name' },
        { labelText: 'Last Name:', type: 'text', id: 'last-name', name: 'last-name' },
        { labelText: 'Email:', type: 'email', id: 'email', name: 'email' }
    ];

    const deliveryDetailsFields = [
        { labelText: 'Address:', type: 'text', id: 'address', name: 'address' },
        { labelText: 'City:', type: 'text', id: 'city', name: 'city' },
        { labelText: 'Postal Code:', type: 'number', id: 'postal-code', name: 'postal-code' }
    ];

    const paymentInformationFields = [
        { labelText: 'Card Number:', type: 'text', id: 'card-number', name: 'card-number' },
        { labelText: 'Expiry Date:', type: 'date', id: 'expiry-date', name: 'expiry-date' },
        { labelText: 'CVV:', type: 'text', id: 'cvv', name: 'cvv' }
    ];

    orderForm.appendChild(createFieldset('Personal Details', personalDetailsFields));
    orderForm.appendChild(createFieldset('Delivery Details', deliveryDetailsFields));
    orderForm.appendChild(createFieldset('Payment Information', paymentInformationFields));

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Pay now';
    orderForm.appendChild(submitButton);
});

    
