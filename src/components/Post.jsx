import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

const Post = () => {
  // const params = useParams();
  const status = 200

  if (status === 404) {
    return <Navigate to='/notfound' />
  }

  const navigate = useNavigate()
  const onClick = () => {
    console.log('hello')
    navigate('/about')
  }


  return (
    <div>
      {/* <h1>Post {params.id}</h1>
      <p>Name: {params.name}</p> */}
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  );
};
export default Post;
