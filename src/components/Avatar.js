import SubTitle from './SubTitle';

export function Avatar() {
    return (
        <div className="flex justify-center items-center relative">
            <div className="h-64 2xl:h-96 w-64 2xl:w-96 rounded-full hidden lg:block overflow-hidden">
                <img src="joao.jpg" alt="Joao" className="w-full h-full" />
                <div className="absolute inset-0 z-10 -m-20">
                    <div className="w-full h-full font-bold uppercase">
                        <svg viewBox="0 0 100 100">
                            <defs>
                                <path
                                    id="circle"
                                    d="
                                M 50, 50
                                m -37, 0
                                a 37,37 0 1,1 74,0
                                a 37,37 0 1,1 -74,0"
                                />
                            </defs>
                            <text>
                                <textPath href="#circle" font-size="8">
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
