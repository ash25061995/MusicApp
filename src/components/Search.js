import  React,{useState} from 'react';
import {searchArtist} from '../utils/Api';
import '../App.css';

const Search = () => {
    let [artistName, setArtistName]=useState('');
    let [data,setData]=useState({});
    let [isDetailPage, setIsDetailPage] = useState(false);
    let [count,setCount]=useState(0);
    
    
    function getArtistName(event){
      setArtistName(event.target.value);
    }

    function handleSearclick(e){
        e.preventDefault()
        searchArtist(artistName)
        .then(data => {
            setData(data)
            setCount(data.hits.length)
            setIsDetailPage(true)
        })
    }

    return( (
        <div>
            
            {isDetailPage&& data.hits && data.hits.length>0 ? (
                <>
                <button className="btn" id="back" onClick={()=>{
                    setIsDetailPage(false)
                    setArtistName('')
                }}>Home</button>
                <h1>Top {count} songs related to {artistName}</h1>
                {data.hits.map(list=>{
                     return <li id="list" key={list.result.id}>{list.result.full_title}</li>;
                })}
                
                 </>
            ) :  data.hits && data.hits.length===0?(
                <div id="Invalid">
                     <button className="btn" id="back" onClick={()=>{
                        setIsDetailPage(false)
                        setArtistName('')
                        setData({});
                    }}>Home</button>
                 <h1>No songs found related to name {artistName}</h1>
                 <h2>Please check spelling and try again</h2>
                </div>
            ) :(
            <>
                <div className="container" id="show-data">
                    <div className="row">
                    <h2>Search for your popular artist</h2>
                        <div className="span12">
                            <form id="custom-search-form" className="form-search form-horizontal pull-right">
                                <div className="input-append span12">
                                    <input type="text" className="search-query mac-style" onChange={getArtistName} value={artistName} name="artistName" placeholder="Search"/>
                                    <button className="btn" onClick={handleSearclick}><i className="icon-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
            )}
        </div>
    ))
};


export default Search;