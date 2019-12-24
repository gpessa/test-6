import React, { useState } from "react";
import useHorizontal from '@oberon-amsterdam/horizontal/hook';

import styles from "./styles.module.css";

const ScrollingContainer: React.FC<Props> = ({ children }: Props ) => {
  const [container, setContainer] = useState();
  useHorizontal({ container: container });

  return (
    <div
      className={styles.container}
      ref={ref => {
        setContainer(ref);
      }}
    >
      {children.map((slide, index) => {
        return React.cloneElement(slide, {
          key: index,
          className: styles.block
        });
      })}
    </div>
  )
};

interface Props {
  children: JSX.Element[]
}

export default ScrollingContainer;


