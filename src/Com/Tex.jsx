import React , {useState} from 'react'

const Tex = () => {
  const [val, setval] = useState("")
  const [newval, setnewval] = useState("")
  const [des, setdes] = useState({
    char:"0",
    words:"0",
    time:"0"
  })
  const get = (e) => {
setval(e.target.value);
setnewval(e.target.value);
let len = e.target.value.length;
// console.log(len);
let clen = val.split(" ").length;
let ntime = des.words * 0.2;

setdes({words:clen,char:len,time:ntime})
console.log(ntime);
}

const getv = () =>{
console.log(val);

 
}
const upp = () =>{
console.log(newval.toUpperCase());
let as = newval.toUpperCase();
    setval(as);
    }

    const lower = () =>{
let as = newval.toLowerCase();
      console.log(newval.toLowerCase());
         setval(as);
          }
    return (
    
    <>
    <textarea name="dis" style={{textAlign:"left",fontSize:"20px"}} value={val} onChange={get} id="dis" cols="80" rows="10"></textarea><br /><br />
    <button id='getvalue' onClick={getv}   className="btn btn-primary mx-2">GET-VALUE</button>
    <button id='upper'    onClick={upp}    className="btn btn-primary mx-2">UPPER-CASE</button>
    <button id='lower'    onClick={lower}  className="btn btn-primary mx-2">LOWER-CASE</button>
    <button id='lower'    onClick={lower}  className="btn btn-primary mx-2">COPY-TEXT</button>
    <button id='lower'    onClick={lower}  className="btn btn-primary mx-2">REMOVE-SPACE</button>
    <button id='lower'    onClick={lower}  className="btn btn-primary mx-2">PREVIEW</button>


    

<br /><br />
<span className="word mx-2">{des.words} words</span> 
<span className="Char mx-2">{des.char} characters</span>
<span className="Char mx-2"> Reading Time : {des.time}Sec</span>


    </>
  )
}

export default Tex