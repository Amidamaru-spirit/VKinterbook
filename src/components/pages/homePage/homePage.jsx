import React from "react";

import styles from "./homePage.module.scss";
import useModal from "../../../common/hooks/useModal";

import Modal from "../../ui/modal";
import Button from "../../ui/button";

import { rules } from "../../../common/constants/rules";

import plusIcon from "../../../assets/icons/plus.svg";
import minusIcon from "../../../assets/icons/minus.svg";
import background from "../../../assets/images/background.png";

const instruction = rules.map((rule, index) => <li key={index}>{rule}</li>);

const HomePage = () => {
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const { modalVariety, handleModalOpen, handleModalClose, modalOpen } =
    useModal();

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.logo}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://internship.vk.company/vacancy/632"
            >
             Бронирование переговорной
            </a>
          </h3>

          <div className={styles.heading}>
            <h1>Приветствуем Вас!</h1>
            <h2>Забронируем переговорную?</h2>
          </div>
          <div>
            <details>
              <summary onClick={toggleDetails}>
                <img
                  src={detailsOpen ? minusIcon : plusIcon}
                  alt={detailsOpen ? "minus" : "plus"}
                />
                <p>Как забронировать?</p>
              </summary>
              <ol>{instruction}</ol>
            </details>
          </div>
          <Button appearance="ctv" onClick={() => handleModalOpen("booking")}>
            Забронировать
          </Button>


        </div>
        <div className={styles.imgBack}>
            <img className={styles.abstract} src={background} alt="abstract" />
        </div>
      </div>

      {modalOpen && (
        <Modal
          variety={modalVariety}
          isOpen={modalOpen}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default HomePage;
