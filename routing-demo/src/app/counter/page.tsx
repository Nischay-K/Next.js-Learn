// "use client";

// import { title } from "process";
// import { useState } from "react";
import { Counter } from "./counter";

export const metadata = {
    title : "Counter"
};

export default function CounterPage() {
    return <Counter/>;
}

// Here we encounter an error and the solution is keep your metadata in the server component and extract any client side functionality into a separate components