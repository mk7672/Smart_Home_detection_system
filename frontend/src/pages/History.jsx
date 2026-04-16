import { useEffect, useState } from "react";
import { getEvents } from "../services/api";

function History() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>History</h2>

      {events.map((e, i) => (
        <div key={i}>
          <img src={e.image_url} width="200" />
          <p>{e.label}</p>
        </div>
      ))}
    </div>
  );
}

export default History;