import { toCamel } from "../utils/cases";

export default abstract class Model {
    static fromJson(json: any): any {
        Object.keys(json).forEach((key) => {
            const camelCaseKey = toCamel(key);
            if (key !== camelCaseKey)
                (json[camelCaseKey] = json[key]), delete json[key];
        });
        return new (this as any)(json);
    }

    toJson(): any {
        return JSON.parse(JSON.stringify(this));
    }
}
