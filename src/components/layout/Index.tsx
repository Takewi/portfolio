import { LofiAudioSpectrum } from "../audio/Index";
import { Social } from "../social/Index";
import { TalkWithMe } from "../talkWithMe/Index";
import "./style.css";

export const Layout = () => {
    return (
        <>
            <div
                className="border p-2"
                style={{
                    fontFamily: "Roboto Mono",
                    backgroundColor: "rgba(111, 0, 176, 0.56)",
                }}
            >
                <div
                    className="text-white"
                    style={{ width: "250px" }}
                >
                    <div className="flex flex-col gap-2">
                        <div className="text-center text-white m-2">
                            <p id="gawi" className="text-2xl">
                                <b>Gawi_ 👋</b>
                            </p>
                        </div>
                        <hr />
                        <div className="text-center">
                            <p className="h4 NeoZoom">
                                <b>Social 👥</b>
                            </p>
                            <Social />
                        </div>
                        <hr />
                        <TalkWithMe />
                        <hr />
                        <div className="text-center">
                            <a
                                target="_blank"
                                href="./Gustavo S. Viegas.pdf"
                                style={{ textDecoration: "none" }}
                            >
                                <p
                                    className="h5 NeoZoom"
                                    style={{
                                        color: "white",
                                        cursor: "pointer",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Click to open my resume"
                                >
                                    <b>📄 See my resume!</b>
                                </p>
                            </a>
                        </div>
                        <hr />
                        <div className="flex flex-col gap-2">
                            <div className="text-center">
                                <p className="h6 NeoZoom">
                                    <b>😴 Lofi beat to relax:</b>
                                </p>
                            </div>
                            <LofiAudioSpectrum />
                        </div>
                        <hr />
                        <div className="flex flex-row justify-center">
                            <a href="https://www.counter12.com">
                                <img
                                    style={{ height: "20px" }}
                                    src="https://www.counter12.com/img-ZYd5w91cwA3D0acw-70.gif"
                                    alt="counter free"
                                />
                            </a>
                        </div>
                        <div className="text-center">
                            <p style={{ marginBottom: "0px" }}>
                                This website was made with{" "}
                                <a
                                    href="https://reactjs.org/"
                                    style={{ color: "white" }}
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    React
                                </a>{" "}
                                in{" "}
                                <a
                                    style={{ color: "white" }}
                                    target={"_blank"}
                                    href="https://www.typescriptlang.org/"
                                    rel="noreferrer"
                                >
                                    Ts
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
