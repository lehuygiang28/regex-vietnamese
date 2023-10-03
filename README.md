# regex-vietnamese

`regex-vietnamese` is a JavaScript library that provides regular expressions for searching Vietnamese text with or without diacritical marks and with different variations of the same letter. It can be used to implement search functionality in applications that need to support Vietnamese text.

Installation
You can install `regex-vietnamese` using npm:
```sh
npm install regex-vietnamese
```

Usage

```javascript
import { generateRegexQuery } from 'regex-vietnamese';
const regex = generateRegexQuery({ keyword: 'Hà Nội oi' });
console.log(regex); // /[H][à][ ][N][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i
```

Options Properties

- `sensitive`: boolean - default: false - case insensitive of output regex:
    ```javascript
    const regex = generateRegexQuery({ keyword: 'Hà Nội oi', sensitive: true });
    console.log(regex); // /[H][à][ ][N][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/
    ```

- `ignoreAccentedVietnamese`: boolean - default: false - ignore accented Vietnamese, all accented characters will be converted to non-accented characters. If this option is true, all character will be converted to regex-like character, otherwise, only non-accented characters will be converted to regex-like character (accented in here is Vietnamese accented character: High Rising Tone, Low Falling Tone, Low Rising Tone, High Broken Tone, Heavy Tone):
    ```javascript
    const regex = generateRegexQuery({ keyword: 'Hà Nội oi', ignoreAccentedVietnamese: true });
    console.log(regex) // /[H][aáàảãạăắằẳẵặâấầẩẫậ][ ][N][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i
    ```

- `outputCaseOptions`: string - default: 'both' - output case options: 'lowercase', 'uppercase', 'both'. By default, output case will automatically same as input case:
    ```javascript
    const regex = generateRegexQuery({ keyword: 'Hà Nội oi', outputCaseOptions: 'lowercase' });
    console.log(regex); // /[h][à][ ][n][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i

    const regexUpperCase = generateRegexQuery({ keyword: 'Hà Nội oi', outputCaseOptions: 'uppercase' });
    console.log(regexUpperCase); // /[H][À][ ][N][Ộ][IÍÌỈĨỊ][ ][OÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ][IÍÌỈĨỊ]/i
    
    const regexBothCase = generateRegexQuery({ keyword: 'Hà Nội oi', outputCaseOptions: 'both' });
    console.log(regexBothCase); // /[hH][aáàảãạăắằẳẵặâấầẩẫậAÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬ][ ][nN][oóòỏõọôốồổỗộơớờởỡợOÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ][iíìỉĩịIÍÌỈĨỊ][ ][oóòỏõọôốồổỗộơớờởỡợOÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ][iíìỉĩịIÍÌỈĨỊ]/i
    ```

