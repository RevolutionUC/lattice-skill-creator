export default (title: string) => {
  return `https://ui-avatars.com/api/?name=${title.split(` `).join(`+`)}&size=64`;
}