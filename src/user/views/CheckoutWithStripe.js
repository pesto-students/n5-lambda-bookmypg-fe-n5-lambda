import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function CheckoutWithStripe(props) {
  const onToken = (token) => {
    token.amount = props.rent;
    token.email = props.email;
    token.created = new Date();
    console.log("token=====>", token);
    fetch("http://localhost:4000/api/stripe/", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((res) => {
      res.json().then((data) => {
        console.log(`Payment token generated, ${data.name}`);
      });
    });
  };
  return (
    <StripeCheckout
      amount={props.rent}
      name="STRIPE_INTEGRATION"
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      stripeKey="pk_test_51JKPZtSC3qs2Ltk2Vwz7abIAQIJRoHusnyaLznzoiLC0BKqWVUTXsEdVfbsdJl8UjNVna7PCsN5fz96XAafySghQ00BbFnHysw"
      currency="INR"
      email={props.email}
      token={onToken}
    />
  );
}
