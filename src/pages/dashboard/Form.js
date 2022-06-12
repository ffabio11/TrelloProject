import Button from "../../components/Button";
import InputText from "../../components/InputText";
import "./css/Form.css";
import { useState } from "react";
import { CardContentFormModel } from "./FormModel";

function CreateCardContentForm({ onSubmit, children, onClose }) {
  const [cardContent, setCardContent] = useState({
    [CardContentFormModel.text]: "",
  });
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setCardContent({ ...cardContent, [name]: value });
  };

  /*const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const { text } = cardContent;
      const { data } = await httpCreateCard(text);
      return data;
    } catch (err) {
      console.log(err);
    }
  };*/

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="title">
        <label>{children}</label>
        <Button type={"button"} onClickHandler={onClose}>
          X
        </Button>
      </div>
      <InputText
        name={CardContentFormModel.text}
        id={CardContentFormModel.text}
        value={cardContent[CardContentFormModel.text]}
        onChange={onChangeHandler}
      ></InputText>
      <Button type={"submit"}>Submit</Button>
    </form>
  );
}

export default CreateCardContentForm;
