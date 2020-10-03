import React, {Component ,useState,useEffect} from 'react';



const App= () => {
	const[news,setNews]=useState([]);
	const[searchQuery,setSearchQuery]=useState([]);
	const[url,setUrl]=useState("https://hn.algolia.com/api/v1/search?query=corona");

	//fetch the news using fetch function which comes default with the browser
  	useEffect(()=>
    {
		const fetchNews = () => {
			fetch(url)
			.then(result => result.json())
			.then(data => setNews(data.hits))
			.catch(error => console.log(error));
		};

		fetchNews();
    }, [url]);

    const handleChange = (e) => {
      	setSearchQuery(e.target.value);
    };

	const handleSubmit= (e) => {
		e.preventDefault()
		setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
	}
	// console.log(news)
  	return (

       	<div style={{background: "grey"}}>
			<h2 style={{textAlignVertical: "center",textAlign: "center",color:'white'}} >NEWS FILTER</h2>
			<form onSubmit={handleSubmit}>
				<input style={{backgroundColor:'#4d4dff'}} type="text" value={searchQuery} onChange={handleChange} />
				<button style={{width:170,backgroundColor:'#4d4dff',marginTop:20}}>Search</button>
			</form>
			<h4 style={{textAlignVertical: "center",textAlign: "center",color:"white"}}> {news.map((n,i) => (<p key={i}>{n.title}</p>))} </h4>
       </div>
    );
};

  
     

   


export default App;
