class BlogPage {

    open() {
        return browser.url('/blog/');
    }

    get postList() {
        return $$('#recent-posts-3 ul li');
    }

    async postLength() {
        const recentPostList = await this.postList;
        for (const item of recentPostList) {
            const text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);
        }

        await expect(recentPostList).toHaveLength(5);
    }
}

export default new BlogPage();