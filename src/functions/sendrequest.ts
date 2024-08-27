// import { requestToken } from "./authToken";


// const clientId = process.env.BOG_CLIENT_ID;
// const secretKey = process.env.BOG_SECRET_KEY;

// export async function sendRequest()
// {
//     try
//     {
//         const token = await requestToken(clientId, secretKey);
//         const response = await axios.post('https://api.bog.ge/payments/v1/ecommerce/orders', data,
//             {
//                 headers: {
//                     "Accept-Language": "ka",
//                     "Authorization": `Bearer ${token}`,
//                     "Content-Type": 'application/json',
//                     "Idempotency-Key": uuidv4()
//                 }
//             });

//         const responseData = response.data;

//     }
//     catch (error)
//     {
//         console.log(error);
//     }


// }



// const data =
// {
//     callback_url: "https://payment-demo.onrender.com/callback",
//     purchase_units: {
//         currency: "USD",
//         total_amount: imaginaryData.items[0].price,
//         basket: [
//             {
//                 product_id: imaginaryData.items[0].id,
//                 description: imaginaryData.items[0].name,
//                 quantity: imaginaryData.items[0].quantity,
//                 unit_price: imaginaryData.items[0].price,
//                 total_price: imaginaryData.items[0].price * imaginaryData.items[0].quantity
//             }
//         ]
//     },
//     redirect_urls:
//     {
//         fail: "https://payment-demo.onrender.com/fail",
//         success: "https://payment-demo.onrender.com/success"
//     },
//     payment_method: ["card"]
// };


