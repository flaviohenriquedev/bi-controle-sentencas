import * as S from './style'
import {Avatar} from "@/components/datadisplay/avatar";

export function AppLayoutHeader() {
    return (
        <S.Header>
            <S.LogoContainer>
                LOGO
            </S.LogoContainer>
            <div>
                <Avatar />
            </div>
        </S.Header>
    )
}
