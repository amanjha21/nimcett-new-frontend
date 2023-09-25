import { useState } from "react";
import Top from "../login/top";
import InputField from "../common/inputField";
import FormAction from "../common/formAction";

const fields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
];
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginState);
    // createAccount();
  };
  return (
    <div className=' flex h-full w-full flex-col justify-center items-center'>
      <Top
        heading='Login to your account'
        paragraph="Don't have an account yet? "
        linkName='Signup'
        linkUrl='/register'
      />
      <form className='space-y-6' onSubmit={(e) => handleSubmit(e)}>
        <div>
          {fields.map((field) => (
            <InputField
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
          <FormAction text='Login' />
        </div>
      </form>
    </div>
  );
}
