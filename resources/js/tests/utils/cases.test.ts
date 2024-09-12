import { describe, it, expect } from "vitest";
import { toCamel } from "../../utils/cases";

describe("cases utils", () => {
    it("turns any case to camel case", async () => {
        const snakeCase = "hello_world";
        const camelCase = "helloWorld";
        const kebabCase = "hello-world";
        const pascalCase = "HelloWorld";

        expect(toCamel(snakeCase)).toBe(camelCase);
        expect(toCamel(kebabCase)).toBe(camelCase);
        expect(toCamel(pascalCase)).toBe(camelCase);
        expect(toCamel(camelCase)).toBe(camelCase);
    });
});
