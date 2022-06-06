export function OutlineTitle({ children, color = 'text-white' }) {
    return (
        <span
            className={`text-4xl xl:text-5xl 2xl:text-7xl font-bold uppercase text-outline hover:text-black whitespace-nowrap ${color}`}
        >
            {children}
        </span>
    );
}
