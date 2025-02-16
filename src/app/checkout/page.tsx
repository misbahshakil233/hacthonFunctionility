"use client"; // ✅ Ensure this is at the top

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./action";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    createPaymentIntent().then((res) => {
      setClientSecret(res.clientSecret);
    });
  }, []);

  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h1>Checkout</h1>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        {/* ✅ Wrap the search params in Suspense */}
        <Suspense fallback={<div>Loading Checkout...</div>}>
          <CheckoutContent />
        </Suspense>
      </Elements>
    </div>
  );
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const total = searchParams.get("total");
  const products = searchParams.get("products");

  return <PaymentForm total={total} products={products} />;
}

interface PaymentFormProps {
  total: string | null;
  products: string | null;
}

function PaymentForm({ total, products }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message || "An unknown error occurred");
      setIsProcessing(false);
    } else {
      setErrorMessage(null);
      alert("Payment successful!");

      // ✅ Correctly passing query parameters
      router.push(`/success?amount=${total}&products=${products}`);

      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
    </form>
  );
}
