import { APIGatewayEvent, Handler } from 'aws-lambda';
import parseCsv from './functions/parse-csv';

export const uploadSkill: Handler = async (e: APIGatewayEvent) => {
  // get the csv string from http event data
  const csv = ``;

  // parse csv to get each skill title and image url
  const skills = parseCsv(csv);

  // for each csv entry:
  await Promise.all(skills.map(skill => {
    // download image
    
    // if image is not svg, resize it to 64x64
    
    // upload the image to s3
    
    // create an entry in the database with skill title and url

  }));

  // return 201
  return { statusCode: 201, body: `Uploaded skills successfully` };
};

export const marco = () => ({ statusCode: 200, body: `polo` });
