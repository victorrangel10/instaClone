import ctLogo from '../../assets/ct-preto.svg'
import { SidebarContainer, ItemContainer } from './styles'

export function Sidebar() {
    return (
        <SidebarContainer>
            <img src={ctLogo} alt="CT Junior" className="logo" />
            <ItemContainer>
                <i className="material-icons">account_circle</i>
                <a href="/profile">Perfil</a>
            </ItemContainer>

            <ItemContainer >
                <i className="material-icons">home</i>
                <a href="/home">Feed</a>
            </ItemContainer>

            <ItemContainer>
                <i className="material-icons">add_circle_outline</i>
                <a href="/post">Postar</a>
            </ItemContainer>

            <ItemContainer>
                <i className="material-icons">more_vert</i>
                <a href="/edit">Editar</a>
            </ItemContainer>

              <ItemContainer>
                <i className="material-icons">keyboard_return</i>
                <a href="/home">Sair</a>
            </ItemContainer>

        </SidebarContainer>
    )
}