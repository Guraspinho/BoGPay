// Function to authenticate with the Bank of Georgia server

export let token = "";
export async function getAuthToken(clientId: string | undefined, secretKey: string | undefined)
{
    const authString = `${clientId}:${secretKey}`;
    const encodedAuthString = Buffer.from(authString).toString('base64');

    try
    {
        const response = await fetch("https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token",
            {
                method: "POST",
                headers:
                {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${encodedAuthString}`
                },
                body: "grant_type=client_credentials"
            }

        )

        const data = await response.json();
        token = data.access_token;

        return data;
    }
    catch (error)
    {
        console.log(`Error in getAuthToken: ${error}`);
        throw new Error('Failed to get access token');
    }
}