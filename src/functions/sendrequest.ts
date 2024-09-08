import { requestCredentials } from "../types/requestTypes";


export async function orderRequest(credentials: requestCredentials)
{
    try
    {
        
        const response = await fetch("https://api.bog.ge/payments/v1/ecommerce/orders",
            {
                method: "POST",
                headers: credentials.headers,
                body: JSON.stringify(credentials.body)
            }
        )

        const data = await response.json();

        return data;

    }
    catch (error)
    {
        return error;   
    }
}

