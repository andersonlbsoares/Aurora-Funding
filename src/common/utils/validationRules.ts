import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Nome é obrigatório";
  }
  if (!values.email) {
    errors.email = "Email é obrigatório";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "O email é inválido";
  }
  if (!values.message) {
    errors.message = "Mensagem é obrigatória";
  }
  return errors;
}
