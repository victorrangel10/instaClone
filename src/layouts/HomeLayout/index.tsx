import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { LayoutContainer, ContentContainer } from "./styles";
import { SidebarContainer } from "./styles";

export function HomeLayout(){
    return(
        
        <LayoutContainer>        
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
            <ContentContainer>
                <Outlet />
            </ContentContainer>
        </LayoutContainer>
    )
}