const loginInputs = ({
  chgTxt,
  email,
  setEmail,
  pass,
  setPass,
}) => [
  {
    placeholder: "Correo electrónico",
    chTxt: chgTxt(email, setEmail, "email"),
  },
  {
    placeholder: "Contraseña",
    chTxt: chgTxt(pass, setPass, "pass"),
  },
];

export default loginInputs;
