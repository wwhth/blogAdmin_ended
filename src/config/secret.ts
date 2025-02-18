import * as fs from 'node:fs';
import * as path from 'node:path';
// const privateKey = fs.readFileSync(
//   path.resolve(__dirname, './keys/private.key'),
// );
// const publicKey = fs.readFileSync(path.resolve(__dirname, './keys/public.key'));

const privateKey = fs.readFileSync(
  path.resolve(process.cwd(), 'src/config/keys/private.key'), // 从项目根目录解析
  'utf-8',
);
const publicKey = fs.readFileSync(
  path.resolve(process.cwd(), 'src/config/keys/public.key'),
  'utf-8',
);
export { privateKey, publicKey };
