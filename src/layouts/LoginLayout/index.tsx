import { Outlet } from "react-router-dom";

import { LayoutContainer } from "./styles";



export function LoginLayout(){
    return(
        <LayoutContainer>
            <Outlet />
        </LayoutContainer>
    )
}