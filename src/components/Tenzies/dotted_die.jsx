import React from "react"

export default function DottedDie() {
    const cells = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    return (
        <div className="dotted-die">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    )
}