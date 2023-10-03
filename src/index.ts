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
 * const regex = generateRegexQuery({ keyword: 'Hà Nội oi' });
 * console.log(regex) // /[H][à][ ][N][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i
 *
 * // With sensitive option
 * const regex = generateRegexQuery({ keyword: 'Hà Nội oi', sensitive: true });
 * console.log(regex) // /[H][à][ ][N][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/
 *
 * // With ignoreAccentedVietnamese option
 * const regex = generateRegexQuery({ keyword: 'Hà Nội oi', ignoreAccentedVietnamese: true });
 * console.log(regex) // /[H][aáàảãạăắằẳẵặâấầẩẫậ][ ][N][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i
 *
 * @property keyword The keyword to search for.
 * @property sensitive Whether the search is case sensitive or not.
 * @property ignoreAccentedVietnamese Whether the search should ignore punctuation or not. It mean if true all punctuation will be replaced by original character.
 * @property outputCaseOptions Whether the regex should match lowercase, uppercase or both.
 * @default
 * sensitive false
 * ignoreAccentedVietnamese false
 * outputCaseOptions 'both'
 *
 * @returns A regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter.
 */
export function generateRegexQuery({
    keyword,
    sensitive = false,
    ignoreAccentedVietnamese = false,
    outputCaseOptions,
}: TGenerateSearchQuery) {
    // Check that the keyword parameter is defined.
    if (keyword === undefined) {
        throw new Error('Keyword parameter is required');
    }

    if (typeof keyword !== 'string') {
        throw new Error('Keyword parameter must be a string');
    }

    // Remove diacritical marks from the keyword.
    const normalizedKeyword: string = ignoreAccentedVietnamese
        ? diacritics.remove(keyword)
        : keyword;

    let variations = sideCaseMap;
    switch (outputCaseOptions) {
        case OutputCaseOptions.lowercase:
            variations = sideLowerCaseMap;
            break;
        case OutputCaseOptions.uppercase:
            variations = sideUppercaseMap;
            break;
        case OutputCaseOptions.both:
            variations = allCaseOutput;
            break;
        default:
            variations = sideCaseMap;
            break;
    }

    const regexString = Array.from(normalizedKeyword, (char: string) => {
        const variationsSet =
            variations.get(char) ??
            new Set(
                outputCaseOptions === OutputCaseOptions.both
                    ? char !== ''
                        ? `${char.toLowerCase() + char.toUpperCase()}`
                        : ''
                    : char,
            );
        return `[${Array.from(variationsSet).join('')}]`;
    }).join('');

    return new RegExp(regexString, sensitive ? '' : 'i');
}
