import { getAuthToken } from "./authToken";


const clientId = process.env.BOG_CLIENT_ID;
const secretKey = process.env.BOG_SECRET_KEY;

export async function orderRequest()
{
    try
    {
        const token = await requestToken(clientId, secretKey);

        const response = await fetch("https://api.bog.ge/payments/v1/ecommerce/orders",
            {
                method: "POST",
                headers:
                {
                    "Accept-Language": "ka",
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": 'application/json',
                }
            }
            
        )
            
        const data = await response.json();

        return data;

    }
    catch (error)
    {
        console.log(error);
    }


}



const imaginaryData = {
    items: [
        {
            name: 'item1',
            price: 1,
            quantity: 1,
            id: 1
        },
        {
            name: 'item2',
            price: 2,
            quantity: 2,
            id: 2
        }
    ],
};

const data =
{
    callback_url: "https://payment-demo.onrender.com/callback",
    purchase_units: {
        currency: "USD",
        total_amount: imaginaryData.items[0].price,
        basket: [
            {
                product_id: imaginaryData.items[0].id,
                description: imaginaryData.items[0].name,
                quantity: imaginaryData.items[0].quantity,
                unit_price: imaginaryData.items[0].price,
                total_price: imaginaryData.items[0].price * imaginaryData.items[0].quantity
            }
        ]
    },
    redirect_urls:
    {
        fail: "https://payment-demo.onrender.com/fail",
        success: "https://payment-demo.onrender.com/success"
    },
    payment_method: ["card"]
};


