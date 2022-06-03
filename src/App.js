import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { ProjectPage } from './pages/ProjectPage';

function App() {
    return (
        <div className="w-screen h-screen debug-screens">
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path=":projectId" element={<ProjectPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
