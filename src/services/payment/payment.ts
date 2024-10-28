import { type PaymentMock, paymentMock } from "./mock";

export function getPayment(): Promise<PaymentMock> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        return reject();
      }

      return resolve(paymentMock);
    }, 300);
  });
}
