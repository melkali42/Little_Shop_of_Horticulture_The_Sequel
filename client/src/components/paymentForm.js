const stripe = Stripe('pk_test_51NzrhlK6KnLQXk3Mf37SdygAwYl5LoYDejbDVwIbnQXfVVQ95agwqGIjHQO2mBaKICtxFBRa9uj7SUN6Ab2FkllM00l8VJuB42', {
    locale: 'en',
    style: {
        base: {
            color: '#32325d',
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#fa755a',
        },
    },
});

const elements = stripe.elements();
const cardElement = elements.create('card');
cardElement.mount('#card-element');

const form = document.getElementById('payment-form');
const errorElement = document.getElementById('error-message');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        const { token, error } = await stripe.createToken(cardElement);

        if (error) {
            displayError(error);

            console.error('Stripe error:', error);
        } else {
            const response = await fetch('/process-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: token.id, amount: 30, currency: 'USD' }),
                // Placeholder, will need to update to pull actual payment amount once add to cart is ready
            });

            if (response.ok) {
                // Payment was successful
                // If time, add a thank you/payment success redirect
            } else {
                // Payment failed
                const errorData = await response.json();
                displayError(errorData.message);

                console.error('Payment processing error:', errorData.message);
            }
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        displayError('An unexpected error occurred. Please try again.');
    }
});

function displayError(error) {
    if (errorElement) {
        errorElement.textContent = errorElement.textContent = error;
    }
}