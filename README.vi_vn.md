# regex-vietnamese

<div style="text-align: center;">
    <h5>
        <a href="./README.vi_vn.md">VI</a>
        |
        <a href="./README.md">EN</a>
    </h5>
</div>
<br/>

Một thư viện JavaScript/TypeScript để hỗ trợ tìm kiếm văn bản tiếng Việt có hoặc không có dấu và các biến thể khác nhau của các chữ cái. Sử dụng để triển khai các chức năng tìm kiếm có tiếng Việt

Cài đặt:

Cài đặt `regex-vietnamese` với `npm`:
```bash
npm install regex-vietnamese
```

Cài đặt `regex-vietnamese` với `yarn`:
```bash
yarn add regex-vietnamese
```

Cài đặt `regex-vietnamese` với `pnpm`:
```bash
pnpm add regex-vietnamese
```

Sử dụng:
```typescript
// ES Modules
import { generateRegexQuery } from 'regex-vietnamese';

// CommonJS
const { generateRegexQuery } = require('regex-vietnamese');
```

Các tham số:
```typescript
const regex = generateRegexQuery(keyword, options);
```

* keyword - string - từ khóa để tạo regex
* options - TGenerateSearchQuery - các tùy chọn để tạo regex:
```typescript
import { generateRegexQuery, TGenerateSearchQuery, OutputCaseOptions } from 'regex-vietnamese';
const options: TGenerateSearchQuery = {
    sensitive: false, // mặc định: false
    ignoreAccentedVietnamese: false, // mặc định: false
    outputCaseOptions: OutputCaseOptions.sameInput, // mặc định: 'sameInput'
};
```

- `sensitive`: boolean - mặc định: false - không phân biệt chữ hoa chữ thường của regex
    ```typescript
    const keyword = 'Hà Nội oi';
    const options: TGenerateSearchQuery = { sensitive: true };
    const regex = generateRegexQuery(keyword, options);
    console.log(regex); // /[H][à][ ][N][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/
    ```

- `ignoreAccentedVietnamese`: boolean - mặc định: false - bỏ qua các ký tự tiếng Việt có dấu, tất cả các ký tự tiếng Việt có dấu sẽ được chuyển thành ký tự tiếng Việt không dấu. Nếu tùy chọn này là `true`, tất cả các ký tự sẽ được chuyển thành ký tự regex, nếu không, chỉ các ký tự tiếng Việt không dấu sẽ được chuyển thành ký tự regex (các ký tự tiếng Việt có dấu là các ký tự: Sắc, Huyền, Hỏi, Ngã, Nặng):
    ```typescript
    const keyword = 'Hà Nội oi'
    const regex = generateRegexQuery(keyword, { ignoreAccentedVietnamese: true });
    console.log(regex) // /[H][aáàảãạăắằẳẵặâấầẩẫậ][ ][N][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i
    ```

- `outputCaseOptions`: string - mặc định: 'sameInput' - tùy chọn chữ hoa chữ thường của regex: 'lowercase', 'uppercase', 'both'. Mặc định, chữ hoa chữ thường của regex sẽ tự động giống với chữ hoa chữ thường của từ khóa:
    ```typescript
    const keyword = 'Hà Nội oi'

    const regexLowercase = generateRegexQuery(keyword, { outputCaseOptions: 'lowercase' });
    console.log(regexLowercase); // /[h][à][ ][n][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i

    const regexUpperCase = generateRegexQuery(keyword, { outputCaseOptions: 'uppercase' });
    console.log(regexUpperCase); // /[H][À][ ][N][Ộ][IÍÌỈĨỊ][ ][OÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ][IÍÌỈĨỊ]/i

    const regexBothCase = generateRegexQuery(keyword, { outputCaseOptions: 'both' });
    console.log(regexBothCase); // /[hH][aáàảãạăắằẳẵặâấầẩẫậAÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬ][ ][nN][oóòỏõọôốồổỗộơớờởỡợOÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ][iíìỉĩịIÍÌỈĨỊ][ ][oóòỏõọôốồổỗộơớờởỡợOÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ][iíìỉĩịIÍÌỈĨỊ]/i
    ```

## Người đóng góp
<a href="https://github.com/lehuygiang28/regex-vietnamese/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lehuygiang28/regex-vietnamese" />
</a>