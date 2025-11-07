import { useState } from 'react';
import TextFileInput from './TextFileInput';
import TextFileViewer from './TextFileViewer';
import { processText } from '../../../utils/textUtils';

export default function TextFileProcessor() {
  const [file, setFile] = useState<File | null>(null);
  const [content, setContent] = useState('');
  const [processed, setProcessed] = useState('');

  const handleFileChange = (f: File | null) => {
    setFile(f);
    if (!f) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setContent(text);
      setProcessed(processText(text));
    };
    reader.readAsText(f);
  };

  return (
    <div className="flex flex-col gap-2">
      <TextFileInput onChange={handleFileChange} />

      {file && (
        <TextFileViewer file={file} content={content} processed={processed} />
      )}
    </div>
  );
}
