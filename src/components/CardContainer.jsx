import { useEffect, useRef, useState } from "react"

export default function CardContainer({ titulo, children }) {

    const [leftSlide, setLeftSlide] = useState(0)
    const [contadorSlide, setContadorSlide] = useState(0)
    const containerRef = useRef(null)
    const maxVisibleCards = Math.floor(window.innerWidth / 192)
    const [contadorClicks, setContadorClicks] = useState(0)

    window.addEventListener('resize', () => {
        window.location.reload();
    });

    const slideRight = () => {
        const container = containerRef.current.children.length * 192
        const maxClickPossible = container/192 - maxVisibleCards
        setContadorClicks(prev => prev + 1)
        setContadorSlide(prev => prev - 192 * -1)
        if(contadorClicks <= maxClickPossible) {
            setLeftSlide(prev => prev - 192)
        }
    }

    const slideLeft = () => {
        const container = containerRef.current.children.length * 192
        const maxClickPossible = container/192 - maxVisibleCards
        setContadorClicks(prev => Math.min(Math.max(prev - 1, 0), maxClickPossible))
        if (contadorSlide > 0){
            if (contadorClicks >= 1){
                setContadorSlide(prev => prev - 192)
                setLeftSlide(prev => prev + 192)
            }
        }
    }
     

    return (
        <>
        <div className={`mt-[30px] my-[60px] relative  overflow-x-hidden`}>
            <div className="flex items-center gap-5">
                <h1 className="text-[20px] my-[10px] mx-2 text-nowrap font-bold">{titulo}</h1>
                <div className="w-[100%] h-1 rounded-[100px] bg-gradient-to-r from-black via-[#d90000] to-black"></div>
            </div>
            <div className="flex transition duration-[0.5s]" style={{ transform: `translateX(${leftSlide}px)` }} ref={containerRef} >
                {children}
            </div>
            <div className="w-[100%] h-1 my-[30px] rounded-[100px] bg-gradient-to-r from-black via-[#d90000] to-black"></div>

            <button onClick={slideLeft} className="absolute top-[50%]">ESQUERDO</button>
            <button onClick={slideRight} className="absolute top-[50%] right-0">DIREITO</button>
        </div>
        </>

    )
}