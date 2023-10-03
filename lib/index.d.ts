import { TGenerateSearchQuery } from './types';
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
 * console.log(regex) // /[H][àáạảãâầấậẩẫăắằặẳẵ][][N][ộơờớợởỡ][iíìịỉĩ][][ộơờớợởỡ][iíìịỉĩ]/i
 *
 * // With sensitive option
 * const regex = generateRegexQuery({ keyword: 'Hà Nội oi', sensitive: true });
 * console.log(regex) // /[H][àáạảãâầấậẩẫăắằặẳẵ][N][ộơờớợởỡ][iíìịỉĩ]/
 *
 * // With ignoreAccentedVietnamese option
 * const regex = generateRegexQuery({ keyword: 'Hà Nội oi', ignoreAccentedVietnamese: true });
 * console.log(regex) // /[H][aáàảãạăắằẳẵặâấầẩẫậ][N][oóòỏõọôốồổỗộơớờởỡợ][iíìịỉĩ]/
 *
 * @property keyword The keyword to search for.
 * @property caseSensitive Whether the search is case sensitive or not.
 * @property ignoreAccentedVietnamese Whether the search should ignore punctuation or not. It mean if true all punctuation will be replaced by original character.
 * @property outputCaseOptions Whether the regex should match lowercase, uppercase or both.
 * @default
 * caseSensitive false
 * ignoreAccentedVietnamese false
 * outputCaseOptions 'both'
 *
 * @returns A regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter.
 */
export declare function generateRegexQuery({ keyword, sensitive, ignoreAccentedVietnamese, outputCaseOptions, }: TGenerateSearchQuery): RegExp;
