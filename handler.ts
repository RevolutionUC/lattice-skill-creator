import { APIGatewayEvent, Handler } from 'aws-lambda';
import parseCsv from './functions/parse-csv';
import generateInitialsUrl from './functions/generate-initials-url';
import createSkills from './functions/create-skills';
import downloadImage from './functions/download-image';
import resizeImage from './functions/resize-image';
import uploadImage from './functions/upload-image';

export const uploadSkill: Handler = async (e: APIGatewayEvent) => {
  // Get the csv string from http event data
  const csv = e.body;

  // Parse csv to get each skill title and image url
  const skills = parseCsv(csv);
  
  try {
    // For each csv entry:
    const uploadData = await Promise.all(skills.map(async skill => {
      // If image url is missing, use generate-initials-url
      if(!skill.icon) {
        skill.icon = generateInitialsUrl(skill.title);
      }
  
      // Download skill.icon image
      const iconPath = await downloadImage(skill);
  
      // If image is not svg, resize it to 64x64
      if(iconPath.toLowerCase().split('.').pop() != 'svg') {
        await resizeImage(iconPath);
      }
  
      // Upload the image to S3
      const remoteName = await uploadImage({ icon: iconPath, title: skill.title });
  
      // Get S3 uploaded image url
      skill.icon = remoteName;
  
      return skill;
    }));
  
    // Send skills data to revolutionuc-api
    const result = await createSkills(uploadData);
  
    // Return 201
    return { statusCode: 201, body: JSON.stringify(result) };
  } catch (err) {
    console.error(err);
  }
};

export const marco = (e) => {
  return { statusCode: 200, body: `polo` };
};
