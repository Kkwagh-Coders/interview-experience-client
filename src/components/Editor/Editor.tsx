import ReactQuill, { Quill } from 'react-quill';
import BlotFormatter from 'quill-blot-formatter';
import ImageCompress from 'quill-image-compress';
import 'react-quill/dist/quill.snow.css';
import './quill.css';
import { useFormikContext } from 'formik';

Quill.register('modules/imageCompress', ImageCompress);
Quill.register('modules/blotFormatter', BlotFormatter);

const modules = {
  toolbar: [
    'bold',
    'italic',
    'underline',
    'strike',
    'code-block',
    { header: 1 },
    { header: 2 },
    { list: 'ordered' },
    { list: 'bullet' },
    { script: 'sub' },
    { script: 'super' },
    'link',
    'image',
    { header: [1, 2, 3, 4, 5, 6, false] },
    { color: [] },
    { background: [] },

    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  blotFormatter: {},
  imageCompress: {
    quality: 0.7,
    maxWidth: 800,
    maxHeight: 800,
    imageType: 'image/jpeg',
    debug: true,
  },
};

type Props = {
  name: string;
};

function Editor({ name }: Props) {
  const formikProps = useFormikContext();

  const handleOnChange = (content: string) => {
    formikProps.setFieldValue(name, content);
  };

  return (
    <div id="root">
      <ReactQuill
        modules={modules}
        theme="snow"
        readOnly={false}
        placeholder="So recently I got interviewed at ........."
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Editor;
