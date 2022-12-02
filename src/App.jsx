import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackFrom from './components/FeedbackForm';
import AboutPage from './pages/About';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log('in addFeedback', newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((fb) => fb.id !== id));
  };

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackFrom handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </>
          } />
         
          <Route path='/about' element={<AboutPage />} />
          <Route path='/post/*' element={<Post />} />
          {/* <Route path='/post/:id/:name' element={<Post />} /> */}
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
};

export default App;
