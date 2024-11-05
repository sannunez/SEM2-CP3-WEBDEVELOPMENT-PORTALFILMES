export default function Login({ isLogged, handleLogin }) {


    return (
        <div className="flex gap-4 items-center">
            {isLogged}
            <button
                onClick={handleLogin}
                className={`${isLogged ? "bg-transparent border-[1px]" : "bg-[#D20000]"} px-4 py-1 rounded-[3px]`}>
                {isLogged ? "Logout" : "Login"}
            </button>
        </div>
    )
}