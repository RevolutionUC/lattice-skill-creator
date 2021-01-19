import * as Jimp from 'jimp';

export default async (iconPath: string) => {
  const image = await Jimp.read(iconPath);

  return image.resize(64, 64).write(iconPath);
};
