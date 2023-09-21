"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSearchQuery = void 0;
const diacritics = require("diacritics");
/**
 * Generates a regular expression that matches a keyword with or without diacritical marks and with different variations of the same letter.
 * @param keyword The keyword to search for.
 * @param caseSensitive Whether the search is case sensitive or not.
 * @param ignorePunctuation Whether the search should ignore punctuation or not. It mean if true all punctuation will be replaced by original character.
 * @returns A regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter.
 */
function generateSearchQuery({ keyword, caseSensitive = false, ignorePunctuation = false, }) {
    // Check that the keyword parameter is defined.
    if (keyword === undefined) {
        throw new Error('Keyword parameter is required');
    }
    if (typeof keyword !== 'string') {
        throw new Error('Keyword parameter must be a string');
    }
    // Remove diacritical marks from the keyword.
    // Lowercase the keyword.
    const normalizedKeyword = ignorePunctuation
        ? diacritics.remove(keyword).toLowerCase()
        : keyword.toLowerCase();
    // Define the variations for each letter.
    const variations = new Map([
        ['a', new Set('aáàảãạăắằẳẵặâấầẩẫậ')],
        ['e', new Set('eéèẻẽẹêếềểễệ')],
        ['i', new Set('iíìỉĩị')],
        ['o', new Set('oóòỏõọôốồổỗộơớờởỡợ')],
        ['u', new Set('uúùủũụưứừửữự')],
        ['y', new Set('yýỳỷỹỵ')],
        ['d', new Set('dđ')],
    ]);
    // Generate a regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter.
    const regexString = Array.from(normalizedKeyword, (char) => {
        const variationsSet = variations.get(char) || new Set(char);
        return `[${Array.from(variationsSet).join('')}]`;
    }).join('');
    return new RegExp(regexString, caseSensitive ? '' : 'i');
}
exports.generateSearchQuery = generateSearchQuery;
