import { CaseStudies } from '../components/CaseStudies';
import { Avatar } from '../components/Avatar';
import { Margins } from '../components/Margins';

function Welcome() {
    return (
        <div className="flex flex-col sm:gap-3 xl:gap-12">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold uppercase">
                Joao Oliveira
            </h1>
            <h2 className="text-xl sm:text-3xl xl:text-5xl font-bold uppercase">
                Nice to meet you!
            </h2>
        </div>
    );
}

export function MainPage() {
    return (
        <Margins>
            <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between w-full">
                    <Welcome />
                    <Avatar />
                </div>

                <CaseStudies />
            </div>
        </Margins>
    );
}
