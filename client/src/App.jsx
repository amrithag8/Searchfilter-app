import "./App.css";
import { useState, useEffect } from "react";
import { Search } from "./Components/Search";
import axios from "axios";

export default function App() {
  const [movie, setMovie] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const fetchMovieDetails = async () => {
    const response = await axios("http://localhost:3005/api/movies", {
      params:{
        movieitem:searchItem
      }
    });

    
    setMovie(response.data.results);
  };

  const deleteHandler=async()=>{
    const response = await axios("http://localhost:3005/api/movies", {
      method:"DELETE", 
      data:{
        movieitem:searchItem
      }
    
        
      
    }); 
    setMovie(response.data.results);
  }

  const submitHandler= async()=>{
    const response = await axios("http://localhost:3005/api/movies", {
      method:"POST", 
      data:{
        movieitem:searchItem
      }
    
        
      
    });

    console.log(response.data.results);
    setMovie(response.data.results);
  
  }

  useEffect(() => {
    let timeOut = setTimeout(() => {
      if (searchItem) {
        fetchMovieDetails();
      }
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [searchItem]);

  return (
    <div className="App">
      <Search
        movie={movie}
        setMovie={setMovie}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        submitHandler={submitHandler}
        deleteHandler={deleteHandler}
      />
      
    </div>
  );
}
