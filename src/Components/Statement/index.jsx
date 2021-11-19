import React from "react";
import { statementList } from "../../info";
import Items from "../Items";
import { Box, Button } from "../UI";

const Statement = () => {
  return (
    <Box>
      {statementList.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Button>Ver mais</Button>
    </Box>
  );
};
export default Statement;
