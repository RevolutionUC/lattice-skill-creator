import { APIGatewayEvent, Handler } from 'aws-lambda';

export const uploadSkill: Handler = async (e: APIGatewayEvent) => {
  // get the skill title and image url from event data
  
  // download image

  // if image is not svg, resize it to 64x64

  // upload the image to s3

  // create an entry in the database with skill title and url

  // return 201
};

export const marco = () => ({ statusCode: 200, body: `polo` });
