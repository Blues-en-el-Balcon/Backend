import request from 'supertest'
import app from '../src/app'


describe("Test the root path", () => {
  test("the response code is 200", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  test("the body response is the correct", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.text).toBe("This is the API of Blues en el Balcón");
        done();
      });
  });
});
