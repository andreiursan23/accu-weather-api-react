import CurrentDayDescriptionItem from "../CurrentDayDescriptionItem/CurrentDayDescriptionItem";

const CurrentDayDescription = ({ forecast }) => (
  <div className="mt-4 mt-md-2">
    <div className="d-flex flex-column mb-2">
      <CurrentDayDescriptionItem {...forecast} key={forecast.date} />
    </div>
  </div>
);

export default CurrentDayDescription;
