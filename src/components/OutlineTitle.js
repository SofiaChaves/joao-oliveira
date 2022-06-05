export function OutlineTitle({ children }) {
    return (
        <span className="text-4xl xl:text-5xl 2xl:text-7xl font-bold uppercase text-outline text-transparent text-white hover:text-black whitespace-nowrap">
            {children}
        </span>
    );
}
