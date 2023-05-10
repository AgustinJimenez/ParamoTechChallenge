import lorem from "./lorem";

describe("lorem", () => {
  test("should generate random lorem ipsum text", () => {
    const text = lorem.generateParagraphs(1);
    expect(text).toBeDefined();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should generate multiple paragraphs of lorem ipsum text", () => {
    const paragraphs = lorem.generateParagraphs(3);
    expect(paragraphs).toBeDefined();
    expect(paragraphs.length).toBeGreaterThan(0);
    expect(paragraphs.split("\n")).toHaveLength(3);
  });
});
