import React, { useEffect } from "react";
import sample from "./sample.json";

export default function Sample() {
  useEffect(() => {
    let payments = sample.response.payments;
    const uniqueArr = [
      ...new Set(
        payments.map((data) => new Date(data.date).toLocaleDateString())
      ),
    ];

    let finalData = [];
    for (let i = 0; i < uniqueArr.length; i++) {
      let arrayData = [];
      for (let j = 0; j < payments.length; j++) {
        let date = new Date(payments[j].date).toLocaleDateString();
        if (uniqueArr[i] === date) {
          arrayData.push(payments[j]);
        }
      }
      let obj = {
        date: uniqueArr[i],
        data: arrayData,
      };
      finalData.push(obj);
    }
  }, []);
  return <div>data parsing</div>;
}
