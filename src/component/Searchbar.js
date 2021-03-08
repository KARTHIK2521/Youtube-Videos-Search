import React from 'react'


 class Searchbar extends React.Component {
     state={video:''}; 
     
     onFormSubmit = (event) =>
     {
           event.preventDefault();  //it prevent the deafult refresh the page 
           this.props.onFormSubmit(this.state.video); // call back functiom
     };
     
        
    render() {
          
      return (
       
            <div className="search-bar ui segment" style={{margin:"12px 0px 12px 0px" ,width:"700px"}}>

           <form className="ui form" onSubmit={this.onFormSubmit}>

             <div className="field">
                 <label>Videos Search</label>
                 <input id="outlined-basic" placeholder="Search the videos" type="text" value={this.state.video} onChange={ e => this.setState({video:e.target.value})} />

             </div>
           </form>
          </div>
    
        )
    }
}

export default Searchbar;