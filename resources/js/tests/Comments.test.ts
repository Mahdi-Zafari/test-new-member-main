import { describe, it, expect, beforeAll } from "vitest";
import Comment from "../models/Comment";
import User from "../models/User";
import { isToday, isYesterday, format } from "date-fns";

describe("Comment class", () => {
    let allComments: Comment[];

    beforeAll(async () => {
        allComments = await Comment.all();
    });

    it("should return an array of comments", () => {
        expect(allComments).toBeInstanceOf(Array);
        expect(allComments.length).toBeGreaterThan(0);
    });

    it("should create Comment instances from API data", () => {
        allComments.forEach((comment) => {
            expect(comment).toBeInstanceOf(Comment);
            expect(comment.id).toBeDefined();
            expect(comment.body).toBeDefined();
            expect(comment.createdAt).toBeDefined();
            expect(comment.user).toBeInstanceOf(User);
            expect(comment.commentableId).toBeDefined();
            expect(comment.commentableType).toBeDefined();
        });
    });

    it("should get formatted date correctly", () => {
        allComments.forEach((comment) => {
            const date = new Date(comment.createdAt);
            const formattedDate = comment.getFormattedDate();

            if (isToday(date)) {
                expect(formattedDate).toMatch(/^Today, \d{2}:\d{2}$/);
            } else if (isYesterday(date)) {
                expect(formattedDate).toMatch(/^Yesterday, \d{2}:\d{2}$/);
            } else {
                expect(formattedDate).toMatch(
                    /^\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}$/
                );
            }
        });
    });

    it("should return body content correctly", () => {
        allComments.forEach((comment) => {
            const bodyContent = comment.getBodyContent();
            expect(bodyContent).toBe(comment.body || "No content");
        });
    });

    // TEMPORARY!!!
    it("should handle comments without body", () => {
        const commentsWithoutBody = allComments.filter(
            (comment) => comment.body === null || comment.body === ""
        );

        commentsWithoutBody.forEach((comment) => {
            expect(comment.getBodyContent()).toBe("No content");
        });

        if (commentsWithoutBody.length === 0) {
            console.log("No comments without body found. Skipping this test.");
        }
    });

    it("should have unique comment ids", () => {
        const commentIds = allComments.map((comment) => comment.id);
        const uniqueCommentIds = new Set(commentIds);

        expect(uniqueCommentIds.size).toBe(commentIds.length);
    });

    it("should create a Comment instance from JSON", () => {
        const sampleComment = allComments[0];
        const commentFromJSON = Comment.fromJSON(sampleComment);

        expect(commentFromJSON).toBeInstanceOf(Comment);
        expect(commentFromJSON.id).toBe(sampleComment.id);
        expect(commentFromJSON.body).toBe(sampleComment.body);
        expect(commentFromJSON.createdAt).toBe(sampleComment.createdAt);
        expect(commentFromJSON.user).toBeInstanceOf(User);
        expect(commentFromJSON.commentableId).toBe(sampleComment.commentableId);
        expect(commentFromJSON.commentableType).toBe(
            sampleComment.commentableType
        );
    });
});
