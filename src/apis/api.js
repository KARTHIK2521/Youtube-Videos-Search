import axios from 'axios';

const KEY="AIzaSyAvvOWkzd6bzXwIs_petow1iHk82sPRu7w";



export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResult:5,
        key:KEY
    }
});