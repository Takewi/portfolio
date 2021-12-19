import AudioSpectrum from "react-audio-spectrum2"
import "./Layout.css"
import { useEffect, useState } from "react"

export const Layout = () => {
    const [audio] = useState(new Audio("./sound.mp3"))
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        playing ? audio.play() : audio.pause()
    },
        [playing, audio]
    )

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false))
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false))
        };
    }, [audio])

    const handleUpVolume = () => {
        if(audio.volume < 1) {
            audio.volume = Number((audio.volume + 0.1).toFixed(1))
        }
    }
    const handleDownVolume = () => {
        if(audio.volume > 0.1) {
            audio.volume = Number((audio.volume - 0.1).toFixed(1))
        }
    }
    return (
        <>
            <div className="d-flex align-items-center vh-100" style={{fontFamily: "Roboto Mono"}}>
                <div className="flex-shrink-0 p-3 text-white" style={{width: "250px", }}>
                    <div className="text-center text-white text-decoration-none">
                        <p id="gawi" className="h1"><b>Gawi_</b></p>
                    </div>
                    <hr />
                    <div>
                        <div className="text-center">
                            <p className="h4 NeoZoom"><b>Social</b></p>
                        </div>
                        <div className="container">
                            <a href="https://twitter.com/gawi2k21" target={"_blank"} rel="noreferrer"><p className="fa fa-twitter" /></a>
                            <a href="https://www.linkedin.com/in/gustavo-viegas-8989a01b4/" target={"_blank"} rel="noreferrer"><p className="fa fa-linkedin" /></a>
                            <a href="https://www.instagram.com/gawii_2i/?hl=pt-br" target={"_blank"} rel="noreferrer"><p className="fa fa-instagram" /></a>
                            <a href="https://www.facebook.com/gustavoviegas231914" target={"_blank"} rel="noreferrer"><p className="fa fa-facebook" /></a>
                            <a href="https://github.com/Takewi" target={"_blank"} rel="noreferrer"><p className="fa fa-github" /></a>
                            <a href="https://www.youtube.com/channel/UCQzQ3vyOhPwzxYh4vRpyiWA" target={"_blank"} rel="noreferrer"><p className="fa fa-youtube" /></a>
                        </div>
                        <hr />
                        <div className="container">
                            <div className="text-center">
                                <p className="h5 NeoZoom"><b>To talk with me</b></p>
                                <p className="h6 zoom" style={{fontSize: "15px"}}><b>E-mail:</b></p>
                                <p>gawi2k21@gmail.com</p>
                                <p className="h6 zoom" style={{fontSize: "15px"}}><b>Whatsapp:</b></p>
                                <p>+55 53 981125790 </p>
                                <p className="h6 zoom" style={{fontSize: "15px"}}><b>Discord:</b></p>
                                <p>Gawi_#0019</p>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            <div className="text-center">
                                <p className="h6 NeoZoom"><b>Lofi beat to relax:</b></p>
                            </div>
                            <div style={{ border: "double" }} className="text-center d-flex justify-content-center">
                                <AudioSpectrum
                                    id="audio-canvas"
                                    height={170}
                                    width={182}
                                    audioEle={audio}
                                    capColor={'red'}
                                    capHeight={2}
                                    meterWidth={2}
                                    meterCount={512}
                                    meterColor={[
                                        { stop: 0, color: '#f00' },
                                        { stop: 0.5, color: '#0CD7FD' },
                                        { stop: 1, color: 'red' }
                                    ]}
                                    gap={3}
                                />
                                <div style={{position: "absolute"}} className="d-flex justify-content-around">
                                    <button onClick={() => handleDownVolume()} style={{ cursor: "pointer" }} id="bPlusLess" className="fa fa-minus" />
                                    <button onClick={() => setPlaying(!playing)} style={{ cursor: "pointer" }} id="bPlay" className={`fa ${playing ? "fa-stop" : "fa-play"}`} />
                                    <button onClick={() => handleUpVolume()} style={{ cursor: "pointer" }} id="bPlusLess" className="fa fa-plus" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="text-center">
                            <p>This website was made with React in Ts</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}