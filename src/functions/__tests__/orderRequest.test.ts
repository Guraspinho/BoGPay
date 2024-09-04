import { orderRequest } from "../sendrequest";
import { requestCredentials } from "../../types/requestTypes";
import { token } from "../authToken";

jest.mock("../authToken", () => ({
  token: "test_token"
}));

describe('orderRequest', () => {
  // Mock the fetch function globally
  global.fetch = jest.fn();

  const mockRequest: requestCredentials = {
    
    headers: {
      "Accept_Language": "ka",
      "Content-Type": "application/json",
      "Authorization": "Bearer someRandomToken"
    },
    body: {
      "callback_url": "https://example.com/callback",
      "external_order_id": "id123",
      "purchase_units": {
        "currency": "GEL",
        "total_amount": 1,
        "basket": [
          {
            "quantity": 1,
            "unit_price": 1,
            "product_id": "product123"
          }
        ]
      },
      "redirect_urls": {
        "fail": "https://example.com/fail",
        "success": "https://example.com/success"
      }
    }
  };

  const mockResponse = {
    id: "order123",
    _links: {
      details: {
        href: "https://api.bog.ge/payments/v1/receipt/order123"
      },
      redirect: {
        href: "https://payment.bog.ge/?order_id=order123"
      }
    }
  };

  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it("should return the expected order details on successful request", async () => {
    // Mock fetch to return a successful response
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await orderRequest(mockRequest);

    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.bog.ge/payments/v1/ecommerce/orders",
      {
        method: "POST",
        headers: {
          ...mockRequest.headers,
          "Authorization": `Bearer test_token`
        },
        body: JSON.stringify(mockRequest.body)
      }
    );
  });

  it("should throw an error if the response is not ok", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: async () => ({ error: "Bad Request" }),
    });

    const result = await orderRequest(mockRequest);

    expect(result).toEqual({ error: "Bad Request" });
    expect(fetch).toHaveBeenCalledWith(
      "https://api.bog.ge/payments/v1/ecommerce/orders",
      {
        method: "POST",
        headers: {
          ...mockRequest.headers,
          "Authorization": `Bearer test_token`
        },
        body: JSON.stringify(mockRequest.body)
      }
    );
  });
});