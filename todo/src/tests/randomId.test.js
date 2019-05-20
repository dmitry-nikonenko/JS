
import{generateUniqueId}from '../js/utils/helper'

describe("some functions", () => {
    console.log("generateUniqueId", generateUniqueId);
    it("generate unique id, needs a string", () => {
      expect(typeof generateUniqueId()).toBe("string");
    });
  });