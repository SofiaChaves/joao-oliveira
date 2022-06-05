import { Margins } from '../components/Margins';

export function Backdrop({ onClose, children }) {
    return (
        <div
            className="fixed inset-0 bg-slate-700/50 cursor-pointer backdrop-blur z-10"
            onClick={onClose}
        >
            <div className="overflow-y-auto overscroll-contain h-full">
                <div>
                    <Margins>{children}</Margins>
                </div>
            </div>
        </div>
    );
}
