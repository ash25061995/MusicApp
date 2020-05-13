import  React,{useState} from 'react';
import '../App.css';
import {connect} from 'react-redux'
import * as action from '../store/action'

const Search = (props) => {
    let [artistName, setArtistName]=useState('');
    
    function getArtistName(event){
      setArtistName(event.target.value);
    }
const onEvent=(e,artistName)=>{
    if (e.keyCode === 13) { 
        props.onFetchData(artistName)
    }else{
        console.log(artistName)
        return false
    }
}


    return( (
        <div>
            
            {props.isDetailPage&& props.data.hits && props.count>0 ? (
                <>
                <button className="btn" id="back" onClick={()=>{
                    props.onBack()
                }}>Home</button>
                <h1>Top {props.count} songs related to {artistName}</h1>
                {props.data.hits.map(list=>{
                     return <li id="list" key={list.result.id}>{list.result.full_title}</li>;
                })}
                
                 </>
            ) :  props.data.hits && props.count===0?(
                <div id="Invalid">
                     <button className="btn" id="back" onClick={()=>{
                         props.onBack()
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
                            <div id="custom-search-form" className="form-search form-horizontal pull-right">
                                <div className="input-append span12">
                                    <input type="text" className="search-query mac-style"  onKeyDown={ (event)=>onEvent(event,artistName)} onChange={getArtistName} value={artistName} name="artistName" placeholder="Search"/>
                                    <button className="btn" type="button" onClick={()=>{
                                        props.onFetchData(artistName)
                                    }}><i className="icon-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )}
        </div>
    ))
};

const mapPropsToState=state=>{
    return{
        data:state.data,
        count:state.count,
        error:state.error,
        isDetailPage:state.isDetailPage
    }
}

const mapDispatchToState=dispatch=>{
    return{
        onFetchData:(artistName)=>dispatch(action.fetchData(artistName)),
        onBack:()=>dispatch(action.goBack())
    }
}



export default connect(mapPropsToState,mapDispatchToState)(Search);