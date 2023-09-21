/**
 * Generates a regular expression that matches a keyword with or without diacritical marks and with different variations of the same letter.
 * @param keyword The keyword to search for.
 * @param caseSensitive Whether the search is case sensitive or not.
 * @returns A regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter.
 */
export declare function generateSearchQuery(keyword: string, caseSensitive?: boolean): RegExp;
