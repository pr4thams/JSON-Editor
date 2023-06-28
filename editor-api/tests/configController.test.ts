import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";
import fs from "fs";
import { expect } from "chai";

chai.use(chaiHttp);

const CONFIG_PATH = "./config.json";

describe("Config Controller", () => {
  describe("GET /config", () => {
    it("should load the JSON file", (done) => {
      chai
        .request(app)
        .get("/config")
        .end((err, res) => {
          expect(res.body).to.be.an("object");
          const fileContent = fs.readFileSync(CONFIG_PATH, "utf-8");
          expect(res.body).to.deep.equal(JSON.parse(fileContent));
          done();
        });
    });
  });

  describe("POST /config", () => {
    it("should update the JSON Configuration File", (done) => {
      const newConfig = { port: 8888 };
      const existingConfig = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8"));
      const expectedConfig = { ...existingConfig, ...newConfig };

      chai
        .request(app)
        .post("/config")
        .send(newConfig)
        .end((err, res) => {
          expect(res.status).to.equal(200);

          const updatedFileContent = fs.readFileSync(CONFIG_PATH, "utf-8");
          expect(JSON.parse(updatedFileContent)).to.deep.equal(expectedConfig);

          done();
        });
    });
  });
});
