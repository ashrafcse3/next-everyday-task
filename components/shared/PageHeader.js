import { Bungee_Shade } from '@next/font/google'

const bungee_shade = Bungee_Shade({
    subsets: ['latin'],
    weight: '400'
})
const PageHeader = ({ title }) => {
    return (
        <div className={`flex justify-center text-4xl text-black dark:text-white mt-7 ${bungee_shade.className}`}>
            {title}
        </div>
    );
};

export default PageHeader;