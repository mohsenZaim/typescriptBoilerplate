import * as React from 'react';
import './loader.scss';

export interface LoaderProps {
    toggle: boolean;
    fullscreen?: boolean;
    className?: string;
    children?: React.ReactElement;
}

export const Loader: React.FunctionComponent<LoaderProps> = React.memo(
    (props: LoaderProps): React.ReactElement<void> => {
        if (props.toggle) {
            return (
                <div className={`loader-wrapper ${props.fullscreen ? 'fullscreen' : ''} ${props.className || ''}`}>
                    <div className="loader-holder">
                        <div className="loader" />
                    </div>
                </div>
            );
        }
        return props.children ?? null;
    }
);
