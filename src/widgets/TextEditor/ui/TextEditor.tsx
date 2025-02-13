import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ChangeEvent, forwardRef, useCallback, useEffect, useState } from "react";
import { TextEditorProps } from "@app/types/TextEditorProps";
import "./TextEditor.scss";
import { subtractedValue } from "@widgets/Shape/consts/subtractedValue";
import { Color } from '@tiptap/extension-color';

export const TextEditor = forwardRef<HTMLDivElement, TextEditorProps>(
  ({ setIsOpen, value, setValue, height, width, id, setChange }, ref) => {

    const editor = useEditor({
      content: value,
      extensions: [
        StarterKit, 
        Color.configure(
          {
            types: ['textStyle'],
          })],
      onUpdate: ({ editor }) => {
        setValue(editor.getHTML());
      },
    });

    const [isBold, setIsBold] = useState<boolean>(false);
    const [color, setColor] = useState<string>('#111111');
    const [size, setSize] = useState<number>(16);

    useEffect(() => {
      editor?.chain().focus().run();
      setChange((prev) => !prev);
    }, [editor, setChange, color, size]);

    const applyBold = useCallback((): void => {
      if (editor) {
        editor.chain().focus().toggleBold().run();
        setIsBold(editor.isActive('bold'));
      }
    }, [editor]);

    const handleColorCghange = (e: ChangeEvent<HTMLInputElement>): void => {
      const targetColor = e.target.value
      setColor(targetColor);
      editor?.chain().focus().setColor(targetColor).run();
    }
    
    return (
      <div className='editor_container'>
        <EditorContent
          editor={editor}
          id={`htmltext_${id}`}
          ref={ref}
          style={{
            width: width - subtractedValue,
            height: height - subtractedValue,
            color: color,
            fontSize: size,
          }}
        />
        <div className="editor_config">
          <button type="button" onClick={applyBold} style={isBold ? {fontWeight: 'bold'} : {}}>Ж</button>
          <input type="color" value={color} onChange={handleColorCghange}/>
          <input type="number" value={size} onChange={(e) => setSize(Number(e.target.value))} className="editor_size"/>
          <button type="button" onClick={() => setIsOpen(false)}>Ок</button>
        </div>
      </div>
    );
  },
);
