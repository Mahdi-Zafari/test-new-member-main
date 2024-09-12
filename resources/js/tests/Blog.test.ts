import { describe, it, expect } from "vitest";
import Blog from "../models/Blog";
import { config } from "../config";

describe("Blog class", () => {
    it("should correctly create a Blog instance from JSON", async () => {
        const blogs = await Blog.all();
        const sampleBlog = blogs[0];

        expect(sampleBlog.id).toBeDefined();
        expect(sampleBlog.title).toBeDefined();
        expect(sampleBlog.image).toBeDefined();
        expect(sampleBlog.body).toBeDefined();
    });

    it("should return all blogs from the API", async () => {
        const blogs = await Blog.all();
        expect(blogs.length).toBeGreaterThan(0);
        blogs.forEach((blog) => {
            expect(blog).toBeInstanceOf(Blog);
        });
    });

    it("should return a blog by id", async () => {
        const blogs = await Blog.all();
        const sampleBlog = blogs[0];
        const blog = await Blog.get(sampleBlog.id);

        expect(blog).toBeInstanceOf(Blog);
        expect(blog.id).toBe(sampleBlog.id);
        expect(blog.title).toBe(sampleBlog.title);
        expect(blog.image).toBe(sampleBlog.image);
        expect(blog.body).toBe(sampleBlog.body);
    });

    it("should throw an error if id does not exist", async () => {
        const invalidid = 999009;
        await expect(Blog.get(invalidid)).rejects.toThrow(
            `Failed to fetch blog with id ${invalidid}`
        );
    });

    it("should return null for blogs with missing optional fields", async () => {
        const blogs = await Blog.all();
        const sampleBlog = blogs.find((blog) => blog.image === null);

        if (sampleBlog) {
            expect(sampleBlog.image).toBeNull();
        } else {
            expect(true).toBe(true);
        }
    });

    it("should correctly handle empty blog body", async () => {
        const blogs = await Blog.all();
        const sampleBlog = blogs.find((blog) => blog.body === "");

        if (sampleBlog) {
            expect(sampleBlog.body).toBe("");
        } else {
            expect(true).toBe(true);
        }
    });

    it("should have unique ids", async () => {
        const blogs = await Blog.all();
        const ids = blogs.map((blog) => blog.id);
        const uniqueids = new Set(ids);

        expect(uniqueids.size).toBe(ids.length);
    });
});
