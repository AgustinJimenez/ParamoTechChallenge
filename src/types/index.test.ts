import { PostType } from "./";

describe("PostType", () => {
  test("should require a title and content", () => {
    const post: PostType = {
      title: "My post title",
      content: "This is my post content.",
    };
    expect(post.title).toBeDefined();
    expect(post.content).toBeDefined();
  });

  test("should allow an optional id", () => {
    const post: PostType = {
      id: "12345",
      title: "My post title",
      content: "This is my post content.",
    };
    expect(post.id).toBeDefined();
  });
});
