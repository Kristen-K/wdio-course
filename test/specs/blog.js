import BlogPage from "../pages/blog-page";

describe("Get list of recent posts, check they are >10 characters & total of 5 posts", () => {
  it("Get list of recent posts", async () => {
    await BlogPage.open();

    await BlogPage.postLength();
  });
});
