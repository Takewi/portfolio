export const About = () => {
    return (
        <div className="text-center border p-2 text-white flex flex-col gap-2" 
            style={{ 
                fontFamily: "Roboto Mono", 
                width: "300px", 
                height: "auto", 
                backgroundColor: "rgba(111, 0, 176, 0.56)"
            }}
        >
            <p id="gawi" className="h2"><b>About me 📘</b></p>
            <hr/>
            <p style={{fontWeight: "bold"}}>
                Hi everyone, my name is Gustavo but everyone calls me Gawi, i'm a junior web developer and i'm 19 years old.
                I usually spend time studying or working on personal projects. I also enjoy watching anime and playing games with my friends.
            </p>
        </div>
    )
}