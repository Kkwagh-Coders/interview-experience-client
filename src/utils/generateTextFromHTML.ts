import { convert } from 'html-to-text';

const generateTextFromHTML = (html: string) => {
  const options = {
    selectors: [{ selector: 'img', format: 'skip' }],
  };
  const textContent = convert(html, options);
  return textContent.trimStart();
};

export default generateTextFromHTML;
