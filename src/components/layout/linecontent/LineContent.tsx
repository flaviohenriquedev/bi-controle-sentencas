import * as S from "./style";
import {HTMLAttributes, ReactNode} from "react";

interface LineContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    alignment?: "left" | "center" | "right";
    alignmentItem?: "start" | "center" | "end";
}

export function LineContent({children, alignment, alignmentItem, className}: LineContentProps) {
    return <S.Container className={className}
                        alignment={alignment}
                        alignmentItem={alignmentItem}>{children}</S.Container>;
}
