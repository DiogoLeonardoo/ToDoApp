import { useEffect } from "react"

export const Square = () => {
    useEffect(() => {
        window.addEventListener('Scroll', () => { } );

        return () => {
            window.removeEventListener('scroll', () => { } );
        }
    });
    
    return (       
        <div className="w-40 h-40 bg-red-400 text-white">
        </div>
    );
}