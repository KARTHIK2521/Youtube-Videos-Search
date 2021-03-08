import React from 'react'
import Searchbar from './Searchbar'
import api from '../apis/api'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';

 class App extends React.Component {
   
   state={videos:[] , selectedVideo:null};
   
   componentDidMount(){
     this.onTermSubmit('kongu engineering college');  // default search term when Application when load 
   }


  onTermSubmit = async (video) =>
  {
       
    // console.log(video);
     const response= await  api.get('/search',{
          params:{
            q:video
          }

        });
        
        this.setState({videos:response.data.items,
        selectedVideo:response.data.items[0] // set deafult video from loading list when Loading the application for 0th video in an array
        })
  }
   
   onVideoSelect = (video) =>{
    // This is call back function from the videoItem component fetching the user click the videos 
    // from the videoList component. then upadating the selectedvideo state in APP.js then show that video
    // in the UI.(child to parent Componet communication)
    //flow is ===> App -> VideoList -> VideoItem -> then callback is call (with selected the video)
    // -> then videoList -> then APPjs then  update state using setState()-> then VideoDetail

   // console.log("The video",video);
      
   this.setState({selectedVideo:video})
  }



  render() {
    return (
      <div className="ui container" >
     
           <Searchbar onFormSubmit={this.onTermSubmit}/>
          
          <div className="ui grid">
            <div className="ui row">
              <div className="ten wide column">
             <VideoDetail video={this.state.selectedVideo} />
             </div>
             
             <div className="five wide column">
             <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
             </div>
      
            </div> 
           </div>
        
      </div>
      
    );
  }
}
export default App;
