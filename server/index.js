const express=require("express");
const cors=require("cors");

const app=express();
const PORT=3005;
app.listen(PORT, ()=>console.log(`server started in ${PORT}`));

app.use(cors());
app.use(express.json());
const movieList=require("./movies.json");
const moviesNewArray=[];

console.log("value ",movieList.results.length);


app.get("/api/movies", (req, res)=>{
    const{movieitem}=req.query;
    
    
    let filterArr=movieList.results.filter((movie)=>{
        
        return movie.title.toLowerCase().includes(movieitem.toLowerCase());
    })

    res.json({results:filterArr});
})

app.post("/api/movies", (req, res)=>{
    const{movieitem}=req.body;
    // console.log(movieitem);
    movieList.results.unshift({
        id:Date.now(),
       title: movieitem, backdrop_path:""});
       res.json({results: movieList.results})
})


app.delete("/api/movies", (req, res)=>{
    const{movieitem}=req.body;
    
    let movieArr=movieList.results.filter((movie)=>{
        
        return (movie.title.toLowerCase())!==(movieitem.toLowerCase());
    });

    

    
    res.json({results:movieArr})
})

