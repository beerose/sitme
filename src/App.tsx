/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function App() {
  const CHAIRS_COUNT = 10;
  const TABLE_RADIUS = 40;
  const CHAIR_RADIUS = 10;
  const TABBLE_PADDING = 15;
  return (
    <div>
      <div
        css={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <span>
          <label>Number of tables</label>
          <input type="number" />
        </span>
        <span>
          <label>Number of chairs</label>
          <input type="number" />
        </span>
      </div>
      <div
        css={{
          padding: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "*": {
            boxSizing: "border-box"
          }
        }}
      >
        <div
          css={css({
            width: `${TABLE_RADIUS * 2}px`,
            height: `${TABLE_RADIUS * 2}px`,
            borderRadius: "50%",
            border: "1px solid black",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          })}
        >
          {Array.from(Array(CHAIRS_COUNT).keys()).map(i => {
            return (
              <div
                css={{
                  transformOrigin: `50% ${TABLE_RADIUS +
                    CHAIR_RADIUS +
                    TABBLE_PADDING}px`,
                  width: `${CHAIR_RADIUS * 2}px`,
                  height: `${CHAIR_RADIUS * 2}px`,
                  borderRadius: "50%",
                  border: "1px solid black",
                  position: "absolute",
                  transform: `translateY(-${TABLE_RADIUS +
                    TABBLE_PADDING}px) rotate(${(360 / CHAIRS_COUNT) * i}deg)`
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
