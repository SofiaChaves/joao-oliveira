import { CaseStudies } from './components/CaseStudies';

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

function App() {
    return (
        <div className="p-10 p-12 xl:py-16 xl:px-20 flex flex-col justify-between w-screen h-screen debug-screens">
            <div className="flex justify-between w-full">
                <Welcome />

                <div className="bg-slate-200 h-64 w-64 rounded-full hidden lg:block"></div>
            </div>

            <CaseStudies />
        </div>
    );
}

export default App;
