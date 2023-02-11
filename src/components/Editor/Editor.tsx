import ReactQuill, { Quill } from 'react-quill';
import BlotFormatter from 'quill-blot-formatter';
import 'react-quill/dist/quill.snow.css';
import './quill.css';

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
};

function Editor() {
  return (
    <div id="root">
      <ReactQuill
        modules={modules}
        theme="snow"
        readOnly={false}
        placeholder="So recently I got interviewed at ........."
      />
    </div>
  );
}

export default Editor;
