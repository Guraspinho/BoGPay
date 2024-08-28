import { token, order_id } from './sendrequest';



// Fetches payment details for the given order ID.


export async function getPaymentDetails()
{
    try
    { 
        const response = await  fetch(`https://api.bog.ge/payments/v1/receipt/:${order_id}`,
        {
            headers:
            {
                Authorization: `Bearer ${token}`
            }
        });
        
        // Check if the response is successful
        if (!response.ok)
        {
            throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
    
        return data;

    }
    catch (error)
    {   
        console.error(`Error in getPaymentDetails: ${error}`);
        return error;
    }

}