import React from "react";
import * as MultiStep from "components/MultiStep/MultiStep";

const Users = () => (
  <div className="columns is-centered">
    <div className="column is-half">
      <MultiStep.Wizard>
        <MultiStep.Page pageIndex={1}>
          <div className="box">
            <p className="title">What's your name</p>
            <input type="text" name="name" placeholder="name" />
          </div>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={2}>
          <div className="box">
            <p className="title">And your last name?</p>
            <input type="text" name="lastName" placeholder="last name" />
          </div>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={3}>
          <div className="box">
            <p className="title">What about your phone number?</p>
            <input type="text" name="phone" placeholder="phone" />
          </div>
        </MultiStep.Page>
        <MultiStep.Controls className="columns is-centered" />
      </MultiStep.Wizard>
    </div>
  </div>
);

export default Users;
