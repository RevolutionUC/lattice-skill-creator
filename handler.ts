import { APIGatewayEvent, Handler } from 'aws-lambda';
import parseCsv from './functions/parse-csv';
import generateInitialsUrl from './functions/generate-initials-url';
import createSkills from './functions/create-skills';

export const uploadSkill: Handler = async (e: APIGatewayEvent) => {
  // get the csv string from http event data
  const csv = ``;

  // parse csv to get each skill title and image url
  const skills = parseCsv(csv);

  // for each csv entry:
  const uploadData = await Promise.all(skills.map(skill => {
    // if image url is missing, use generate-initials-url
    if(!skill.icon) {
      skill.icon = generateInitialsUrl(skill.title);
    }

    // download skill.icon image

    // if image is not svg, resize it to 64x64

    // upload the image to s3

    // get s3 uploaded image url
    skill.icon = `<url of the image on s3>`;

    return skill;
  }));

  // send skills data to revolutionuc-api
  await createSkills(uploadData);

  // return 201
  return { statusCode: 201, body: `Uploaded skills successfully` };
};

export const marco = () => ({ statusCode: 200, body: `polo` });
