const CurrentDayDescriptionItem = ({
  location,
  realFeelTemp,
  windSpeedKm,
  humidity,
  pressureMb,
}) => (
  <div>
    <p className="mb-0 font-weight-bolder text-uppercase">{location}</p>
    <p className="mb-0">Real feel temperature: {realFeelTemp}</p>
    <p className="mb-0">Wind speed: {windSpeedKm} km/h</p>
    <p className="mb-0">Humidity: {humidity}%</p>
    <p className="mb-0">Pressure: {pressureMb} mb</p>
  </div>
);

export default CurrentDayDescriptionItem;
