import { Container, Row, Col } from "react-bootstrap";

import styles from "../Forecast/Forecast.module.css";

import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentDayDescription from "../CurrentDayDescription/CurrentDayDescription";
import UpcomingDaysForecast from "../UpcomingDaysForecast/UpcomingDaysForecast";

function Forecast({ forecast }) {
  return (
    <Container className={styles.box}>
      <Row>
        <Col xs={12} md={4}>
          <div className={styles.card}>
            <CurrentDay {...forecast.currentDayForecast} />
          </div>
        </Col>
        <Col
          xs={12}
          md={8}
          className="d-flex flex-column justify-content-between"
        >
          <CurrentDayDescription forecast={forecast.currentDayForecast} />
          <UpcomingDaysForecast days={forecast.upcomingDaysForecast} />
        </Col>
      </Row>
    </Container>
  );
}

export default Forecast;
