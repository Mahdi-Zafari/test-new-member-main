import { config } from "../config";
import { isToday, format, isYesterday } from "date-fns";
import defaultAvatar from "../../../public/assets/images/defaultAvatar.png";
import User from "./User";
import axios from "../utils/axios";

const appUrl = `${config.host}/api`;

class Story {
    id: number;
    image: {
        id: number;
        url: string;
        has_approved: number;
        imageableId: number | null;
        imageableType: string | null;
    } | null;
    created_at: string;
    user: User | null;

    constructor(json: {
        id: number;
        image: {
            id: number;
            url: string;
            has_approved: number;
            imageableId: number | null;
            imageableType: string | null;
        } | null;
        created_at: string;
        user: User | null;
    }) {
        this.id = json.id;
        this.image = json.image;
        this.created_at = json.created_at;
        this.user = json.user ? new User(json.user) : null;
    }

    static async all(): Promise<Story[]> {
        try {
            const response = await axios.get(`${appUrl}/stories`);
            return response.data.map((storyData: any) => new Story(storyData));
        } catch (error) {
            console.error("Failed to fetch stories", error);
            throw new Error("Failed to fetch stories");
        }
    }

    static async create(image: File): Promise<Story> {
        const formData = new FormData();
        formData.append("image", image);

        try {
            const response = await axios.post(`${appUrl}/stories`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            return new Story(response.data);
        } catch (error) {
            console.error("Failed to create story", error);
            throw new Error("Failed to create story");
        }
    }

    static async delete(id: number): Promise<void> {
        try {
            await axios.delete(`${appUrl}/stories/${id}`);
        } catch (error) {
            console.error("Failed to delete story", error);
            throw new Error("Failed to delete story");
        }
    }

    getFormattedDate(): string {
        const date = new Date(this.created_at);
        if (isToday(date)) return `Today, ${format(date, "HH:mm")}`;
        if (isYesterday(date)) return `Yesterday, ${format(date, "HH:mm")}`;
        return format(date, "MM/dd/yyyy, HH:mm");
    }

    getFormattedStory() {
        return {
            id: this.id,
            imageUrl: this.image?.url || "https://picsum.photos/101/101",
            duration: 5000,
            header: {
                heading: this.user?.name || "Unknown",
                subheading: this.getFormattedDate(),
                profileImage: this.user?.images?.[0]?.url || defaultAvatar,
            },
        };
    }

    static fromJSON(json: any): Story {
        return new Story(json);
    }
}

export default Story;
