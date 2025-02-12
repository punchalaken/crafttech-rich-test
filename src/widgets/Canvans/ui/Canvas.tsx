import { FC, useState } from "react";
import { Layer, Stage } from "react-konva";
import { Shape } from "@widgets/Shape";
import { Figure } from "@app/types/Figure";
import { CanvasProps } from "@app/types/CanvasProps";
import { Vector2d } from "konva/lib/types";
import Konva from "konva";

const Canvas: FC<CanvasProps> = ({ tool, stageRef }) => {
  const [figures, setFigures] = useState<Figure[]>([]);

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (tool === "cursor") return;

    const stage: Konva.Stage | null = e.target.getStage();

    if (!stage) return;

    const stageOffset: Vector2d = stage.absolutePosition();
    const point: Vector2d | null = stage.getPointerPosition();

    if (!point) return;

    setFigures((prev: Figure[]) => [
      ...prev,
      {
        id: Date.now().toString(36),
        width: 100,
        height: 100,
        type: "rect",
        x: point.x - stageOffset.x,
        y: point.y - stageOffset.y,
        text: "",
      },
    ]);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      draggable={tool === "cursor"}
      onClick={handleOnClick}
      ref={stageRef}
    >
      <Layer>
        {figures.map((figure: Figure) => {
          return (
            <Shape
              key={figure.id}
              {...figure}
              stageRef={stageRef}
              tool={tool}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;
