export function toCamel(s: string): string {
    // Step 1: Replace kebab-case with snake_case
    let result = s.replace(/-/g, "_");

    // Step 2: Insert underscores before uppercase letters in PascalCase, avoiding the first character
    result = result.replace(/\.?([A-Z]+)/g, (x, y) => "_" + y.toLowerCase());
    result = result.replace(/^_/, ""); // Remove leading underscore if it exists

    // Step 3: Convert to camelCase (existing logic)
    return result.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}
