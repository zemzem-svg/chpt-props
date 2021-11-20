import "./App.css";
import Profile from "./component/Profile";

function App() {
  const handleName = (name) => alert(name);

  return (
    <div className="App">
      <div
        style={{
          maxWidth: "55%",
          borderRadius: "15px",
          padding: "15px",
        
        }}
      >
        <Profile
          fullName={"Mabrouka ZEMZEMI"}
          profession={"Electrical Engineer"}
          bio="A Full Stack Developer  in Javascript and React"
          handleName={handleName}
        >
          <img
            src="https://www.thebalancecareers.com/thmb/L1XmQZVl9ssm97TlB6sbLmZZm_M=/950x0/filters:max_bytes(150000):strip_icc():format(webp)/career-facts-electrical-engineers-4126615-final_HL-5e6bfbcea8e5434da9d503b4226c28c0.png"
            alt=""
            style={{ borderRadius: "15px", width: "300px" }}
          />
        </Profile>
      </div>
    </div>
  );
}

export default App;