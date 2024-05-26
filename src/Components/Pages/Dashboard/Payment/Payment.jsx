import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
// check out

const CheckoutForm = () => {
  const [error, setError] = useState(" ");
  const [clientSecret, setClientSecret] = useState(" ");
  const [transactionId, setTramsactionId] = useState(" ");

  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  //
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    //

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    //
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[paymentMethod]", paymentMethod);
      setError(" ");
    }
    // Confirm payment

    // const { paymentIntent, error: confirmError } =
    //   await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: card,
    //       billing_details: {
    //         email: user.email || "anonymous",
    //         name: user.displayName || "anonymous",
    //       },
    //     },
    //   });

    // if (confirmError) {
    //   console.log("confirm error");
    // } else {
    //   console.log("[paymentIntent]", paymentIntent);
    // }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email || "anonymous",
            name: user.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm error:", confirmError.message);
    } else if (paymentIntent.status === "succeeded") {
      console.log("[paymentIntent]", paymentIntent);
      setTramsactionId(paymentIntent.id);

      // now save the payment in the database

      const payment = {
        email: user.email,
        name: user.displayName,
        date: new Date(),
        transactionId: paymentIntent.id,
        price: totalPrice,
        cartIds: cart.map((item) => item._id),
        menuIds: cart.map((item) => item.menuId),
        status: "pending",
      };

      const res = await axiosSecure.post("/payment", payment);
      console.log("payment saved", res.data);
    }
  };
  //

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="mt-4 btn btn-sm btn-outline"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && (
        <p className="text-green-500"> Your Transaction ID : {transactionId}</p>
      )}
    </form>
  );
};

const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_pk);
const Payment = () => {
  return (
    <div>
      <h2 className="mb-4 text-2xl">Payment </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
