import { HomeContainer, BoxContainer } from "./styles"

  
import ctLogo from '../../assets/ct-logo.svg'

export function Cadastro() {

  return (
    <HomeContainer>
      <BoxContainer>
        <img src={ctLogo} alt="CT Junior" className="logo" />

        <text>Realizar Cadastro</text>

        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Usuário(obs max = 15 caracteres)" />
        <input type="password" placeholder="Senha(obs min = 4 letras)" />
        <input type="password" placeholder="Confirmar senha" />
        <button>Cadastrar</button>
      </BoxContainer>
    </HomeContainer>)
}