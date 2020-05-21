import React, { Fragment } from "react";
import Form from "./Form";
import Accounts from "./CloudManager";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Accounts />
    </Fragment>
  );
}
