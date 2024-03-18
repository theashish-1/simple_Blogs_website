import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"

export const AppContex = createContext();


export default function AppContexProvider({children}){
    // the above childer refers to which child is present under AppContexProvider in index.js here the children of AppContexProvider is app
    const [loading,setLoading] = useState(false)
    const [posts,setPosts] = useState("")
    const [page,setPage] = useState(1)
    const[totalPages,setTotalPages] = useState(null) 

    
    //data filling below  18-03-2024
    async function fetchBlogPost(page = 1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        	// console.log("Printing the final url")
            // console.log(url)
        try {
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);
            setPosts(data.posts);
            setPage(data.page);
            setTotalPages(data.totalPages);
            
        } catch (error) {
            console.log("Error in fetching data");
            setPosts([]);
            setPage(1)
            setTotalPages(null)
        }
        setLoading(false)
       

    }

    function handelPageChange(page){
        setPage(page);
        fetchBlogPost(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handelPageChange
    }

    return <AppContex.Provider value = {value}>
        {children}
    </AppContex.Provider>
}