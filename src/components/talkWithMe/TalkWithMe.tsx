import copy from "copy-to-clipboard"
export const TalkWithMe = () => {
    return (
        <div className="container text-center">
            <p className="h5 NeoZoom">
                <b>To talk with me</b>
            </p>
            <p
                className="h6 zoom"
                style={{ fontSize: "15px" }}>
                <b
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Click to copy my E-mail"
                    onClick={() => copy("gawi2k21@gmail.com")}>
                        E-mail:
                </b>
            </p>
            <p>gawi2k21@gmail.com</p>
            <p
                className="h6 zoom"
                style={{ fontSize: "15px" }}>
                <b
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Click to copy my Whatsapp"
                    onClick={() => copy("+55 53 981125790")}>
                        Whatsapp:
                </b>
            </p>
            <p>+55 53 981125790</p>
            <p
                className="h6 zoom"
                style={{ fontSize: "15px" }}>
                <b
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Click to copy my Discord Tag"
                    onClick={() => copy("Gawi_#0019")}>
                        Discord:
                </b>
            </p>
            <p>Gawi_#0019</p>
        </div>
    )
}