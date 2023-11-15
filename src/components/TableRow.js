function TableRow({ info }) {
  return (
    <ul className="row">
      <li>{info.longitude}</li>
      <li>{info.latitude}</li>
      <li>{info.timezone}</li>
      <li>{info.daily.time}</li>
      <li>
        {info.daily.rain_sum} {info.daily_units.rain_sum}
      </li>
      <li>
        {info.daily.wind_speed_10m_max} {info.daily_units.wind_speed_10m_max}
      </li>
      <li>{!!info.current.isDay ? "Day" : "Night"}</li>
    </ul>
  );
}

export default TableRow;
