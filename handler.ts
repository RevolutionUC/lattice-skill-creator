import { APIGatewayEvent, Handler } from 'aws-lambda';
import parseCsv from './functions/parse-csv';
import generateInitialsUrl from './functions/generate-initials-url';
import createSkills from './functions/create-skills';
import downloadImage from './functions/download-image';
import resizeImage from './functions/resize-image';
import uploadImageToS3 from './functions/upload-image';

export const uploadSkill: Handler = async (e: APIGatewayEvent) => {
  // Get the csv string from http event data
  const csv = ``;

  // Parse csv to get each skill title and image url
  const skills = parseCsv(csv);

  // For each csv entry:
  const uploadData = await Promise.all(skills.map(async skill => {
    // If image url is missing, use generate-initials-url
    if(!skill.icon) {
      skill.icon = generateInitialsUrl(skill.title);
    }

    // Download skill.icon image
    const iconPath = await downloadImage(skill.icon);

    // If image is not svg, resize it to 64x64
    if(iconPath.toLowerCase().split('.').pop() != 'svg') {
      await resizeImage(iconPath);
    }

    // Upload the image to S3
    const remoteName = await uploadImageToS3(iconPath);

    // Get S3 uploaded image url
    skill.icon = `<url of the image on s3>`;

    return skill;
  }));

  // Send skills data to revolutionuc-api
  await createSkills(uploadData);

  // Return 201
  return { statusCode: 201, body: `Uploaded skills successfully` };
};

export const marco = () => ({ statusCode: 200, body: `polo` });
