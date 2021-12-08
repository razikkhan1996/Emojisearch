import React,{useEffect, useState} from 'react'
import EmojiData from '../emoji.json';


const EmojiSearch = () => {

    const [search,setSearch] = useState("");
    const [data,setData] = useState([]);

    useEffect(()=>{
        const newData = EmojiData.filter((emoji) => emoji.title.toLowerCase().includes(search.toLowerCase()));
        setData(newData);
    },[search])

    return (
        <>
            <center>
            <h1> Emoji Search</h1>
            <input size="30" type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </center>
            <div className="wrap">
            {data.map(emoji =>
                <div className="card">
            
                        <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy")}}>
                            {emoji.symbol} {emoji.title}
                        </div>
                    </div>
            )}
        </div>
        </>
    )
}

export default EmojiSearch;
