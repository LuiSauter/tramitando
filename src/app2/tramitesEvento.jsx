export function EstadoTramite({estado,namePedido}){
    return(
        <div className="flex justify-around w-64 h-9 border-[#fdfffe] border rounded-lg items-center cursor-pointer  hover:bg-blue-950">
            <p className="text-[#fdfffe] truncate px-2 hover:text-clip]">{namePedido}</p>
            <i className="text-[#fdfffe] border-l px-2">{estado}</i>
        </div>
    ) 
}