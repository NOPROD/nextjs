import styles from "./alert.module.scss";
import cn from "classnames";
import { AppProps } from "next/app";

export default function Alert({ children, type }: AppProps) {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
