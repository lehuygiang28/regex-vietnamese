import { OutputCaseOptions } from '../enums';

export type TGenerateSearchQuery = {
    sensitive?: boolean;
    ignoreAccentedVietnamese?: boolean;
    outputCaseOptions?: OutputCaseOptions | string;
};
