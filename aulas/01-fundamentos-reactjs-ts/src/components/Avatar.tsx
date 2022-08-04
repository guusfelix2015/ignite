import { HTMLAttributes } from "react";

import styles from "./Avatar.module.css";

interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  console.log(props);
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
