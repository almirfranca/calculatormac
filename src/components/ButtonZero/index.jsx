import { Container } from "./styles"

export function ButtonZero({value, onClick, ...rest}) {
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