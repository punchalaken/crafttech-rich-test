import { Stage } from "konva/lib/Stage";
import { RefObject } from "react";

export interface CanvasProps {
  tool: string;
  stageRef: RefObject<Stage>;
}
