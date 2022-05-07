import { CloseButton } from "./closeButton";

import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'
import { useState } from "react";


const feedbacktypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt:'Imagem de um inseto'
        },
    },
    IDEIA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
        alt:'Imagem de uma lampada'
        },
    },

    OTHERS: {
        title: 'Outros',
        image:{
            source: thoughtImageUrl,
            alt:'Imagem de uma Nuvem'
        },
    },
}

type FeedbackType = keyof typeof feedbacktypes;

export function WidgetForm() {
const [feedbackType, setFeedbackType] = useState<FeedbackType | null >(null)

    return(
        <div className=" bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            <header>
                <span className="text-xl leading-6 ">Deixe seu feedback</span>

                <CloseButton/>
            </header>


            <div className="flex py-8 gap-2 w-full ">
                {Object.entries(feedbacktypes).map(([key, value]) => {
                    return (
                        <button 
                        key={key}
                        className=" bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent border-x-brand-500 focus: border-b-brand-500 focus:outline-none"
                        onClick={() => setFeedbackType( key as FeedbackType)}
                        type="button"
                        >
                            <img src={value.image.source} alt = {value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}


            </div>


            <footer className="text-xs text-neutral-400"> 
                <p>feito por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/vinicius-salgueiro-1722b21b1/"> Vinicius salgueiro </a> </p>
            </footer>    
        </div>
    )
}