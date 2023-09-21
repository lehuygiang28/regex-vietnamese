/**
 * Generates a regular expression that matches a keyword with or without diacritical marks and with different variations of the same letter.
 * @param keyword The keyword to search for.
 * @param caseSensitive Whether the search is case sensitive or not.
 * @param ignorePunctuation Whether the search should ignore punctuation or not. It mean if true all punctuation will be replaced by original character.
 * @returns A regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter.
 */
export declare function generateSearchQuery({ keyword, caseSensitive, ignorePunctuation, }: {
    keyword?: string;
    caseSensitive?: boolean;
    ignorePunctuation?: boolean;
}): RegExp;
