"use client";

import { title } from "process";
import { useState } from "react";


// Remove the metadata object 
// export const metadata = {
    // title : "Counter"
// };


// Rename the components to counter as a named export 
export const  Counter = () =>  {
    const [count , setCount] = useState(0)
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick = {() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

// Here we encounter an error and the solution is keep your metadata in the server component and extract any client side functionality into a separate components