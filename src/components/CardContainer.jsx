export default function CardContainer({ titulo, children }) {
    return (
        <div>
            <h1 className="text-[20px]">{titulo}</h1>
            <div className="flex">
                {children}
            </div>
        </div>
    )
}