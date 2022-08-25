import supertest from "supertest";
import createServer from "../utils/server";

import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { createproduct } from "../service/product.service";
import { signJwt } from "../utils/jwt.utils";

const app = createServer();

// The payload data necessary to the tests
const userId = new mongoose.Types.ObjectId().toString();
export const productPayload = {
  user: userId,
  title: "Denim Jacket",
  description:
    "This is a new product in our line of jackets. It is made of our best quality raw materials and we are very proud of it.There is very limited amout remaining in the stock. Hurry Up!!!",
  price: 50,
  image: "This is supposed to be a url",
};
export const userPayload = {
  _id: userId,
  email: "jane.doe@example.com",
  name: "Jane Doe",
};

describe("product", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe.skip("get product route", () => {
    describe("given the product does not exist", () => {
      it("should return a 404", async () => {
        const productId = "product-123";
        await supertest(app).get(`/api/products/${productId}`).expect(404);
      });
    });
    // test 2
    describe("given the product does exist", () => {
      it("should return a 200 status and product", async () => {
        const product = await createproduct(productPayload);
        const { body, statusCode } = await supertest(app).get(
          `/api/products/${product.productId}`
        );

        expect(body.productId).toBe(product.productId);
        expect(statusCode).toBe(200);
      });
    });
  });

  describe.skip("create product route", () => {
    describe("given the user is not logged in", () => {
      it("should return a 403", async () => {
        const { statusCode } = await supertest(app).post("/api/products");
        // in this case we are only testing the requireUser middleware
        expect(statusCode).toBe(403);
      });
    });

    describe("given the user is  logged in", () => {
      it("should return a 200 and create the product", async () => {
        const jwt = signJwt(userPayload);
        const { statusCode, body } = await supertest(app)
          .post("/api/products")
          .set("authorization", `Bearer ${jwt}`)
          .send(productPayload);

        expect(statusCode).toBe(200);
        expect(body).toMatchObject({
          __v: 0,
          _id: expect.any(String),
          createdAt: expect.any(String),
          description:
            "This is a new product in our line of jackets. It is made of our best quality raw materials and we are very proud of it.There is very limited amout remaining in the stock. Hurry Up!!!",
          image: "This is supposed to be a url",
          price: 50,
          productId: expect.any(String),
          title: "Denim Jacket",
          updatedAt: expect.any(String),
          user: expect.any(String),
        });
      });
    });
  });
});
