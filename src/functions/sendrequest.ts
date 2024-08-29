import { token } from "./authToken";
import { requestCredentials } from "../types/requestTypes";



export async function orderRequest(credentials: requestCredentials)
{
    try
    {

        credentials.headers.Authorization = `Bearer ${token}`;

        const response = await fetch("https://api.bog.ge/payments/v1/ecommerce/orders",
            {
                method: "POST",
                headers: credentials.headers,
                body: JSON.stringify(credentials.body)
            }
        )

        // Check if the response is successful
        if (!response.ok)
        {
            throw new Error(`Request failed with status ${response.status}: ${response}`);
        }
            
        const data = await response.json();

        return data;

    }
    catch (error)
    {
        console.log(`Error in orderRequest: ${error}`);
        throw error;
    }
}

