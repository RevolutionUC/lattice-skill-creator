import * as fs from 'fs';
import * as util from 'util';
import Axios from 'axios';
import { SkillDto } from '../interfaces';
const download = require('image-downloader');

export default async (skill: SkillDto) => {
  try {
    if(skill.icon.includes('worldvectorlogo.com/download')) {
      const res = await Axios.get(skill.icon);
      const svgString: string = res.data;
      const filename = `./icons/${skill.title}.svg`;
      await util.promisify(fs.writeFile)(filename, svgString);
      // console.log(`Saved to ${filename} 1`);
      return filename;
    } else {
      const extension = skill.icon.toLowerCase().split('.').pop();
      const { filename } = await download.image({ url: skill.icon, dest: `./icons/${skill.title}.${extension === `svg` ? `svg` : `png`}` });
      // console.log(`Saved to ${filename} 2`);
      return filename;
    }
  } catch(err) {
    console.log({ skill });
    console.error(err);
  }
  return ``;
};