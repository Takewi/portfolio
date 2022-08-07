import copy from "copy-to-clipboard"
export const TalkWithMe = () => {
    return (
        <div className="text-center flex flex-col gap-1">
            <p className="h5 NeoZoom">
                <b>To talk with me 🗣</b>
            </p>
            <p
                className="h6 zoom"
                style={{ fontSize: "15px" }}>
                <b
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Click to copy my E-mail"
                    onClick={() => copy("gawi2k21@gmail.com")}>
                       📧 E-mail:
                </b>
            </p>
            <p style={{ fontSize: "15px" }}> <b>gawi2k21@gmail.com</b> </p>
            <p
                className="h6 zoom"
                style={{ fontSize: "15px" }}>
                <b
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Click to copy my Whatsapp"
                    onClick={() => copy("+55 53 981125790")}>
                       📱 Whatsapp:
                </b>
            </p>
            <p style={{ fontSize: "15px" }}><b>+55 53 981125790</b></p>
            <p
                className="h6 zoom"
                style={{ fontSize: "15px" }}>
                <b
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Click to copy my Discord Tag"
                    onClick={() => copy("Gawi_#0020")}>
                       💻 Discord:
                </b>
            </p>
            <p  style={{ fontSize: "15px" }}><b>Gawi_#0020</b></p>
        </div>
    )
}