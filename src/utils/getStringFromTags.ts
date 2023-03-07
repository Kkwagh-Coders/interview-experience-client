const getStringFromTags = (tags: string[]) => {
  const stringTags = tags.map((tag) => `#${tag}`).join(' ');
  return stringTags;
};

export default getStringFromTags;
