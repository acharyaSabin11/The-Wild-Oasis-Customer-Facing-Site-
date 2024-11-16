'use client'
import { useState } from "react";

function TextExpander({ children }) {
    const [isLess, setIsLess] = useState(true);

    const displayText = isLess ? children.split(' ').slice(0, 30).join(' ') + ' ...' : children;

    return (
        <div className="flex flex-col w-full gap-4 mb-8">
            <p className="text-primary-500 text-lg text-justify ">{displayText}</p>
            <span onClick={() => { setIsLess(state => !state) }} className="text-primary-200 cursor-pointer underline hover:text-accent-500">{isLess ? 'Show More' : 'Show Less'}</span>
        </div>
    )
}

export default TextExpander
