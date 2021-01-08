import download from 'image-downloader';

export default (iconUrl: string) => {
    const options = {
        url: iconUrl,
        dest: '/icons/'
    }
    return download.image(options)
    .then(({ filename }) => {
        console.log('Saved to' + filename);
        return filename;
    })
    .catch((err) => console.error(err))
};