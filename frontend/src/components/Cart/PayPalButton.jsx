import React from 'react'
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js"

const PayPalButton = ({amount, onSuccess, onError}) => {
  return (
    <PayPalScriptProvider options={{"client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID}}>
      <PayPalButtons style={{layout: "vertical"}}
        createOrder={(data, actions)=>{
          return actions.order.create({
            purchase_units: [{amount: {value: parseFloat(amount).toFixed(2)}}]
          })
        }}
        onApprove={(data, actions)=>{
          return actions.order.capture().then(onSuccess)
        }}
        onError={onError} /> 
    </PayPalScriptProvider>
  )
}

export default PayPalButton;

// import React from "react";
// import {
//   PayPalButtons,
//   PayPalScriptProvider,
// } from "@paypal/react-paypal-js";

// const PayPalButton = ({ amount, onSuccess, onError }) => {
//   return (
//     <PayPalScriptProvider
//       options={{
//         "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
//         currency: "USD",
//         intent: "capture",
//       }}
//     >
//       <PayPalButtons
//         style={{ layout: "vertical" }}

//         createOrder={(data, actions) => {
//           console.log("Creating PayPal order:", amount);

//           return actions.order.create({
//             intent: "CAPTURE",
//             purchase_units: [
//               {
//                 amount: {
//                   currency_code: "USD",
//                   value: Number(amount).toFixed(2),
//                 },
//               },
//             ],
//           });
//         }}

//         onApprove={(data, actions) => {
//           console.log("PAYPAL APPROVED:", data);

//           return actions.order
//             .capture()
//             .then((details) => {
//               console.log("PAYPAL CAPTURE SUCCESS:", details);
//               onSuccess(details);
//             })
//             .catch((error) => {
//               console.error("PAYPAL CAPTURE ERROR:", error);
//               onError(error);
//             });
//         }}

//         onCancel={(data) => {
//           console.log("PAYPAL CANCELLED:", data);
//         }}

//         onError={(error) => {
//           console.error("PAYPAL ERROR:", error);
//           onError(error);
//         }}
//       />
//     </PayPalScriptProvider>
//   );
// };

// export default PayPalButton;
