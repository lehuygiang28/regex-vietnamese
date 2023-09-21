import * as diacritics from 'diacritics';

/**
 * Generates a regular expression that matches a keyword with or without diacritical marks and with different variations of the same letter.
 * @param keyword The keyword to search for.
 * @param caseSensitive Whether the search is case sensitive or not.
 * @param ignorePunctuation Whether the search should ignore punctuation or not. It mean if true all punctuation will be replaced by original character.
 * @returns A regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter.
 */
export function generateSearchQuery({
    keyword,
    caseSensitive = false,
    ignorePunctuation = false,
}: {
    keyword?: string;
    caseSensitive?: boolean;
    ignorePunctuation?: boolean;
}) {
    // Check that the keyword parameter is defined.
    if (keyword === undefined) {
        throw new Error('Keyword parameter is required');
    }

    if (typeof keyword !== 'string') {
        throw new Error('Keyword parameter must be a string');
    }

    // Remove diacritical marks from the keyword.
    // Lowercase the keyword.
    const normalizedKeyword: string = ignorePunctuation
        ? diacritics.remove(keyword).toLowerCase()
        : keyword.toLowerCase();

    // Define the variations for each letter.
    const variations = new Map<string, Set<string>>([
        ['a', new Set('aáàảãạăắằẳẵặâấầẩẫậ')],
        ['e', new Set('eéèẻẽẹêếềểễệ')],
        ['i', new Set('iíìỉĩị')],
        ['o', new Set('oóòỏõọôốồổỗộơớờởỡợ')],
        ['u', new Set('uúùủũụưứừửữự')],
        ['y', new Set('yýỳỷỹỵ')],
        ['d', new Set('dđ')],
    ]);

    // Generate a regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter.
    const regexString = Array.from(normalizedKeyword, (char: string) => {
        const variationsSet = variations.get(char) || new Set(char);
        return `[${Array.from(variationsSet).join('')}]`;
    }).join('');

    return new RegExp(regexString, caseSensitive ? '' : 'i');
}
