import React from "react";
import { Field, reduxForm } from "redux-form";
import { email, required, password } from "../../../Utils/validators";
import Input from "../Input/Input";

export default function Registration(props) {
  const RegistrationForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field
          component={Input}
          name="email"
          id="email-input"
          validate={[required, email]}
        />
        <Field
          component={Input}
          name="password"
          id="password-input"
          validate={[required, password]}
        />
        <Field component={Input} name="company" id="company-input" />
        <button className="btn">Зарегистрироваться</button>
      </form>
    );
  };
  const RegistrationReduxForm = reduxForm({ form: "registration" })(
    RegistrationForm
  );
  const onSubmit = (formData) => {
    let password = document.querySelector("#password-input").value;
    let email = document.querySelector("#email-input").value;
    props.registrationPostThunkCreator(email, password);
  };

  return <RegistrationReduxForm onSubmit={onSubmit} />;
}
