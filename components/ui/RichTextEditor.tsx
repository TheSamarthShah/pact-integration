'use client';

import { useRef } from 'react';

interface RichTextEditorProps {
  name: string;
}

export default function RichTextEditor({ name }: RichTextEditorProps) {
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  // Sync the innerHTML to the hidden input
  const handleInput = () => {
    if (hiddenInputRef.current && editorRef.current) {
      hiddenInputRef.current.value = editorRef.current.innerHTML;
    }
  };

  // Function to create a link
  const addLink = () => {
    const url = prompt('Enter link URL:', 'https://');
    if (url) {
      // Focus the editor to preserve the user's text selection
      editorRef.current?.focus();
      
      // Native browser command to turn highlighted text into a link
      document.execCommand('createLink', false, url);
      
      // Force update the hidden input because execCommand doesn't trigger onInput
      handleInput(); 
    }
  };

  return (
    <div className="relative border border-slate-300 rounded-md overflow-hidden bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
      
      {/* Simple Toolbar */}
      <div className="bg-slate-50 border-b border-slate-200 p-2 flex gap-2">
        <button
          type="button"
          onClick={addLink}
          className="px-3 py-1 bg-white border border-slate-300 rounded text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-1"
          title="Highlight text first, then click to link"
        >
          🔗 Link
        </button>
      </div>

      {/* Editable HTML Area */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onBlur={handleInput}
        className="w-full p-3 min-h-[160px] max-h-[350px] overflow-y-auto focus:outline-none 
                   [&_ul]:list-disc [&_ul]:pl-5 
                   [&_ol]:list-decimal [&_ol]:pl-5 
                   [&_p]:mb-2 
                   [&_a]:text-blue-600 [&_a]:underline [&_a]:cursor-pointer" // Tailwind styles for links
      />
      
      {/* Hidden input field to hold the raw HTML string for FormData */}
      <input type="hidden" name={name} ref={hiddenInputRef} />
    </div>
  );
}