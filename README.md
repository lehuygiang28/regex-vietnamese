# regex-vietnamese

<div style="text-align: center;">
    <h5>
        <a href="./README.vi_vn.md">VI</a>
        |
        <a href="./README.md">EN</a>
    </h5>
</div>
<br/>

A JavaScript/TypeScript library for searching Vietnamese text with or without diacritical marks and different variations of letters. Ideal for implementing search functionality in Vietnamese applications

## Installation:

Install `regex-vietnamese` with `npm`:
```bash
npm install regex-vietnamese
```

Install `regex-vietnamese` with `yarn`:
```bash
yarn add regex-vietnamese
```

Install `regex-vietnamese` with `pnpm`:
```bash
pnpm add regex-vietnamese
```

## Usage:
```typescript
// ES Modules
import { generateRegexQuery } from 'regex-vietnamese';

// CommonJS
const { generateRegexQuery } = require('regex-vietnamese');
```

Parameters:
```typescript
const regex = generateRegexQuery(keyword, options);
```
* keyword - `string` - keyword to generate regex
* option - `TGenerateSearchQuery` - options to generate regex:
```typescript
import { generateRegexQuery, TGenerateSearchQuery, OutputCaseOptions } from 'regex-vietnamese';
const options: TGenerateSearchQuery = {
    sensitive: false, // default: false
    ignoreAccentedVietnamese: false, // default: false
    outputCaseOptions: OutputCaseOptions.sameInput, // default: 'sameInput'
};
```

- `sensitive`: boolean - default: false - case insensitive of output regex:
    ```typescript
    const keyword = 'Hà Nội oi';
    const options: TGenerateSearchQuery = { sensitive: true };
    const regex = generateRegexQuery(keyword, options);
    console.log(regex); // /[H][à][ ][N][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/
    ```

- `ignoreAccentedVietnamese`: boolean - default: false - ignore accented Vietnamese, all accented characters will be converted to non-accented characters. If this option is true, all character will be converted to regex-like character, otherwise, only non-accented characters will be converted to regex-like character (accented characters is Vietnamese accented character: High Rising Tone, Low Falling Tone, Low Rising Tone, High Broken Tone, Heavy Tone):
    ```typescript
    const keyword = 'Hà Nội oi'
    const regex = generateRegexQuery(keyword, { ignoreAccentedVietnamese: true });
    console.log(regex) // /[H][aáàảãạăắằẳẵặâấầẩẫậ][ ][N][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i
    ```

- `outputCaseOptions`: string - default: 'both' - output case options: 'lowercase', 'uppercase', 'both'. By default, output case will automatically same as input case:
    ```typescript
    const keyword = 'Hà Nội oi'

    const regexLowercase = generateRegexQuery(keyword, { outputCaseOptions: 'lowercase' });
    console.log(regexLowercase); // /[h][à][ ][n][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i

    const regexUpperCase = generateRegexQuery(keyword, { outputCaseOptions: 'uppercase' });
    console.log(regexUpperCase); // /[H][À][ ][N][Ộ][IÍÌỈĨỊ][ ][OÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ][IÍÌỈĨỊ]/i

    const regexBothCase = generateRegexQuery(keyword, { outputCaseOptions: 'both' });
    console.log(regexBothCase); // /[hH][aáàảãạăắằẳẵặâấầẩẫậAÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬ][ ][nN][oóòỏõọôốồổỗộơớờởỡợOÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ][iíìỉĩịIÍÌỈĨỊ][ ][oóòỏõọôốồổỗộơớờởỡợOÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ][iíìỉĩịIÍÌỈĨỊ]/i
    ```

## Contribution
<a href="https://github.com/lehuygiang28/regex-vietnamese/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lehuygiang28/regex-vietnamese" />
</a>