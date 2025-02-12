import { FC } from "react";
import style from "./NavSelect.module.scss";
import NavSelectValues from "../consts/NavSelectValues";

export const NavSelect: FC = () => {
  return (
    <>
      <label htmlFor="setClass">Выберите форму фигуры:</label>
      <select className={style.navSelect} id="setClass">
        {NavSelectValues.map((item) => (
          <option value={item.value} key={item.id}>
            {item.text}
          </option>
        ))}
      </select>
    </>
  );
};
