import * as diacritics from 'diacritics';
import { TGenerateSearchQuery } from './types';
import { sideLowerCaseMap, sideUppercaseMap, sideCaseMap, allCaseOutput } from './constants';
import { OutputCaseOptions } from './enums';

/**
 * @description
 * Generates a regular expression that matches a keyword with or without diacritical marks
 * and with different variations of the same letter.
 *
 * With the default options, the regex will automatically match the case is lower or upper of the keyword
 * and return the same case. If you want to change the output case, you can use the outputCaseOptions property.
 *
 * @example
 * const regex = generateRegexQuery('Hà Nội oi');
 * console.log(regex) // /[H][à][ ][N][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i
 *
 * // With sensitive option
 * // Remove the last `i` in the regex
 * const regex = generateRegexQuery('Hà Nội oi', { sensitive: true });
 * console.log(regex) // /[H][à][ ][N][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/
 *
 * // With ignoreAccentedVietnamese option
 * // Ignore current Vietnamese accents and find with all accents case
 * const regex = generateRegexQuery('Hà Nội oi', { ignoreAccentedVietnamese: true });
 * console.log(regex) // /[H][aáàảãạăắằẳẵặâấầẩẫậ][ ][N][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i
 *
 * @param keyword The keyword to search for.
 *
 * @property sensitive Whether the search is case sensitive or not.
 * @property ignoreAccentedVietnamese Whether the search should ignore punctuation or not. It mean if true all punctuation will be replaced by original character.
 * @property outputCaseOptions Whether the regex should match lowercase, uppercase, sameInput or both.
 * @default
 * sensitive false
 * ignoreAccentedVietnamese false
 * outputCaseOptions 'sameInput'
 *
 * @returns A regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter.
 */
export function generateRegexQuery(
    keyword: string,
    options: TGenerateSearchQuery = {
        sensitive: false,
        ignoreAccentedVietnamese: false,
        outputCaseOptions: OutputCaseOptions.sameInput,
    },
): RegExp {
    // Check that the keyword parameter is defined.
    if (keyword === undefined || keyword === null) {
        throw new Error('Keyword parameter is required');
    }

    if (typeof keyword !== 'string') {
        throw new Error('Keyword parameter must be a string');
    }

    // Remove diacritical marks from the keyword.
    const normalizedKeyword: string = options.ignoreAccentedVietnamese
        ? diacritics.remove(keyword)
        : keyword;

    // Check that the outputCaseOptions parameter is defined.
    let variations: Map<string, string> = sideCaseMap;
    switch (options.outputCaseOptions) {
        case OutputCaseOptions.lowercase:
            variations = sideLowerCaseMap;
            break;
        case OutputCaseOptions.uppercase:
            variations = sideUppercaseMap;
            break;
        case OutputCaseOptions.both:
            variations = allCaseOutput;
            break;
        case OutputCaseOptions.sameInput:
        default:
            variations = sideCaseMap;
            break;
    }

    // Generate the regex string.
    const regexString = Array.from(normalizedKeyword, (char: string) => {
        const variationsSet =
            variations.get(char) ||
            // If not a special character, return the character itself.
            (options.outputCaseOptions === OutputCaseOptions.both
                ? `${char.toLowerCase() + char.toUpperCase()}`
                : // Return with lowercase
                options.outputCaseOptions === OutputCaseOptions.lowercase
                ? char.toLowerCase()
                : // Return with uppercase
                options.outputCaseOptions === OutputCaseOptions.uppercase
                ? char.toUpperCase()
                : char);
        return `[${variationsSet}]`;
    }).join('');

    return new RegExp(regexString, options.sensitive ? '' : 'i');
}
