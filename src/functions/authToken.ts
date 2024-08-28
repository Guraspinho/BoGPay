// Function to authenticate with the Bank of Georgia server

export async function getAuthToken(clientId: string | undefined, secretKey: string | undefined) : Promise<string>
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
        return data.access_token;
    }
    catch (error)
    {
        console.log(`Error: ${error}`);
        throw new Error('Failed to get access token');
    }
}