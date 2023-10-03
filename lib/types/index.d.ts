import { OutputCaseOptions } from '../enums';
export type TGenerateSearchQuery = {
    keyword: string;
    sensitive?: boolean;
    ignoreAccentedVietnamese?: boolean;
    outputCaseOptions?: OutputCaseOptions | string;
};
