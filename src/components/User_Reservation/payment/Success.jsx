import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function SuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const requestData = {
      orderId: searchParams.get("orderId"),
      amount: searchParams.get("amount"),
      paymentKey: searchParams.get("paymentKey"),
    };

    async function confirmPayment() {
      try {
        const response = await fetch("/api/payment/confirm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        const json = await response.json();

        if (!response.ok) {
          throw new Error(`Payment failed: ${json.message} (Code: ${json.code})`);
        }

        // Payment success logic
        console.log("Payment successful:", json);
        // Implement additional actions here, such as updating UI, redirecting, or calling further APIs
        navigate("/success-details", { state: { paymentDetails: json } }); // Example redirection
      } catch (error) {
        console.error("Error processing payment:", error);
        navigate("/fail", { state: { error: error.message } }); // Passing error details via state
      }
    }

    confirmPayment();
  }, [navigate, searchParams]);

  return (
    <div className="result wrapper">
      <div className="box_section">
        <h2 style={{ padding: "20px 0px 10px 0px" }}>
          <img
            alt="Celebration"
            width="35px"
            src="https://static.toss.im/3d-emojis/u1F389_apng.png"
          />
          결제 처리 중...
        </h2>
        <p>{`주문번호: ${searchParams.get("orderId")}`}</p>
        <p>{`결제 금액: ${Number(searchParams.get("amount")).toLocaleString()}원`}</p>
        <p>{`Payment Key: ${searchParams.get("paymentKey")}`}</p>
      </div>
    </div>
  );
}
