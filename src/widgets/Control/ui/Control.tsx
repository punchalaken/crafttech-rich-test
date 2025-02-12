import { ControlProps } from "@app/types/ControlProps";
import { FC } from "react";
import style from "./Control.module.scss";
import Navbar from "../consts/Navbar";
import { NavSelect } from "@shared/Navbar";

const Control: FC<ControlProps> = ({ tool, setTool }) => {
  return (
    <nav className={style.control}>
      {Navbar.map((item) => (
        <div className={style.control_input} key={item.id}>
          <input
            className={style.control_input_radio}
            type="radio"
            id={item.id}
            name="control"
            value={item.id}
            checked={tool === item.id}
            onChange={() => setTool(item.id)}
          />
          <label htmlFor={item.id}>{item.label}</label>
        </div>
      ))}
      <NavSelect />
    </nav>
  );
};

export default Control;
