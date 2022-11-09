// https://stackoverflow.com/questions/23571013/how-to-remove-url-from-a-string-completely-in-javascript
// const delUrlsFromText = (text) => text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
export const delUrlsFromText = (text) => text.replace(/(<([^>]+)>)/gi, "");
