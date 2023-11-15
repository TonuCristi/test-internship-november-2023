import { useState } from "react";
import Table from "../components/Table";

function Home() {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [days, setDays] = useState(1);
  const [errMessage, setErrMessage] = useState("");
  // const [sortedData, setSortedData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=is_day,rain&daily=rain_sum,wind_speed_10m_max&forecast_days=${days}`
    )
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        if (lat.length > 0 && long.length > 0) {
          setData([info, ...data]);
        }
      })
      .catch((err) => setErrMessage("No data found for searched criteria"));

    // setLat("");
    // setLong("");
    // setDays(1);
    console.log(data);
  }

  const handleSortedData = (sorted) => setData(sorted);

  return (
    <div className="home">
      <form className="home-form" onSubmit={handleSubmit}>
        <div>
          <label>Latitude</label>
          <input
            value={long}
            onChange={(e) => {
              setLong(e.target.value);
            }}
            placeholder="Longitude..."
            type="text"
          />
        </div>
        <div>
          <label>Longitute</label>
          <input
            value={lat}
            onChange={(e) => {
              setLat(e.target.value);
            }}
            placeholder="Latitude..."
            type="text"
          />
        </div>

        <div>
          <label>Forecast</label>
          <select value={days} onChange={(e) => setDays(e.target.value)}>
            <option value={1}>1 day</option>
            <option value={3}>3 day</option>
            <option value={7}>7 day</option>
            <option value={14}>14 day</option>
          </select>
        </div>

        <button className="search-btn">Search</button>
      </form>

      {!!errMessage && <div className="error-message">{errMessage}</div>}

      {/* {!!errMessage && ( */}
      <Table data={data} onSortedData={handleSortedData} />
      {/* )} */}
    </div>
  );
}

export default Home;
