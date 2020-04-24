import React, { useContext } from "react";
import { ThemeContext, themes } from "../themeContext/ThemeContext";
import style from "./ThemePicker.module.css";
import { Dropdown } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
const ThemePicker = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const buttons = Object.keys(themes).map((key) => {
    return (
      <Dropdown.Item onClick={() => changeTheme(themes[key])}>
        {themes[key].name}
      </Dropdown.Item>
    );
  });

  return (
    <Dropdown className={style.picker}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <FormattedMessage id="Themes"/>: {theme.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>{buttons}</Dropdown.Menu>
    </Dropdown>
  );
};

export default ThemePicker;
