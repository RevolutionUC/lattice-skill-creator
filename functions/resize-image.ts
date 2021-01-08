import Jimp from 'jimp';

export default (iconPath: string) => {
    return Jimp.read(iconPath)
    .then(image => {
      return image
        .resize(64, 64)
        .write(iconPath); // Overwrite
    })
    .catch(err => {
      console.error(err);
    });
};
