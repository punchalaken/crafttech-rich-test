import { useRef, useState } from "react";
import { Canvas } from "@widgets/Canvans";
import { Control } from "@widgets/Control";
import { Stage } from "konva/lib/Stage";

const MainPage = () => {
  const [tool, setTool] = useState<string>("shape");
  const stageRef = useRef<Stage>(null);

  return (
    <main>
      <Canvas tool={tool} stageRef={stageRef} />
      <Control tool={tool} setTool={setTool} />
    </main>
  );
};

export default MainPage;
