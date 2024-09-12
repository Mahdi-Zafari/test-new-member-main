import { describe, it, expect, beforeAll } from "vitest";
import Story from "../models/Story";
import User from "../models/User";
import { isToday, isYesterday } from "date-fns";

describe("Story class", () => {
    let allStories: Story[];

    beforeAll(async () => {
        allStories = await Story.all();
    });

    it("should return an array of stories", () => {
        expect(allStories).toBeInstanceOf(Array);
        expect(allStories.length).toBeGreaterThan(0);
    });

    it("should create Story instances from API data", () => {
        allStories.forEach((story) => {
            expect(story).toBeInstanceOf(Story);
            expect(story.id).toBeDefined();
            expect(story.created_at).toBeDefined();
            if (story.user) {
                expect(story.user).toBeInstanceOf(User);
            }
        });
    });

    it("should get formatted date correctly", () => {
        allStories.forEach((story) => {
            const date = new Date(story.created_at);
            const formattedDate = story.getFormattedDate();

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

    it("should return formatted story correctly", () => {
        allStories.forEach((story) => {
            const formattedStory = story.getFormattedStory();

            expect(formattedStory).toHaveProperty("id", story.id);
            expect(formattedStory).toHaveProperty("imageUrl");
            expect(formattedStory).toHaveProperty("duration", 5000);
            expect(formattedStory).toHaveProperty("header");
            expect(formattedStory.header).toHaveProperty("heading");
            expect(formattedStory.header).toHaveProperty("subheading");
            expect(formattedStory.header).toHaveProperty("profileImage");
        });
    });

    // TEMPORARY!!!
    it("should handle stories without user data", () => {
        const storiesWithoutUser = allStories.filter(
            (story) => story.user === null
        );

        storiesWithoutUser.forEach((story) => {
            const formattedStory = story.getFormattedStory();
            expect(formattedStory.header.heading).toBe("Unknown");
        });

        if (storiesWithoutUser.length === 0) {
            console.log(
                "No stories without user data found. Skipping this test."
            );
        }
    });

    // TEMPORARY!!!
    it("should handle stories without image", () => {
        const storiesWithoutImage = allStories.filter(
            (story) => story.image === null
        );

        storiesWithoutImage.forEach((story) => {
            const formattedStory = story.getFormattedStory();
            expect(formattedStory.imageUrl).toBe(
                "https://picsum.photos/101/101"
            );
        });

        if (storiesWithoutImage.length === 0) {
            console.log(
                "No stories without image data found. Skipping this test."
            );
        }
    });

    it("should have unique story ids", () => {
        const storyIds = allStories.map((story) => story.id);
        const uniqueStoryIds = new Set(storyIds);

        expect(uniqueStoryIds.size).toBe(storyIds.length);
    });
});
