import { Bar } from "@nivo/bar";

const Graph = ({ data }) => {
  return (
    <div className="stats-sheet">
      <label>Most popular in</label>
      {data.map((city) => (
        <div className="row" key={city.city}>
          <h5 style={{ marginBottom: "-10px", marginTop: "-10px" }}>
            {city.city}
          </h5>
          <div>
            <Bar
              data={[city]}
              layout="horizontal"
              enableGridY={false}
              enableLabel={false}
              maxValue={100}
              width={200}
              height={5}
              colors={["#000"]}
              isInteractive={false}
              theme={{ background: "#ffffff" }}
              padding={0}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Graph;
