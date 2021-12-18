import { Link, Outlet } from "react-router-dom"
import  AudioSpectrum  from "react-audio-spectrum2"
import "./Layout.css"
export const Layout = () => {
    return (
        <>
            <div className="d-flex align-items-start" style={{ backgroundImage: "url('./background.gif')", backgroundRepeat: 'no-repeat', backgroundSize: "100%" }}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary order-2 vw-100 d-flex justify-content-center">
                    <div>
                        <Link style={{ fontSize: "25px" }} className="nav-link text-white neon" to="home">Home</Link>
                    </div>
                    <div>
                        <Link style={{ fontSize: "25px" }} className="nav-link text-white neon" to="about">About</Link>
                    </div>
                </nav>
                <div className="vh-100 flex-shrink-0 p-3 text-white bg-primary order-1" style={{ width: "250px" }}>
                    <Link to="/" className="text-center text-white text-decoration-none">
                        <p className="neon h1">Gawi_</p>
                    </Link>
                    <hr />
                    <div>
                        <div className="text-center">
                            <p className="h4 zoom"><b>Social</b></p>
                        </div>
                        <div className="container">
                            <a href="https://twitter.com/gawi2k21" target={"_blank"} rel="noreferrer"><p className="fa fa-twitter" /></a>
                            <a href="https://www.linkedin.com/in/gustavo-viegas-8989a01b4/" target={"_blank"} rel="noreferrer"><p className="fa fa-linkedin" /></a>
                            <a href="https://www.instagram.com/gawii_2i/?hl=pt-br" target={"_blank"} rel="noreferrer"><p className="fa fa-instagram" /></a>
                            <a href="https://www.facebook.com/gustavoviegas231914" target={"_blank"} rel="noreferrer"><p className="fa fa-facebook" /></a>
                            <a href="https://github.com/Takewi" target={"_blank"} rel="noreferrer"><p className="fa fa-github" /></a>
                            <a href="https://www.youtube.com/channel/UCQzQ3vyOhPwzxYh4vRpyiWA" target={"_blank"} rel="noreferrer"><p className="fa fa-youtube" /></a>
                            <div className="text-center container">
                                <p className="h6 ml-3"><b>Discord:</b></p>
                                <p className="h6 zoom"><b>Gawi_#0019</b></p>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            <div className="text-center">
                                <p className="h6 zoom"><b>Lofi beats</b></p>
                            </div>
                            <audio 
                                id="audio-element"
                                src="./sound.mp3"
                                autoPlay
                            />            
                            <AudioSpectrum
                                id="audio-canvas"
                                height={200}
                                width={250}
                                audioId={'audio-element'}
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
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}