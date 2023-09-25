import { useState } from "react";
import Top from "../login/top";
import FormAction from "../common/formAction";
import InputField from "../common/inputField";

const fields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username",
  },
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
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Register() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {};

  return (
    <div className='flex h-full w-full flex-col justify-center items-center'>
      <Top
        heading='Signup to create an account'
        paragraph='Already have an account? '
        linkName='Login'
        linkUrl='/login'
      />
      <form className='space-y-6' onSubmit={(e) => handleSubmit(e)}>
        <div className=''>
          {fields.map((field) => (
            <InputField
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
          <FormAction text='Signup' />
        </div>
      </form>
    </div>
  );
}
