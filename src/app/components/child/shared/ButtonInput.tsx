export default function ButtonInput({ type = 'button', className = '', category = 'primary', textSize = 'text-xs', disabled, children, ...props }: any) {

    const catClass = (category: string) => {
        switch (category) {
            case 'primary':
                return 'bg-tese-base text-white';
            case 'secondary':
                return 'bg-[#009FBD] text-white';
            case 'blue-ocean':
                return 'bg-[#3FA2F6] text-white';
            case 'danger':
                return 'bg-[#EF5A6F] text-white';
            case 'yageo':
                return 'bg-yageo-base text-white';
            case 'transparent':
                return 'bg-white text-black';

        }
    }

    return (
        <button
            {...props}
            type={type}
            className={
                `items-center px-4 py-2 flex justify-center ${catClass(category)} hover:bg-[#797B80] hover:cursor-pointer border border-transparent rounded-md font-semibold ${textSize} uppercase tracking-widest focus:outline-none focus:ring-2 transition ease-in-out duration-150 ${disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}