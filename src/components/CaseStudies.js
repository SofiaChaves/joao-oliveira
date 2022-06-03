import SubTitle from './SubTitle';
import { OutlineTitle } from './OutlineTitle';
import projects from '../projects.json';
import { Link } from 'react-router-dom';

export function CaseStudies() {
    return (
        <div>
            <SubTitle>Case Studies</SubTitle>
            <div className="flex flex-col flex-wrap lg:flex-row lg:gap-x-10 2xl:gap-x-16 gap-y-6 mt-5">
                {projects.map((project) => (
                    <Link to={project.id}>
                        <OutlineTitle>{project.name}</OutlineTitle>
                    </Link>
                ))}
            </div>
        </div>
    );
}
