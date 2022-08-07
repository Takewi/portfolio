import "./bonus.css";
export const Bonus = () => {
  return (
    <div
      className="text-center border p-2 text-white flex flex-col gap-2"
      style={{
        fontFamily: "Roboto Mono",
        width: "300px",
        height: "auto",
        backgroundColor: "rgba(111, 0, 176, 0.56)",
      }}
    >
      <p id="gawi" className="h5">
        <b>Other works ⚙️</b>
      </p>
      <hr />
      <a target={"_blank"} rel="noreferrer" href="https://tic-tac-toe.takewi.vercel.app/">
      <b>#️⃣ Tic Tac Toe</b>
      </a>
      <p>🚧 More in development</p>
      <hr />
      <a
        href="https://github.com/GustavoViegas8"
        target={"_blank"}
        className="text-white"
        rel="noreferrer"
      >
        See my old github
      </a>
    </div>
  );
};
