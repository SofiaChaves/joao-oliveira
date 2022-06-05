import { useState } from 'react';
import { Backdrop } from './Backdrop';

export function ExpandableImage({ src, alt }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <Backdrop onClose={() => setIsOpen(false)}>
                    <img
                        src={src}
                        alt="study case report"
                        className="max-w-full max-h-full"
                    />
                </Backdrop>
            )}
            <div
                className="cursor-pointer shadow-xl shadow-slate-200 hover:shadow-slate-300 hover:scale-[1.02] transition-transform select-none"
                onClick={() => setIsOpen(true)}
            >
                <img src={src} alt={alt} className="w-full" />
            </div>
        </>
    );
}