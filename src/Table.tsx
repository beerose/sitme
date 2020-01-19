/** @jsx jsx */
import { css, jsx } from "@emotion/core";

type TableProps = {
  chairsCount: number;
};
export const Table: React.FC<TableProps> = ({ chairsCount }) => {
  const TABLE_RADIUS = 40;
  const CHAIR_RADIUS = 10;
  const TABBLE_PADDING = 15;
  return (
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
        {Array.from(Array(chairsCount).keys()).map(i => {
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
                  TABBLE_PADDING}px) rotate(${(360 / chairsCount) * i}deg)`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
