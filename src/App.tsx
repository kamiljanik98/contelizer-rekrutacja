import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout';
import PeselValidatorPage from './modules/pesel-validator/pages/PeselValidatorPage';
import FileProcessorPage from './modules/text-file-processor/pages/TextFileProcessorPage';
import UsersPage from './modules/user/pages/UsersPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<FileProcessorPage />} />
          <Route path="/pesel-validator" element={<PeselValidatorPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
