import { Stage } from "konva/lib/Stage";
import { IRect } from "konva/lib/types";

export interface ShapeProps extends IRect {
  id: string;
  tool: string;
  text: string;
  stageRef: React.RefObject<Stage>;
}
