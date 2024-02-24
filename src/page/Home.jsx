import useFetch from "../logic/useFetch";
import Sidebar from "../component/Sidebar";
import Blog from "../component/Blog";
import { useState } from "react";

const Home = () => {
    const { data:blogs, isPending, error} = useFetch('http://127.0.0.1:8000/api/posts');

    return ( 
        <div className="flex flex-row min-h-screen relative">
            { blogs && <Blog  blogs={blogs}/>}
            { blogs && <Sidebar />}
            { isPending && <div className="mx-auto mt-20">
                <h2 className="text-red">Loading, please wait.</h2>
            </div>}
            { error && <div className="mx-auto mt-20">
                <h2 className="text-red">{ error }</h2>
            </div>}
        </div>
     );
}
 
export default Home;