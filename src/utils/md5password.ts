import { createHash } from 'crypto';
const md5password = (password:string) :string=> {
  const md5 = createHash("md5");
  const md5Password = md5.update(password).digest("hex");
  return md5Password;
};
module.exports = md5password;
