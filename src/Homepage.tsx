import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
    return(
        <div className="h-screen w-screen bg-black text-white font-cinzel flex flex-col justify-center items-center">
            <h1 className="text-9xl cursor-default select-none">
                Gwunt
            </h1>
            <button onClick={() => navigate("/game")} className="text-4xl border-2 border-white cursor-pointer w-sm">
                Play
            </button>
        </div>
    )
}