import { getPaymentDetails } from '../paymentDetails';
import { token } from '../authToken';

describe('getPaymentDetails', () => {
    // Second test: should return the correct payment details for a given order ID
    it('should return the payment details for the given order ID', async () => {
        const order_id = 'a767a276-cddd-43ec-9db3-9f9b39eee02d';
        
        // Mock response data
        const mockResponseData = {
            order_id: "a767a276-cddd-43ec-9db3-9f9b39eee02d",
            industry: "ecommerce",
            capture: "manual",
            external_order_id: "123456",
            client: {
                id: "10000",
                brand_ka: "საქართველოს ბანკი",
                brand_en: "BOG",
                url: "https://api.bog.ge"
            },
            zoned_create_date: "2022-11-01T13:19:43.021178Z",
            zoned_expire_date: "2022-11-01T13:39:43.021178Z",
            order_status: {
                key: "refunded",
                value: "დაბრუნებული"
            },
            buyer: {
                full_name: "John Doe",
                email: "johndoe@gmail.com",
                phone_number: "+995555000000"
            },
            purchase_units: {
                request_amount: "100.5",
                transfer_amount: "0.0",
                refund_amount: "100.5",
                currency_code: "GEL",
                items: [
                    {
                        external_item_id: "id_1",
                        description: "product 1",
                        quantity: "1",
                        unit_price: "25.35",
                        unit_discount_price: "0",
                        vat: "0",
                        vat_percent: "0",
                        total_price: "25.35",
                        package_code: "A000123",
                        tin: null,
                        pinfl: null,
                        product_discount_id: "BF222R5"
                    }
                ]
            },
            redirect_links: {
                success: "https://payment.bog.ge/receipt?order_id=a767a276-cddd-43ec-9db3-9f9b39eee02d",
                fail: "https://payment.bog.ge/receipt?order_id=a767a276-cddd-43ec-9db3-9f9b39eee02d"
            },
            payment_detail: {
                transfer_method: {
                    key: "card",
                    value: "ბარათით გადახდა"
                },
                transaction_id: "230513868679",
                payer_identifier: "548888xxxxxx9893",
                payment_option: "direct_debit",
                card_type: "mc",
                card_expiry_date: "03/24",
                request_account_tag: "1212",
                transfer_account_tag: "gev2",
                saved_card_type: "recurrent",
                parent_order_id: "8d52130d-cb1b-45ea-b048-0f040a44e2a3"
            },
            discount: {
                bank_discount_amount: "string",
                bank_discount_desc: "string",
                discounted_amount: "string",
                original_order_amount: "string",
                system_discount_amount: "string",
                system_discount_desc: "string"
            },
            actions: [
                {
                    action_id: "b70968ca-eda9-47ae-8811-26fd1ab733f8",
                    request_channel: "public_api",
                    action: "authorize",
                    status: "completed",
                    zoned_action_date: "2022-11-28T13:42:40.668439Z",
                    amount: "100.5"
                },
                {
                    action_id: "a89b872a-9700-4025-b3fb-047cbba7a5e6",
                    request_channel: "business_manager",
                    action: "refund",
                    status: "completed",
                    zoned_action_date: "2022-11-28T13:58:03.427939Z",
                    amount: "100.5"
                }
            ],
            lang: "ka",
            reject_reason: null
        };
        
        // Mock the fetch function to return the mockResponseData
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: async () => mockResponseData
        });
        
        // Call the function
        const result = await getPaymentDetails(order_id);
        
        // Assertions
        expect(global.fetch).toHaveBeenCalledWith(`https://api.bog.ge/payments/v1/receipt/:${order_id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        expect(result).toEqual(mockResponseData);
    });
});
