import SubTitle from './SubTitle';

export function Avatar() {
    return (
        <div className="flex justify-center items-center relative cursor-pointer hover:scale-105 transition-all">
            <div className="h-64 2xl:h-96 w-64 2xl:w-96 rounded-full hidden lg:block overflow-hidden">
                {/* Image */}
                <img src="joao.jpg" alt="Joao" className="w-full h-full" />
                {/* Get To know Me */}
                <div className="absolute inset-0 z-10 -m-8 hover:animate-spin-slow select-none">
                    <div className="w-full h-full font-bold uppercase">
                        <svg viewBox="0 0 100 100">
                            <path
                                fill="#ff000000"
                                id="circle"
                                d="M0,50A37,37 0 1 0100,50A37,37 0 1 00,50M50,50"
                            />
                            <text>
                                <textPath href="#circle" font-size="7">
                                    Get To Know me
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
