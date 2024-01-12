import { Container } from "./styles";

export function ButtonExp({value, onClick, label = value, type, ...rest}) {
  return(
    <Container 
      onClick={onClick} 
      type="button"
      value={value}
      {...rest}
    >
      {label}
    </Container>
  )
}