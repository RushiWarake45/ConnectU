import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { VideoPlayer } from './Components/VideoPlayer';
import { InfoBox } from './Components/InfoBox';
import { Footer } from './Components/Footer';
import { Form } from './Components/Form';
import { LoginForm } from './Components/LoginForm';
import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <VideoPlayer />
            <InfoBox />
            <Footer />
          </>
        } />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
