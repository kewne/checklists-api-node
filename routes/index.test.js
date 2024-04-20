const request = require("supertest");
const app = require("../app");


describe("Root resource", () => {
    test("can be accessed" , () => {
        return request(app)
            .get("/")
            .expect(200);
    });
});
