import axios from "axios";

//이미지포함 불러오는 baseurl
export const _baseURL = "https://image.tmdb.org/t/p/original/";
    //const _baseURL = "localhost:8080";


// 영화 db요청 만들기 위한 base url
const instance = axios.create({
    baseURL: "http://localhost:8080/",
});

// instance.get('')


export default instance;