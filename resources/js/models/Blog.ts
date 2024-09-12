import { config } from "../config";
import axios from "../utils/axios";

const appUrl = `${config.host}/api`;

class Blog {
    id: number;
    title: string;
    image: string | null;
    body: string;

    constructor(json: {
        id: number;
        title: string;
        image: string | null;
        body: string;
    }) {
        this.id = json.id;
        this.title = json.title;
        this.image = json.image;
        this.body = json.body;
    }

    static async all(): Promise<Blog[]> {
        try {
            const response = await axios.get(`${appUrl}/blogs`);
            return response.data.map((blogData: any) => new Blog(blogData));
        } catch (error) {
            console.error("Failed to fetch blogs", error);
            throw new Error("Failed to fetch blogs");
        }
    }

    static async get(id: number): Promise<Blog> {
        try {
            const response = await axios(`${appUrl}/blogs`);
            return new Blog(response.data.find((blog: any) => blog.id === id));
        } catch (error) {
            console.error(`Failed to fetch blog with id ${id}`, error);
            throw new Error(`Failed to fetch blog with id ${id}`);
        }
    }

    static fromJson(json: any): Blog {
        return new Blog(json);
    }
}

export default Blog;
