import "./style.css"
export const Social = () => {
    return (
        <div className="flex flex-wrap justify-evenly">
            <a 
                href="https://twitter.com/gawi2k21" 
                target={"_blank"} 
                className="p-1"
                rel="noreferrer">
                <p className="fa fa-twitter" />
            </a>
            <a 
                href="https://www.linkedin.com/in/gustavo-viegas-8989a01b4/" 
                target={"_blank"}
                className="p-1" 
                rel="noreferrer">
                <p className="fa fa-linkedin" />
            </a>
            <a 
                href="https://www.instagram.com/gawii_2i/?hl=pt-br" 
                target={"_blank"} 
                className="p-1"
                rel="noreferrer">
                <p className="fa fa-instagram" />
            </a>
            <a 
                href="https://www.facebook.com/gustavoviegas231914" 
                target={"_blank"} 
                className="p-1"
                rel="noreferrer">
                <p className="fa fa-facebook" />
            </a>
            <a 
                href="https://github.com/Takewi" 
                target={"_blank"} 
                className="p-1"
                rel="noreferrer">
                <p className="fa fa-github" />
            </a>
            <a 
                href="https://www.youtube.com/channel/UCQzQ3vyOhPwzxYh4vRpyiWA" 
                target={"_blank"} 
                className="p-1"
                rel="noreferrer">
                <p className="fa fa-youtube" />
            </a>
        </div>
    )
}