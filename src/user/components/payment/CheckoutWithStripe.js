import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SERVER_URL } from "constant";

export default function CheckoutWithStripe(props) {
  const onToken = async (token) => {
    props.handleBookProperty();
    toast("Property has been booked successfully!");
    token.amount = props.rent;
    token.raisedby = props.user._id;
    token.name = props.user.firstName + props.user.lastName;
    token.property_name = props.property.name;
    token.date = new Date();
    token.property_id = props.property._id;
    token.charge_id = token.id;
    await fetch(`${SERVER_URL}/api/payments/`, {
      method: "POST",
      body: JSON.stringify(token),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const params = {
      ...props.user,
      property: props.property,
      onboardedAt: new Date(),
    };
    props.updateUser({ id: props.user._id, params });
  };

  const formatRent = (amount) => {
    const rent = amount * 100;
    return rent;
  };

  return (
    <>
      <StripeCheckout
        amount={formatRent(props.rent)}
        name="STRIPE_INTEGRATION"
        image="https://stripe.com/img/documentation/checkout/marketplace.png"
        stripeKey="pk_test_51JKPZtSC3qs2Ltk2Vwz7abIAQIJRoHusnyaLznzoiLC0BKqWVUTXsEdVfbsdJl8UjNVna7PCsN5fz96XAafySghQ00BbFnHysw"
        currency="INR"
        token={onToken}
        email={props.user.email}
      />
      <ToastContainer />
    </>
  );
}
