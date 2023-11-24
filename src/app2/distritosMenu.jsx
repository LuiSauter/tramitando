export function MenuDis({text}){
    return(
        <a className="snap-center w-44 h-12  lg:w-full lg:h-auto hover:bg-slate-600 hover:font-semibold hover:text-6xl transition-all hover:rounded-lg focus:bg-slate-800 focus:text-6xl focus:rounded-lg" href="#">
            <div className="text-[#fdfffe]  text-xl w-full  h-full lg:h-6 flex justify-center " >
                {text}  
            </div>
        </a>
    ) 
}