import { describe, it, expect, beforeAll } from "vitest";
import Post from "../models/Post";
import User from "../models/User";
import { isToday, isYesterday, format } from "date-fns";

describe("Post class", () => {
    let allPosts;

    beforeAll(async () => {
        allPosts = await Post.all();
    });

    it("create a Post instance from post.json", () => {
        const samplePost = allPosts[0];
        const post = Post.fromJSON(samplePost);

        expect(post.id).toBe(samplePost.id);
        expect(post.body).toBe(samplePost.body);
        expect(post.created_at).toBe(samplePost.created_at);
        expect(post.comments).toBe(samplePost.comments);
        expect(post.user).toBeInstanceOf(User);
    });

    it("return all posts from the API", async () => {
        expect(allPosts.length).toBeGreaterThan(0);
        allPosts.forEach((post) => {
            expect(post).toBeInstanceOf(Post);
        });
    });

    it("get formatted date correctly", () => {
        const samplePost = allPosts[0];
        const post = new Post(samplePost);
        const date = new Date(post.created_at);

        if (isToday(date)) {
            expect(post.getFormattedDate()).toBe(
                `Today, ${format(date, "HH:mm")}`
            );
        } else if (isYesterday(date)) {
            expect(post.getFormattedDate()).toBe(
                `Yesterday, ${format(date, "HH:mm")}`
            );
        } else {
            expect(post.getFormattedDate()).toBe(
                format(date, "MM/dd/yyyy, HH:mm")
            );
        }
    });

    it("get user summary correctly", () => {
        const samplePost = allPosts[0];
        const post = new Post(samplePost);
        const userSummary = post.getUserSummary();
        const capitalize = (str: string) =>
            str.charAt(0).toUpperCase() + str.slice(1);

        expect(userSummary).toBe(
            `${post.user.getAge()}, ${capitalize(post.user.maritalStatus)}, ${
                post.user.livingCity
            }`
        );
    });

    it("return body content correctly", () => {
        const samplePost = allPosts[0];
        const post = new Post(samplePost);

        expect(post.getBodyContent()).toBe(post.body || "No content");
    });

    it("handle empty post body", () => {
        const samplePost = { ...allPosts[0], body: null };
        const post = new Post(samplePost);

        expect(post.getBodyContent()).toBe("No content");
    });

    it("have unique post ids", () => {
        const postIds = allPosts.map((post) => post.id);
        const uniquePostIds = new Set(postIds);

        expect(uniquePostIds.size).toBe(postIds.length);
    });

    // it("create a new post", async () => {
    //     const newPost = await Post.create({
    //         body: "Test post",
    //         image: null,
    //     });

    //     expect(newPost).toBeInstanceOf(Post);
    //     expect(newPost.body).toBe("Test post");
    // });
});
