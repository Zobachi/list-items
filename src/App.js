import { useState, useEffect } from 'react';
import './App.css';
import ListComponent from './component/listcomponent';

function App() {
  const [data, setData]= useState([])
  const [loading, setLoading]= useState(true)
  const [error, setError]=useState(null)
  //const[emptyList, setEmptyList]=useState(true)

  const fetchData = async()=>{
    setLoading(true);
    setError(null);
    //setEmptyList(false);

    try{
      const response = await
      fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setData(jsonData.slice(0, 20)); // Optional: only take first 20 posts

    } catch (error) {
      console.error('Fetch error:', error);
      setError('Failed to load data');

    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);


  if (loading) {
    return <div className='alreadyloading'>Loading...</div>;
  }


  if (error) {
    return <div className='checkerror'>{error}</div>;
  }


  return (
    <div className='titleOfPage'>
      <h1>The List of Titles</h1>
      <div className="App">
        {data.map((item,i) =>  (
        <ListComponent key={i} title={item.title}/> 
         )) }
      </div>
    </div>
  );
}

export default App;

