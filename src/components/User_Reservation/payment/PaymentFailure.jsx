import React from "react";

const PaymentFailure = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const errorCode = urlParams.get("code");
  const errorMessage = urlParams.get("message");

  return (
    <div id="info" className="box_section" style={{ width: "600px" }}>
      <img
        width="100px"
        src="https://static.toss.im/lotties/error-spot-no-loop-space-apng.png"
        alt="Payment Failed"
      />
      <h2>결제를 실패했어요</h2>

      <div className="p-grid typography--p" style={{ marginTop: "50px" }}>
        <div className="p-grid-col text--left">
          <b>에러메시지</b>
        </div>
        <div className="p-grid-col text--right">{errorMessage}</div>
      </div>
      <div className="p-grid typography--p" style={{ marginTop: "10px" }}>
        <div className="p-grid-col text--left">
          <b>에러코드</b>
        </div>
        <div className="p-grid-col text--right">{errorCode}</div>
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
  );
};

export default PaymentFailure;
