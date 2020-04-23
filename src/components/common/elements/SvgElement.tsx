import * as React from "react";

export const enum iconTypesEnum {
    CLOSE_ICON
}

interface SvgElementProps {
    type: iconTypesEnum;
    className?: string;
    onClick?: (event) => void;
}

export const SvgElement: React.FunctionComponent<SvgElementProps> = React.memo((props: SvgElementProps): React.ReactElement<void> => {
    function renderIcon() {
        switch (props.type) {
            case iconTypesEnum.CLOSE_ICON: return <svg onClick={props.onClick} className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z" /></svg>;
            default: return <div />;
        }
    }
    return (renderIcon());
});
