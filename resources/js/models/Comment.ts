import { config } from "../config";
import { format, isToday, isYesterday } from "date-fns";
import User from "./User";
import axios from "../utils/axios";

const appUrl = `${config.host}/api`;

class Comment {
    id: number;
    body: string;
    createdAt: string;
    user: User;
    commentableId: number;
    commentableType: string;

    constructor(json: {
        id: number;
        body: string;
        createdAt: string;
        user: User;
        commentableId: number;
        commentableType: string;
    }) {
        this.id = json.id;
        this.body = json.body;
        this.createdAt = json.createdAt;
        this.user = new User(json.user);
        this.commentableId = json.commentableId;
        this.commentableType = json.commentableType;
    }

    static async all(): Promise<Comment[]> {
        try {
            const response = await axios.get(`${appUrl}/comments`);
            return response.data.map(
                (commentData: any) => new Comment(commentData)
            );
        } catch (error) {
            console.error("Failed to fetch comments", error);
            throw new Error("Failed to fetch comments");
        }
    }

    getFormattedDate(): string {
        const date = new Date(this.createdAt);
        if (isToday(date)) return `Today, ${format(date, "HH:mm")}`;
        if (isYesterday(date)) return `Yesterday, ${format(date, "HH:mm")}`;
        return format(date, "MM/dd/yyyy, HH:mm");
    }

    getBodyContent(): string {
        return this.body || "No content";
    }

    static fromJSON(json: any): Comment {
        return new Comment(json);
    }
}

export default Comment;
