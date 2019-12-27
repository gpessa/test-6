import React from "react";
import ScrollNavigation from "react-single-page-navigation";

import Button from "../Button";
import styles from "./styles.module.scss";

const Section: React.FC<Props> = ({ sections }) => {
  const elements = sections.reduce((elements, element, index) => {
    return {
      ...elements,
      [`element_${index}`]: {}
    };
  }, {}) as {
    [key: string]: any;
  };

  return (
    <div className={styles.element}>
      <ScrollNavigation elements={elements} offset={-110}>
        {({ refs, activeElement, goTo }) => (
          <div>
            {Object.values(refs).map((child, index) => {
              const { element, label } = sections[index];
              return (
                <section className={styles.section} ref={child}>
                  {label && <h2 className={styles.title}>{label}</h2>}
                  {React.cloneElement(element, {
                    key: index,
                    className: styles.block
                  })}
                </section>
              );
            })}
            <div className={styles.nav}>
              {Object.values(refs).map((child, index) => (
                <Button
                  variant="link"
                  className={`${styles.navLink} ${activeElement ===
                    `element_${index}` && styles.navLinkActive}`}
                  onClick={() => goTo(`element_${index}`)}
                  title={sections[index].label}
                >
                  <div className={styles.navIcon}>{sections[index].icon}</div>
                </Button>
              ))}
            </div>
          </div>
        )}
      </ScrollNavigation>
    </div>
  );
};

interface Props {
  sections: {
    element: JSX.Element;
    icon: JSX.Element;
    label?: string;
  }[];
}

export default Section;
