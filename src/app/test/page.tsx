import React from "react"
import Script from 'next/script'
import gsap from "gsap"

interface Prop {

}

const App: React.FC<Prop> = ({ }) => {
    return <>
        <div className="flex flex-row h-screen w-screen justify-center items-center">
            <div className="bg-red-500 m-auto transform [transform:rotateY(20deg)_rotateZ(20deg)_rotateX(50deg)]">TEST</div>
        </div>
    </>;
}

export default App;