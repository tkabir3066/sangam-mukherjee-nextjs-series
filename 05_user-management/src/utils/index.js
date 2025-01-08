export const addNewUserFormControls = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "Enter your first name",
    type: "input",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Enter your Last name",
    type: "input",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your Email id",
    type: "email",
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Enter your address details",
    type: "input",
  },
];

export const addNewUserFormInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
};
