const registerInputs = ({
  name,
  setName,
  chgTxt,
  username,
  setUsername,
  surname,
  setSurname,
  email,
  setEmail,
  pass,
  setPass,
  confirmPass,
  setConfirmPass,
}) => [
  {
    placeholder: "Nombre",
    chTxt: chgTxt(name, setName, "name"),
  },
  {
    placeholder: "Apellido",
    chTxt: chgTxt(surname, setSurname, "name"),
  },
  {
    placeholder: "Nombre de usuario",
    chTxt: chgTxt(username, setUsername, "username"),
  },
  {
    placeholder: "Correo electrónico",
    chTxt: chgTxt(email, setEmail, "email"),
  },
  {
    placeholder: "Contraseña",
    chTxt: chgTxt(pass, setPass, "pass"),
  },
  {
    placeholder: "Confirmar contraseña",
    chTxt: chgTxt(confirmPass, setConfirmPass, "pass"),
  },
];

export default registerInputs;
