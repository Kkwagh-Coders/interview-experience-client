import slugify from 'slugify';

const generateSlug = (text: string) => {
  return slugify(text);
};

export default generateSlug;
