import UpcomingDaysForecastItem from "../UpcomingDaysForecastItem/UpcomingDaysForecastItem";

import styles from "../UpcomingDaysForecast/UpcomingDaysForecast.module.css";

const UpcomingDaysForecast = ({ days }) => (
  <ul className={`${styles.weekList} d-flex justify-content-between p-0 flex-wrap`}>
    {days.map((day) => (
      <UpcomingDaysForecastItem {...day} key={day.weekday} />
    ))}
  </ul>
);

export default UpcomingDaysForecast;
