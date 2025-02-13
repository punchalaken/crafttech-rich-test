import html2canvas from "html2canvas";
import Konva from "konva";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Group, Rect } from "react-konva";
import { Html } from "react-konva-utils";
import { ShapeProps } from "@app/types/ShapeProps";
import { TextEditor } from "@widgets/TextEditor";
import { throttle } from "lodash";
import { subtractedValue } from "../consts/subtractedValue"

const Shape: FC<ShapeProps> = (props) => {
  const { x, y, width, height, tool, id, text, stageRef} = props;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(text);
  const [isChange, setChange] = useState<boolean>(false);

  const groupRef = useRef<Konva.Group>(null);
  const imageRef = useRef<Konva.Image | null>(null);
  const htmlRef = useRef<HTMLDivElement>(null);

  const renderImage = useCallback(async (): Promise<void> => {
    const htmltext = document.getElementById(`htmltext_${id}`);
    if (!htmltext) return;

    const canvas = await html2canvas(htmltext);

    if (imageRef.current) {
      imageRef.current.destroy();
    }

    const shape = new Konva.Image({
      x: 1,
      y: 1,
      width: width - subtractedValue,
      height: height - subtractedValue,
      image: canvas,
    });

    groupRef.current?.add(shape);
    imageRef.current = shape;
    groupRef.current?.getLayer()?.batchDraw();
  }, [id, width, height]);

  const throttleledRenderImage = useCallback(
    throttle(() => renderImage(), 200), [renderImage]
  );

  const handleClick = () => {
    if (tool === "cursor") {
      setIsEditing(true);
    }
  };

  const handleDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    if (groupRef.current) {
      groupRef.current.attrs.x = e.target.attrs.x;
      groupRef.current.attrs.y = e.target.attrs.y;
    }
  };

  useEffect(() => {
    const refItem = stageRef.current;
    if (!refItem) return;
  
    const handleMouseUp = (): void => {
      setIsEditing(false);
    };
  
    refItem.addEventListener('mouseup', handleMouseUp);

    return () => {
      refItem.removeEventListener('mouseup');
    };
  }, []);

  useEffect(() => {
    throttleledRenderImage()
  }, [value, throttleledRenderImage, isChange]);

  return (
    <>
      <Group
        x={x}
        y={y}
        onClick={handleClick}
        ref={groupRef}
        draggable={tool === "cursor"}
        onDragEnd={handleDragEnd}
      >
        <Rect stroke={"black"} width={width} height={height} />
        {isEditing && (
          <Html>
            <TextEditor
              setIsOpen={setIsEditing}
              value={value}
              setValue={setValue}
              width={width}
              height={height}
              id={id}
              ref={htmlRef}
              setChange={setChange}
            />
          </Html>
        )}
      </Group>
    </>
  );
};

export default Shape;