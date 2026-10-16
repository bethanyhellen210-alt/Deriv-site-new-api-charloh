import React from 'react';

type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
    icon?: string;
    color?: string;
    size?: number | string;
    custom_color?: string;
};

/** Compatibility icon used by legacy vendored components. */
export const Icon = ({ icon, color, size, custom_color, style, ...props }: IconProps) => (
    <span
        aria-hidden='true'
        data-icon={icon}
        {...props}
        style={{
            display: 'inline-block',
            width: size ? `${size}px` : undefined,
            height: size ? `${size}px` : undefined,
            color: custom_color || color,
            ...style,
        }}
    />
);
