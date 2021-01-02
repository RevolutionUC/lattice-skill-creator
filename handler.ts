import { APIGatewayEvent, Handler } from 'aws-lambda';

export const uploadSkill: Handler = async (e: APIGatewayEvent) => {
  // get the csv string from http event data

  // parse csv to get each skill title and image url

  // for each csv entry:
  
    // download image

    // if image is not svg, resize it to 64x64

    // upload the image to s3

    // create an entry in the database with skill title and url

  // return 201
};

export const marco = () => ({ statusCode: 200, body: `polo` });
