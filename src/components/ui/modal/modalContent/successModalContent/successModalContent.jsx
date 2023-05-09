import styles from "./successModalContent.module.scss";
import PropTypes from "prop-types";
import Button from "../../../button";

const SuccessModalContent = ({ onClose }) => {
  const formDataString = localStorage.getItem("formData");
  const formData = JSON.parse(formDataString);
  const { tower, floor, room, date, timeRange, comment } = formData;

  return (
    <>
      <h2>Ваш заказ успешно оформлен!</h2>

      <div className={styles.bookingDetails}>
        <div className={styles.header}>
          <h3>Детали бронирования</h3>
        </div>
        <div className={styles.body}>
          <div className={styles.row}>
            <div className={styles.cell}>Башня</div>
            <div className={styles.cell}>{tower}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Этаж</div>
            <div className={styles.cell}>{floor}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Комната переговоров</div>
            <div className={styles.cell}>{room}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Дата</div>
            <div className={styles.cell}>{date}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Период времени</div>
            <div className={styles.cell}>
              {`${timeRange[0]} / ${timeRange[1]}`}
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.row}>
            <div className={styles.cell}>Комментарий</div>
            <div className={styles.cell}>
              {comment ? comment : "Принесем хорошее настроение!"}
            </div>
          </div>
        </div>
      </div>

      <Button
        appearance="ctv"
        onClick={() => {
          onClose();
          localStorage.clear();
        }}
      >
        Благдарим, что выбрали нас.
      </Button>

      <p className={styles.warning}>
        ВНИМАНИЕ! В случае изменений необходимо связаться с нами по почте или позвонить по телефону +7ХХХХХХХХХХ (так же можно и в удобном для вас мессенджере).
      </p>
    </>
  );
};

SuccessModalContent.propTypes = {
  bookingData: PropTypes.object,
  onClose: PropTypes.func,
};

export default SuccessModalContent;
