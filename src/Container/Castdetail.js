import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Uppernavbar from '../Component/Uppernavbar';
import Castcontent from '../Component/Castcontent';
require("dotenv").config();

const Castdetail = ()=>{
    const[name,setname] = useState("");
    const[bday,setbday] = useState("");
    const[bio,setbio] = useState("");
    const[website,setwebsite] = useState("");
    const[imdb,setimdb] = useState("");
    const[profile_path,setprofile_path] = useState("");
    const[movielist,setmovie] = useState([]);
    const[stateid,setstateid] = useState(0);

    const id = parseInt(useParams().CastID);
    
    useEffect(()=>{
        try{
            setTimeout(()=>{
            axios.get(process.env.REACT_APP_CAST_DETAIL_FIRSTPART
                        + id
                        +process.env.REACT_APP_CAST_DETAIL_SECONDPART
                        +process.env.REACT_APP_API_KEY
                        +process.env.REACT_APP_CAST_DETAIL_THIRDPART)
            .then((datas)=>{
                setname(datas.data.name);
                setbday(datas.data.birthday);
                setbio(datas.data.biography);
                setwebsite(datas.data.homepage);
                setimdb(datas.data.imdb_id);
                setprofile_path(datas.data.profile_path);
                setstateid(datas.data.id);
            })

            axios.get(process.env.REACT_APP_CASTMOVIE_FIRSTPART
                +id
                +process.env.REACT_APP_CASTMOVIE_SECONDPART
                +process.env.REACT_APP_API_KEY
                +process.env.REACT_APP_CASTMOVIE_THIRDPART)
            .then((datas)=>{
                setmovie(datas.data.cast);
            })

            },1000);
        }catch(error){
            if(axios.isCancel(error)){
                console.log("Cancelled");
            }else{
                throw error;
            }
        }
    
    },[id]);

    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const style={marginTop: "45vh",marginLeft: "45vw"}
    return(
        <div >
        <Uppernavbar/>       
        {id !== stateid ? <Loader type="ThreeDots" color="#4C4C4E" height="100" width="100" style={style}/>
                : (<Castcontent name={name} bday={bday} bio={bio} website={website} imdb={imdb} 
                    profile_path={profile_path} movielist={movielist}/>)
        }

       
        
    </div>
    );
}

export default Castdetail;