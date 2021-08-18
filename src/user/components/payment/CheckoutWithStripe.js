import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutWithStripe(props) {
  const onToken = async (token) => {
    token.amount = props.rent;
    token.raisedby = props.user;
    token.property = props.property;
    token.charge_id = token.id;
    await fetch("http://localhost:4000/api/payments/", {
      method: "POST",
      body: JSON.stringify(token),
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast("Property has been booked successfully!");
  };
  return (<>
      <StripeCheckout
        amount={props.rent}
        name="STRIPE_INTEGRATION"
        image="https://stripe.com/img/documentation/checkout/marketplace.png"
        stripeKey="pk_test_51JKPZtSC3qs2Ltk2Vwz7abIAQIJRoHusnyaLznzoiLC0BKqWVUTXsEdVfbsdJl8UjNVna7PCsN5fz96XAafySghQ00BbFnHysw"
        currency="INR"
        token={onToken}
      />
      <ToastContainer />
    </>
  );
}
