import dynamic from 'next/dynamic'

const ToggleThemeNoSSR= dynamic(() => import('../../../components/action/toggle_theme/ToggleTheme'), {ssr: false})

export const AppLayoutTheme = () => {
    return (
        <ToggleThemeNoSSR/>
    );
};
