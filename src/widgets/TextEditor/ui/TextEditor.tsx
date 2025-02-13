import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { forwardRef, useEffect } from "react";
import { TextEditorProps } from "@app/types/TextEditorProps";
import "./TextEditor.scss";
import { subtractedValue } from "@widgets/Shape/consts/subtractedValue";

export const TextEditor = forwardRef<HTMLDivElement, TextEditorProps>(
  ({ setIsOpen, value, setValue, height, width, id }, ref) => {


    const editor = useEditor({
      content: value,
      extensions: [StarterKit],
      onUpdate: ({ editor }) => {
        setValue(editor.getHTML());
      },
    });

    useEffect(() => {
      editor?.chain().focus().run();
    }, [editor]);

    return (
      <div className='editor_container'>
        <EditorContent
          editor={editor}
          id={`htmltext_${id}`}
          ref={ref}
          style={{
            width: width - subtractedValue,
            height: height - subtractedValue,
          }}
        />
        <div className="editor_config">
          <button type="button">Шрифт</button>
          <button type="button">Цвет</button>
          <button type="button">Жирным</button>
          <button type="button" onClick={() => setIsOpen(false)}>Ок</button>
        </div>
      </div>
    );
  },
);
