import slugify from 'slugify';

const generateSlug = (text: string) => slugify(text);

export default generateSlug;
