import React from 'react';
import Modal from 'react-modal';

class dropzone extends React.Component{
    constructor(props){
        super(props);
        this.state={
            modalIsOpen: false
        }
    }
    closeModal(){
        this.setState({
            modalIsOpen: false
        })
    }
    render()
    {
        return (
            <div className="dropZoneContainer">
         <div className="dropZone" onClick={()=>{
             this.setState({modalIsOpen: true})
         }}>
             <label>{this.props.label}</label>
             {this.props.posts.map((item,key)=> {
                 return(
                     <div className={item.class}>
                         {item.text}
                     </div>
                 )           
             })}
             
         </div>
         <Modal
               isOpen={this.state.modalIsOpen}
             >
               <div><h2>Add {this.props.modalType}</h2></div>
               <form>
                 <label>Text</label> <br/>
                 <input id="box-text" type="text" /> <br />
                 <label>Type</label> <br/>
                 <select id="box-type">
                     <option value="red-box">red</option>
                     <option value="blue-box">blue</option>
                 </select><br />
                 <button onClick={()=>{this.closeModal()}}>cancel</button>
                 <button onClick={(event)=>{
                    console.log(event.target.getElementById('box-text').value)
                    console.log(event.target.getElementById('box-type').value)
                 }}>save</button>
               </form>
             </Modal>
            </div>
         ) 
    }
}
export default dropzone;