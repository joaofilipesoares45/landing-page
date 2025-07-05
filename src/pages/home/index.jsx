import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser} from "@fortawesome/free-solid-svg-icons"

export default function Home() {
    return (
        <div className="page home bg-linear-to-r from-sky-100 to-blue-200 bg-[url(/banner.jpg)] bg-cover overflow-hidden">
            <header className="sticky p-[10px] top-0 backdrop-blur-xs">
                <div className="flex justify-between items-center p-[10px_15px] rounded-md font-semibold bg-linear-[90deg,#1447e6,#74d4ff] shadow-xl">
                    <h1 className="text-[1.1rem] font-[Cascadia_Mono]! text-[rgb(255,255,255)] text-shadow-md">J.Filipe@dev</h1>
                    <FontAwesomeIcon icon={faUser} className="text-lg text-blue-950"/>
                </div>
            </header>

            <div className="hero min-h-[calc(100%_-_76.4px)] mx-2.5 mb-2.5  flex flex-col rounded-md overflow-hidden">
                <div className="flex flex-col justify-center items-center relative gap-1.5 p-2.5 w-full h-[100%] flex-1 backdrop-blur-xs bg-[rgba(0,0,0,0.63)] text-shadow-2xl text-blue-50">
                    <img src="/landing-page/logo.jpg" className="w-full max-w-[250px] rounded-full mb-2.5 mt-[-40px]"/>
                    <h1 className="font-bold sm:text-4xl text-3xl text-center">Transforme ideias em <br /> <span className="text-blue-500">interfaces incríveis</span></h1>
                    <p className="font-semibold text-blue-100 mx-[10px] text-center mt-2.5">Construindo experiências web que impressionam.</p>
                    <span className="absolute z-1 bottom-2.5 right-2.5 left-2.5 w-[calc(100%_-_20px)] bg-[rgb(255,255,255)] text-[rgb(25,39,108)] text-sm font-semibold rounded-sm text-center p-2.5">Acelere seu projeto web: soluções frontend sob medida para o seu sucesso.</span>
                </div>
            </div>
        </div>
    )
}