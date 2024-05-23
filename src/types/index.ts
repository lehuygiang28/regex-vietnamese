export type OutputCase = 'same' | 'lower' | 'upper' | 'lowerAndUpper';

export type CreateRegexOptions = {
    sensitive?: boolean;
    ignoreAccentedVietnamese?: boolean;
    outputCase?: OutputCase;
};
