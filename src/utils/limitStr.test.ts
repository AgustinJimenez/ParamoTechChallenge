import limitStr from "./limitStr";

describe("limitStr", () => {
  test("should return original string when length is less than limit", () => {
    const str = "This is a test";
    const result = limitStr(str, 15);
    expect(result).toEqual(str);
  });

  test("should return truncated string with 3 dots when length is greater than limit", () => {
    const str = "This is a test";
    const result = limitStr(str, 7);
    expect(result).toEqual("This is...");
  });

  test("should return empty string when given an empty string", () => {
    const str = "";
    const result = limitStr(str, 10);
    expect(result).toEqual("");
  });

  test("should handle undefined input", () => {
    const result = limitStr(undefined, 10);
    expect(result).toEqual("");
  });
});
