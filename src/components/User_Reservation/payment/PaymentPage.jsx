import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";

import React, { useState } from "react";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [paymentType, setPaymentType] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const paymentOptions = {
    tossPayments: ["계좌이체", "가상계좌", "휴대폰"],
    card: [
      "신한",
      "KB국민",
      "하나",
      "삼성",
      "현대", // ... other card companies
    ],
    easypay: [
      "토스페이",
      "네이버페이",
      "카카오페이", // ... other easy pay companies
    ],
  };

  // Update paymentType options whenever paymentMethod changes
  useState(() => {
    setPaymentType(paymentOptions[paymentMethod][0]);
  }, [paymentMethod]);

  const handleMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const generateRandomString = () => window.btoa(Math.random()).slice(0, 20);

  const handlePayment = async () => {
    const paymentData = {
      amount: 15000,
      orderId: generateRandomString(),
      orderName: "토스 티셔츠 외 2건",
      customerName: customerName || "이름 미입력",
      customerEmail: customerEmail || "이메일 미입력",
      successUrl: window.location.origin + "/success",
      failUrl: window.location.origin + "/fail",
    };

    const tossPayments = await loadPaymentWidget(
      "test_ck_ma60RZblrqKWmJwnNvgW3wzYWBn1"
    ); // Use your actual client key
    await tossPayments
      .requestPayment(paymentMethod, paymentData)
      .then((response) => {
        // Handle success response
        console.log("Payment successful: ", response);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Payment failed: ", error);
      });
  };

  return (
    <div className="box_section" style={{ width: "600px" }}>
      {/* Radio Buttons for Payment Method */}
      {Object.keys(paymentOptions).map((method) => (
        <div key={method}>
          <input
            type="radio"
            id={method}
            name="method"
            value={method}
            checked={paymentMethod === method}
            onChange={handleMethodChange}
          />
          <label htmlFor={method}>
            {method === "card"
              ? "카드"
              : method === "easypay"
              ? "간편결제"
              : "기타 결제수단"}
          </label>
        </div>
      ))}

      {/* Dropdown for Payment Types */}
      <select value={paymentType} onChange={handlePaymentTypeChange}>
        {paymentOptions[paymentMethod].map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* Customer Information */}
      <input
        type="text"
        placeholder="이름(선택)"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <input
        type="email"
        placeholder="이메일 입력(선택)"
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
      />

      {/* Payment Button */}
      <button onClick={handlePayment}>결제하기</button>
    </div>
  );
}
