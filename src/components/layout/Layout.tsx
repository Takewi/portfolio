import { LofiAudioSpectrum } from "../audio/LofiAudioSpectrum"
import { Social } from "../social/Social"
import { TalkWithMe } from "../talkWithMe/TalkWithMe"
import "./Layout.css"

export const Layout = () => {
    return (
        <>
            <div className="align-self-center border p-3" style={{ fontFamily: "Roboto Mono" }}>
                <div className="flex-shrink-0 text-white" style={{ width: "250px", }}>
                    <div className="text-center text-white text-decoration-none">
                        <p id="gawi" className="h1"><b>Takewi</b></p>
                    </div>
                    <hr />
                    <div>
                        <div className="text-center">
                            <p className="h4 NeoZoom"><b>Social</b></p>
                            <Social />
                        </div>
                        <hr />
                        <TalkWithMe/>
                        <hr />
                        <div className="text-center">
                            <a 
                                target="_blank" 
                                href="./Gustavo S. Viegas.pdf" 
                                style={{ textDecoration: "none" }}>
                                    <p 
                                        className="h5 NeoZoom" 
                                        style={{ color: "white", cursor: "pointer" }}> 
                                        <b>See my resume!</b> 
                                    </p>
                            </a>
                        </div>
                        <hr />
                        <div className="container">
                            <div className="text-center">
                                <p className="h6 NeoZoom"><b>Lofi beat to relax:</b></p>
                            </div>
                            <LofiAudioSpectrum />
                        </div>
                        <hr />
                        <div className="text-center">
                            <p style={{ marginBottom: "0px" }}>This website was made with <a href="https://reactjs.org/" style={{ color: "white" }} target={"_blank"} rel="noreferrer" >React</a> in <a style={{ color: "white" }} target={"_blank"} href="https://www.typescriptlang.org/" rel="noreferrer">Ts</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}