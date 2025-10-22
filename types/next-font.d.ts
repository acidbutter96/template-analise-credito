declare module 'next/font/google' {
    type FontOptions = {
        subsets?: string[];
        variable?: string;
        display?: string;
        weight?: string | string[] | number | number[];
        style?: string | string[];
    };

    export function Inter(options?: FontOptions): {
        variable?: string;
        className?: string;
        style?: Record<string, string>;
    };

    export function Roboto(options?: FontOptions): {
        variable?: string;
        className?: string;
        style?: Record<string, string>;
    };

    export default function font(options?: FontOptions): {
        variable?: string;
        className?: string;
        style?: Record<string, string>;
    };
}
