import React from "react";
import * as MultiStep from "components/MultiStep/MultiStep";

const Users = () => (
  <div>
    <p>Users</p>
    <MultiStep.Wizard>
      <MultiStep.Controls />
      <MultiStep.Page>Page 1</MultiStep.Page>
      <MultiStep.Page>Page 2</MultiStep.Page>
      <MultiStep.Page>Page 3</MultiStep.Page>
    </MultiStep.Wizard>
  </div>
);

export default Users;
