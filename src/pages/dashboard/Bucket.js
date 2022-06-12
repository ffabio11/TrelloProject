import React, { useState } from "react";
import Button from "../../components/Button";
import PopUp from "../../components/PopUp";
import Form from "./Form";
import { CardContentFormModel } from "./FormModel";
import { httpPostContent } from "../../api.http.js";
import { useSelector } from "react-redux";

const Bucket = ({ title, children, dashKey, loadDashboard }) => {
  const [show, setShow] = useState(false);
  const onClickHandler = (e) => {
    setShow(!show);
  };

  const selectDashboards = useSelector((state) => state.app.dashboards);
  console.log("selectDashboards", selectDashboards);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { value } = e.target[CardContentFormModel.text];
    if (value !== "") {
      const content = { text: value };
      const isSuccess = await sendContent(content);
      setShow(!isSuccess);
      loadDashboard();
    } else {
      console.log("Stringa content vuota.");
    }
  };
  const sendContent = async (data) => {
    try {
      await httpPostContent(dashKey, data);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <div className="bucket">
      <h2>{title}</h2>
      <div className="cards">{children}</div>
      <Button onClickHandler={onClickHandler}>Add Card</Button>
      {show && (
        <PopUp>
          <div className="form-container">
            <Form onSubmit={onSubmitHandler} onClose={() => setShow(false)}>
              Add Card
            </Form>
          </div>
        </PopUp>
      )}
    </div>
  );
};
export default Bucket;
