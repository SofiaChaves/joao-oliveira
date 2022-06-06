import { useEffect, useRef } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { Margins } from '../components/Margins';
import { OutlineTitle } from '../components/OutlineTitle';
import SubTitle from '../components/SubTitle';
import projects from '../projects.json';
import { Gallery } from '../components/Gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
    const { pathname } = useLocation();
    const ref = useRef();

    const project = projects.find((proj) => proj.id === projectId);

    const nextProject = projects[projects.indexOf(project) + 1] || projects[0];

    useEffect(() => {
        ref.current.scroll({
            top: 0,
        });
    }, [pathname]);

    if (!project) {
        return <Navigate to="/" replace={true} />;
    }

    return (
        <div className="lg:h-screen lg:flex h-full">
            {/* Overview */}
            <div className="lg:max-w-xl xl:max-w-3xl w-full h-full flex">
                <Margins>
                    <div className="md:h-full flex flex-col justify-between gap-16">
                        <Link to="/">
                            <h1 className="text-3xl xl:text-5xl font-bold uppercase mb-4">
                                Joao Oliveira
                            </h1>
                            <SubTitle>Back to Homepage</SubTitle>
                        </Link>
                        <div className="flex flex-col gap-6">
                            <OutlineTitle>{project.name}</OutlineTitle>
                            <SubTitle>
                                <a
                                    href={project.site}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline decoration-2 underline-offset-8"
                                >
                                    Visit Site{' '}
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </SubTitle>
                            <p>{project.description}</p>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/joao-aguiam/"
                            className="text-center underline decoration-2 underline-offset-8 decoration-wavy hover:scale-105 transition-all"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SubTitle>Let's Work Together!</SubTitle>
                        </a>
                    </div>
                </Margins>
            </div>

            {/* Details */}

            <div className="grow bg-slate-100 h-full overflow-y-auto" ref={ref}>
                <div>
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
                            <Link
                                to={`/${nextProject.id}`}
                                className="hover:scale-[1.03] transition-all"
                            >
                                <SubTitle>Go to Next Project</SubTitle>
                                <OutlineTitle color="text-slate-100">
                                    {nextProject.name}
                                </OutlineTitle>
                            </Link>
                        </div>
                    </Margins>
                </div>
            </div>
        </div>
    );
}
