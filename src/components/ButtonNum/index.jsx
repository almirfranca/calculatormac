import { Container } from "./styles";

export function ButtonNum({value, onClick, ...rest}) {
  return(
    <Container 
      onClick={onClick} 
      value={value}
      {...rest}
    >
      {value}
    </Container>
  )
}