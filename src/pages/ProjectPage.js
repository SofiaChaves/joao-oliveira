import { Link, Navigate, useParams } from 'react-router-dom';
import { Margins } from '../components/Margins';
import { OutlineTitle } from '../components/OutlineTitle';
import SubTitle from '../components/SubTitle';
import projects from '../projects.json';

function Gallery({ images }) {
    return (
        <div className={`grid gap-6 ${cols[images.length]}`}>
            {images.map((src, i) => (
                <img key={i} src={src} alt="study case report" />
            ))}
        </div>
    );
}

function Section({ title, description, images }) {
    return (
        <div className="flex flex-col gap-6 mb-16">
            <SubTitle>{title}</SubTitle>
            {description}
            <Gallery images={images}></Gallery>
        </div>
    );
}

export function ProjectPage() {
    const { projectId } = useParams();

    const project = projects.find((proj) => proj.id === projectId);

    const nextProject = projects[projects.indexOf(project) + 1] || projects[0];

    if (!project) {
        return <Navigate to="/" replace={true} />;
    }

    return (
        <div className="md:flex h-full">
            <div className="md:max-w-xl">
                <Margins>
                    <div className="md:h-full flex flex-col justify-between gap-16">
                        <h1 className="text-3xl xl:text-5xl font-bold uppercase">
                            Joao Oliveira
                        </h1>
                        <div className="flex flex-col gap-6">
                            <OutlineTitle>{project.name}</OutlineTitle>
                            <SubTitle>Visit Site</SubTitle>
                            <p>{project.description}</p>
                        </div>
                        <button>Let's Work Together</button>
                    </div>
                </Margins>
            </div>

            <div className="grow bg-slate-100">
                <Margins>
                    {project.caseStudy.map((section, i) => (
                        <Section
                            key={i}
                            title={section.title}
                            description={section.description}
                            images={section.images}
                        />
                    ))}
                    <div className="flex flex-col items-end text-right">
                        <Link to={`/${nextProject.id}`}>
                            <SubTitle>Next Project</SubTitle>
                            <OutlineTitle>{nextProject.name}</OutlineTitle>
                        </Link>
                    </div>
                </Margins>
            </div>
        </div>
    );
}

const cols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
};
