const request = require("supertest");
const app = require("./app");

describe("Payment Service API", () => {
  describe("GET /health", () => {
    test("should return health status", async () => {
      const response = await request(app).get("/health");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ status: "payment-service up" });
    });

    test("should have correct content type", async () => {
      const response = await request(app).get("/health");

      expect(response.type).toBe("application/json");
    });
  });

  describe("POST /payments", () => {
    test("should create a payment successfully", async () => {
      const response = await request(app).post("/payments");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("paymentId");
      expect(response.body).toHaveProperty("status");
      expect(response.body.status).toBe("SUCCESS");
    });

    test("should return payment ID", async () => {
      const response = await request(app).post("/payments");

      expect(response.body.paymentId).toBe(1);
    });

    test("should have correct content type", async () => {
      const response = await request(app).post("/payments");

      expect(response.type).toBe("application/json");
    });
  });

  describe("Error Handling", () => {
    test("should return 404 for unknown route", async () => {
      const response = await request(app).get("/unknown");

      expect(response.status).toBe(404);
    });
  });
});
