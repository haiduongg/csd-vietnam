const translationURL = (item) => {
  let lowerName = item.toLowerCase();
  let result = lowerName.replaceAll(' ', '-');
  return result;
};

export default translationURL;
