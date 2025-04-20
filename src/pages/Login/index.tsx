import { HomeContainer, BoxContainer } from "./styles"

  
import ctLogo from '../../assets/ct-logo.svg'

export function Login() {

  return (
    <HomeContainer>
      <BoxContainer>
        <img src={ctLogo} alt="CT Junior" className="logo" />

        <input type="text" placeholder="Login" />
        <input type="password" placeholder="Senha" />


        <button>Entrar</button>

        <p>
        <a href="/cadastro">Não possui senha? <br />Clique aqui para se cadastrar</a>
        </p>
      </BoxContainer>
    </HomeContainer>)
}