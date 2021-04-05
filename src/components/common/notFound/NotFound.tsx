import * as React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const NotFound: React.FunctionComponent = React.memo(
  (): React.ReactElement<void> => {
    const { t } = useTranslation();

    return (
      <div className={styles.errorContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t("notFound.title")}</h1>
          <p className={styles.desc}>{t("notFound.desc")}</p>
        </div>
      </div>
    );
  }
);

export default NotFound;
