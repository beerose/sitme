/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core";
import { Table } from "./Table";
import { useState, ChangeEvent } from "react";

type InputWithLabelProps = {
  label: string;
  onChange: (value: number) => void;
  value: number;
};
const InputWithLabel = ({ label, onChange, value }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value, 10));
  };

  return (
    <div
      css={css`
        width: 190px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <label
        css={css`
          padding: 5px;
        `}
      >
        {label}
      </label>
      <input
        type="number"
        onChange={handleChange}
        value={value}
        css={css`
          width: 50px;
          height: 17px;
        `}
      />
    </div>
  );
};

const CHAIRS_COUNT = 10;
const TABLED_COUNT = 1;
export default function App() {
  const [chairsCount, setChairsCount] = useState(CHAIRS_COUNT);
  const [tablesCount, setTabledCount] = useState(TABLED_COUNT);

  return (
    <div>
      <Global
        styles={css`
          * {
            font-family: "system-ui";
          }
        `}
      />
      <div
        css={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <InputWithLabel
          value={tablesCount}
          onChange={setTabledCount}
          label="Number of tables"
        />
        <InputWithLabel
          value={chairsCount}
          onChange={setChairsCount}
          label="Number of chairs"
        />
      </div>
      <div>
        {Array.from(Array(tablesCount).keys()).map(i => (
          <Table chairsCount={chairsCount} />
        ))}
      </div>
    </div>
  );
}
