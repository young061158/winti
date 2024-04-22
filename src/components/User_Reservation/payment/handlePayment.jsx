import { loadTossPayments } from "@tosspayments/payment-sdk";


//페이호출 메소드
const handlePayment = (subject) => {
  const random = new Date().getTime() + Math.random(); //난수생성
  const randomId = btoa(random); //난수를 btoa(base64)로 인코딩한 orderID
  const client_id = "test_ck_ma60RZblrqKWmJwnNvgW3wzYWBn1";
  if (subject === "카드") { //간편결제 함수 실행
    loadTossPayments(client_id).then(tossPayments => {
      tossPayments.requestPayment(subject, {
        amount: reserv.amount, //주문가격
        orderId: `${randomId}`, //문자열 처리를 위한 ``사용
        orderName: orderName(), //결제 이름(여러건일 경우 복수처리)
        customerName: '테스트', //판매자, 판매처 이름
        successUrl: 'http://localhost:8080/success',
        failUrl: 'http://localhost:8080/fail',
      })
    });
  }
}