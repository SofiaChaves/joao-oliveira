import SubTitle from './SubTitle';
import { OutlineTitle } from './OutlineTitle';

export function CaseStudies() {
    return (
        <div>
            <SubTitle>Case Studies</SubTitle>
            <div className="flex flex-col flex-wrap lg:flex-row lg:gap-x-10 2xl:gap-x-16 gap-y-6 mt-5">
                <OutlineTitle>GAKI</OutlineTitle>
                <OutlineTitle>Lady Blue</OutlineTitle>
                <OutlineTitle>AutoPicapau</OutlineTitle>
            </div>
        </div>
    );
}
