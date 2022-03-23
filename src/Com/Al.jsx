import React , {useState}from 'react';
import "../App.css"
const Al = (props) => {
const [btn, setbtn] = useState(true)
const [title, settitle] = useState({
  hh:"black",
  hj:"black",
  mode:"Dark",
  btn_type:"btn btn-primary"
})
  const see = () => {
if (btn === true) {
  // alert("on");
  setbtn(false)
  settitle({hh:"white", hj:"white", mode:"Light",btn_type:"btn btn-info" })
  document.body.style.backgroundColor="black";

}
  else{
    // alert("off");
    setbtn(true)
  // settitle("black")
  settitle({  hh:"black",
  hj:"black",
  mode:"Dark",
  btn_type:"btn btn-primary"})

    document.body.style.backgroundColor="white";

  }
  }



  return (
<>
<h4 style={{color:title.hh}}>Enable Dark-Mode</h4>

<button className={title.btn_type} onClick={see}>Enable {title.mode}-Mode</button>
<br />
<h1 style={{color:title.hj}}>
  {props.title}
</h1>


</>
    )
}

export default Al
// <div id='dd'>
//   <div className="form-check form-switch ">
//   <input onClick={see} className="form-check-input"  value={true} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//   <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
// </div> </div>