import { token } from './authToken';



// Fetches payment details for the given order ID.
export async function getPaymentDetails(order_id: string)
{
    try
    { 
        const response = await  fetch(`https://api.bog.ge/payments/v1/receipt/:${order_id}`,
        {
            method: "GET",
            headers:
            {
                Authorization: `Bearer ${token}`
            }
        });
        

        const data = await response.json();
    
        return data;

    }
    catch (error)
    {   
        console.error(`Error in getPaymentDetails: ${error}`);
        return error;
    }

}