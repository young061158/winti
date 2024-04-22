import React, { useState, useEffect } from "react";

function PaymentConfirmation() {
  const [responseData, setResponseData] = useState({});
  const urlParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    async function confirmPayment() {
      try {
        const requestData = {
          paymentKey: urlParams.get("paymentKey"),
          orderId: urlParams.get("orderId"),
          amount: urlParams.get("amount"),
        };

        const response = await fetch("/confirm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        const data = await response.json();

        if (!response.ok) {
          // TODO: Handle payment failure as per business logic
          console.error(data);
          window.location.href = `/fail?message=${data.message}&code=${data.code}`;
          return;
        }

        // TODO: Handle payment success as per business logic
        setResponseData(data);
      } catch (error) {
        console.error("Error confirming payment:", error);
      }
    }

    confirmPayment();
  }, []); // Ensure this only runs once on component mount

  return (
    <div>
      <div className="box_section" style={{ width: "600px" }}>
        <img
          width="100px"
          src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png"
          alt="Payment Successful"
        />
        <h2>결제를 완료했어요</h2>

        <div className="p-grid typography--p" style={{ marginTop: "50px" }}>
          <div className="p-grid-col text--left">
            <b>결제금액</b>
          </div>
          <div className="p-grid-col text--right">
            {urlParams.get("amount")}원
          </div>
        </div>
        <div className="p-grid typography--p" style={{ marginTop: "10px" }}>
          <div className="p-grid-col text--left">
            <b>주문번호</b>
          </div>
          <div className="p-grid-col text--right">
            {urlParams.get("orderId")}
          </div>
        </div>
        <div className="p-grid typography--p" style={{ marginTop: "10px" }}>
          <div className="p-grid-col text--left">
            <b>paymentKey</b>
          </div>
          <div
            className="p-grid-col text--right"
            style={{ whiteSpace: "initial", width: "250px" }}
          >
            {urlParams.get("paymentKey")}
          </div>
        </div>
        <div className="p-grid">
          <button
            className="button p-grid-col5"
            onClick={() =>
              (window.location.href =
                "https://docs.tosspayments.com/guides/payment/integration")
            }
          >
            연동 문서
          </button>
          <button
            className="button p-grid-col5"
            onClick={() =>
              (window.location.href = "https://discord.gg/A4fRFXQhRu")
            }
            style={{ backgroundColor: "#e8f3ff", color: "#1b64da" }}
          >
            실시간 문의
          </button>
        </div>
      </div>

      <div
        className="box_section"
        style={{ width: "600px", textAlign: "left" }}
      >
        <b>Response Data :</b>
        <div style={{ whiteSpace: "initial" }}>
          <pre>{JSON.stringify(responseData, null, 4)}</pre>
        </div>
      </div>
    </div>
  );
}

export default PaymentConfirmation;
