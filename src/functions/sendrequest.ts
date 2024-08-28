import { getAuthToken } from "./authToken";
import { requestCredentials } from "../types/requestTypes";


const clientId = process.env.BOG_CLIENT_ID;
const secretKey = process.env.BOG_SECRET_KEY;

export let token = "";
export let order_id = "";
export async function orderRequest(credentials: requestCredentials)
{
    try
    {
        // authenticate buisness as valid bog api user
        token = await getAuthToken(clientId, secretKey);
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
            throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
        }
            
        const data = await response.json();

        if(data.id)
            order_id = data.id;

        return data;

    }
    catch (error)
    {
        console.log(`Error in orderRequest: ${error}`);
        throw error;
    }
}

