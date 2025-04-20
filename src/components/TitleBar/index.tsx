
import { TitleBarContainer,TitleBarLine, TitleText } from "./styles"

/**
 * Exemplo de uso:
 * <TitleBar text="Postar nova foto" />
 */
export function TitleBar({ text }) {
  return (
    <TitleBarContainer>
      <TitleText>{text}</TitleText>
      <TitleBarLine />
    </TitleBarContainer>
  )
}


