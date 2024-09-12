import axios from "../utils/axios";
import { config } from "../config";
import Model from "./Model";

const appUrl = `${config.host}/api`;

class User extends Model {
    id: number;
    name: string;
    gender: string;
    email: string;
    birthday: Date;
    isAdmin: boolean;
    weight: number;
    height: number;
    maritalStatus: string;
    hasHijab: boolean;
    livingCity: string;
    livingDistrict: string;
    eyeColor: string;
    hairColor: string;
    skinColor: string;
    bodyType: string;
    hasDisability: boolean;
    hasChild: boolean;
    wantChild: boolean;
    isAlcoholic: boolean;
    livesWith: string;
    education: string;
    profession: string;
    income: number;
    jobType: string;
    password: string;

    constructor(json: any) {
        super();
        this.id = json.id;
        this.name = json.name;
        this.gender = json.gender;
        this.email = json.email;
        this.birthday = new Date(json.birthday);
        this.isAdmin = json.isAdmin;
        this.weight = parseFloat(json.weight);
        this.height = parseFloat(json.height);
        this.maritalStatus = json.maritalStatus;
        this.hasHijab = json.hasHijab;
        this.livingCity = json.livingCity;
        this.livingDistrict = json.livingDistrict;
        this.eyeColor = json.eyeColor;
        this.hairColor = json.hairColor;
        this.skinColor = json.skinColor;
        this.bodyType = json.bodyType;
        this.hasDisability = json.hasDisability;
        this.hasChild = json.hasChild;
        this.wantChild = json.wantChild;
        this.isAlcoholic = json.isAlcoholic;
        this.livesWith = json.livesWith;
        this.education = json.education;
        this.profession = json.profession;
        this.income = parseFloat(json.income);
        this.jobType = json.jobType;
        this.password = json.password;
    }

    getAge(): number {
        const today = new Date();
        const age = today.getFullYear() - this.birthday.getFullYear();
        const monthDiff = today.getMonth() - this.birthday.getMonth();
        const dayDiff = today.getDate() - this.birthday.getDate();
        return monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)
            ? age
            : age - 1;
    }

    getFormattedBirthday(locale: string = "en-US"): string {
        return this.birthday.toLocaleDateString(locale);
    }

    static async all(): Promise<User[]> {
        const response = await axios.get(`${appUrl}/users`);
        return response.data.map((user: any) => new User(user));
    }

    static async get(id: number): Promise<User | null> {
        try {
            const response = await axios.put(`${appUrl}/users/${id}`);
            return new User(response.data);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async filter(filters: any) {
        let result = await this.all();

        if (!filters) {
            return result;
        }

        // BY NAME
        if (filters.name) {
            result = result.filter((user) =>
                user.name.toLowerCase().includes(filters.name.toLowerCase())
            );
        }

        // BY AGE
        if (filters.age) {
            result = result.filter((user) => {
                const age = user.getAge();
                return age <= filters.age;
            });
        }

        // BY HEIGHT
        if (filters.height) {
            result = result.filter((user) => user.height <= filters.height);
        }

        // BY WEIGHT
        if (filters.weight) {
            result = result.filter((user) => user.weight <= filters.weight);
        }

        // BY MARITAL STATUS
        if (filters.maritalStatus && filters.maritalStatus.length > 0) {
            result = result.filter((user) =>
                filters.maritalStatus.includes(user.maritalStatus)
            );
        }

        return result;
    }

    static async current(): Promise<User> {
        try {
            return new User((await axios.get(`/api/user`)).data);
        } catch (error) {
            console.error(error);
            return new User({});
        }
    }

    async isAuth(): Promise<boolean> {
        return (
            Boolean(this.id) &&
            Number(this.id) === Number((await User.current()).id)
        );
    }

    static async getToken(): Promise<any> {
        //
    }

    async register(): Promise<boolean> {
        try {
            const response = await axios.post(`${appUrl}/register`, {
                name: this.name,
                email: this.email,
                password: this.password,
                gender: this.gender,
                birthday: this.birthday,
                maritalStatus: this.maritalStatus,
                profession: this.profession,
                //
            });
            return response.status === 201;
        } catch (error) {
            console.error('Registration error:', error);
            return false;
        }
    }

    async login(): Promise<boolean> {
        try {
            const response = await axios.post(`${appUrl}/login`, {
                email: this.email,
                password: this.password,
            });
            return response.status === 200;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    }
}

export default User;
