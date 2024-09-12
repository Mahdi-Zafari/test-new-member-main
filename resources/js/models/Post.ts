import { config } from "../config";
import axios from "../utils/axios";
import User from "./User";
import { format, isToday, isYesterday } from "date-fns";

const appUrl = `${config.host}/api`;

class Post {
    id: number;
    body: string | null;
    created_at: string;
    comments: any[];
    user: User;

    constructor(json: {
        id: number;
        body: string | null;
        created_at: string;
        comments: any[];
        user: User;
    }) {
        this.id = json.id;
        this.body = json.body;
        this.created_at = json.created_at;
        this.comments = json.comments;
        this.user = new User(json.user);
    }

    static async all(): Promise<Post[]> {
        try {
            const response = await axios.get(`${appUrl}/posts`);
            return response.data.map((postData: any) => new Post(postData));
        } catch (error) {
            console.error("Failed to fetch posts", error);
            throw new Error("Failed to fetch posts");
        }
    }

    static async create({ body, image }) {
        const formData = new FormData();
        formData.append("body", body);
        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await axios.post(`${appUrl}/posts`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            return new Post(response.data);
        } catch (error) {
            console.error("Failed to create post", error);
            throw new Error("Failed to create post");
        }
    }

    static async delete(id: number): Promise<void> {
        try {
            await axios.delete(`${appUrl}/posts/${id}`);
        } catch (error) {
            console.error("Failed to delete post", error);
            throw new Error("Failed to delete post");
        }
    }

    static async getUserPosts(userId: number): Promise<Post[]> {
        try {
            const allPosts = await this.all();
            return allPosts.filter((post) => post.user.id === userId);
        } catch (error) {
            console.error(`Failed to fetch posts for user ${userId}`, error);
            throw new Error(`Failed to fetch posts for user ${userId}`);
        }
    }

    getUserSummary(): string {
        const capitalize = (str: string) =>
            str.charAt(0).toUpperCase() + str.slice(1);
        return `${this.user.getAge()}, ${capitalize(
            this.user.maritalStatus
        )}, ${this.user.livingCity}`;
    }

    getFormattedDate(): string {
        const date = new Date(this.created_at);
        if (isToday(date)) return `Today, ${format(date, "HH:mm")}`;
        if (isYesterday(date)) return `Yesterday, ${format(date, "HH:mm")}`;
        return format(date, "MM/dd/yyyy, HH:mm");
    }

    getBodyContent(): string {
        return this.body || "No content";
    }

    static fromJSON(json: any): Post {
        return new Post(json);
    }
}

export default Post;
