import * as fs from 'fs';
import { S3 } from 'aws-sdk';
import { SkillDto } from '../interfaces';
 
const s3 = new S3({ region: `us-east-1` });

export default async (skill: SkillDto) => {
  try {
    const file = fs.createReadStream(`./${skill.icon}`);
  
    const { Location } = await s3.upload({
      Bucket: `revolutionuc-assets-lattice-test`,
      Key: `${skill.icon.split(`/`).pop()}`,
      Body: file
    }).promise();

  
    return Location;
  } catch (err) {
    console.log(`could not read file`)
    console.error(err);
  }
};