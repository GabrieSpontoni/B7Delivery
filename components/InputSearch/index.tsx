import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

import SearchIcon from "./SearchIcon";
import styles from "./styles.module.css";

type Props = {};

export function InputSearch({}: Props) {
  const { tenant } = useAppContext();
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={styles.container}
      style={{
        borderColor: focused ? tenant?.mainColor : "#fff",
      }}
    >
      <div className={styles.button}>
        <SearchIcon color={tenant?.mainColor} />
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
