import ReactQuill, { Quill } from 'react-quill';
import BlotFormatter from 'quill-blot-formatter';
import ImageCompress from 'quill-image-compress';
import 'react-quill/dist/quill.snow.css';
import './quill.css';

Quill.register('modules/imageCompress', ImageCompress);
Quill.register('modules/blotFormatter', BlotFormatter);

type Props = {
  content: string;
};

function DisplayQuill({ content }: Props) {
  return (
    <div className="display-quill-container">
      <ReactQuill theme="bubble" readOnly value={content} />
    </div>
  );
}

export default DisplayQuill;
