import { useState } from "react";

import SearchIcon from "./SearchIcon";
import styles from "./styles.module.css";

type Props = {
  mainColor: string;
};

export function InputSearch({ mainColor }: Props) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={styles.container}
      style={{
        borderColor: focused ? mainColor : "#fff",
      }}
    >
      <div className={styles.button}>
        <SearchIcon color={mainColor} />
      </div>
      <input
        className={styles.input}
        placeholder="Pesquisar produto"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
