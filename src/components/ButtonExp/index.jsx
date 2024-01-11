import { Container } from "./styles";

export function ButtonExp({value, onClick, type, ...rest}) {
  return(
    <Container 
      onClick={onClick} 
      type="button"
      value={value}
      {...rest}
    >
      {value}
    </Container>
  )
}