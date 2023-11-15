import { useState } from "react";
import TableRow from "./TableRow";

function Table({ data, onSortedData }) {
  const [sortedByWindSpeed, setSortedByWindSpeed] = useState(false);
  const [sortedByRainSum, setSortedByRainSum] = useState(false);
  const [sortedByData, setSortedByData] = useState(false);

  function handleDate() {
    setSortedByData((prev) => !prev);
    if (sortedByData) {
      onSortedData([
        ...data.sort((a, b) => new Date(a.daily.time) - new Date(b.daily.time)),
      ]);
    } else {
      onSortedData([
        ...data.sort((a, b) => new Date(b.daily.time) - new Date(a.daily.time)),
      ]);
    }
  }

  function handleRainSum() {
    setSortedByRainSum((prev) => !prev);
    if (sortedByRainSum) {
      onSortedData([
        ...data.sort((a, b) => a.daily.rain_sum - b.daily.rain_sum),
      ]);
    } else {
      onSortedData([
        ...data.sort((a, b) => b.daily.rain_sum - a.daily.rain_sum),
      ]);
    }
  }

  function handleWindSpeed() {
    setSortedByWindSpeed((prev) => !prev);
    if (sortedByWindSpeed) {
      onSortedData([
        ...data.sort(
          (a, b) => a.daily.wind_speed_10m_max - b.daily.wind_speed_10m_max
        ),
      ]);
    } else {
      onSortedData([
        ...data.sort(
          (a, b) => b.daily.wind_speed_10m_max - a.daily.wind_speed_10m_max
        ),
      ]);
    }
  }

  return (
    <div className="table">
      <ul className="column-name">
        <li>Longitude</li>
        <li>Latitude</li>
        <li>Timezone</li>
        <li onClick={handleDate}>Date</li>
        <li onClick={handleRainSum}>Rain Sum</li>
        <li onClick={handleWindSpeed}>Wind Speed</li>
        <li>Date/Night</li>
      </ul>
      <div className="rows">
        {data.map((info, i) => (
          <TableRow info={info} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Table;
