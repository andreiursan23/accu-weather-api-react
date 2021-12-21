import styles from "../UpcomingDaysForecastItem/UpcomingDaysForecastItem.module.css";

const UpcomingDaysForecastItem = ({
  weekday,
  minTemperature,
  maxTemperature,
  imgUrl,
}) => (
  <li
    className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}
  >
    <img
      className="mb-2"
      width="50"
      src={imgUrl}
      alt="Weather description icon"
    />
    <span className="mb-2 font-weight-bold">{weekday}</span>
    <span>Min: {minTemperature}&deg;C</span>
    <span>Max: {maxTemperature}&deg;C</span>
  </li>
);

export default UpcomingDaysForecastItem;
