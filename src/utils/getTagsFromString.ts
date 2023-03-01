const getTagsFromString = (stringTag: string) => {
  const tags = stringTag
    .replaceAll('#', '')
    .split(/(\s+)/)
    .filter((e) => e.trim().length > 0);

  return tags;
};

export default getTagsFromString;
