import styles from "./styles.module.css";

type Props = {
  color: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password: boolean;
};

export function InputField({
  color,
  placeholder,
  value,
  onChange,
  password,
}: Props) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={password ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ color: color }}
      />
    </div>
  );
}
