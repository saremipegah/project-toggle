import React , {useState} from 'react'

function WithToggle(OriginalComponents) {
 const NewComponent= ()=> {
 const[ isShow , setIsShow] = useState(false)

 const ToggleHandler= ()=>{
  setIsShow(prevIsShow => !prevIsShow);
 };

 return <OriginalComponents isShow={isShow}  ToggleHandler={ ToggleHandler}/>
 };

return NewComponent;

 
}

export default WithToggle