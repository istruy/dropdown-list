import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DropdownList from '../dropdown-list/dropdown-list';
import { languages } from '../../data/language';

function App(): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DropdownList languages={languages} />} />
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
