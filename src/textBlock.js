import "./App.css";
import "./textblock.css";
function TextBlock() {
  return (
    <div id="textblock">
      <div id="textblock-container">
        <div id="head-container">
          <img src="LOGO BGFREE.svg" id="logo" />
        </div>
        <div className="text">
          <div id="title-container">
            <h1 id="textblock-title">UTKANSH </h1>
            <span id="textblock-subtitle">Techno Cultural Fest of NITJ</span>
            <br />
            <br />
          </div>
          <p id="textblock-content">
            Utkansh is the annual cultural festival of NITJ, recognized as one
            of the greatest cultural festivals of North India. Entirely
            organized by the NITJ students' association, it serves as a perfect
            launch pad for artistic enthusiasts to showcase their intelligence
            and inventiveness. <br />
            <br />
            The fest is an amalgamation of music, dance, drama, and comedy.
            Students from all over the country come to participate in various
            competitions and enjoy the three-day cultural fiesta. <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextBlock;
