import * as fs from 'fs';
import * as util from 'util';

export default async (filePath: string) => {
  return util.promisify(fs.unlink)(filePath);
}