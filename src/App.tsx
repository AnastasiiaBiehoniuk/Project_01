import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import ThankYou from "./components/ThankYou/ThankYou";
import Goodbye from "./components/Goodbye/Goodbye";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { Counter } from "./components/Counter/Counter";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import WeightCalculator from "./components/WeightCalculator/WeightCalculator";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";



function App() {
  const name = "Vasiliy";
  const user = {
    avatar:
      "https://i.etsystatic.com/45893541/r/il/545bc4/6453954482/il_1080xN.6453954482_q062.jpg",
    name: "Smiling Cat",
    description: "A meme of the smiling cat, ready to make people happy!",
  };
  return (
    <>
      <SpaceMissionForm />
      <WeightCalculator />
      <Counter />
      <Counter />
      <PersonalGreeting />
      <Greeting name={name} />
      <Greeting name={"Evgenii"} age={18} />
      <ThankYou />
      <Goodbye />
      <ProfileCard {...user} />
      {/* <Card
        url={
          "https://www.worldsbestcatlitter.com/wp-content/uploads/2019/12/02_coughing-cat-meme.jpg"
        }
        alt="cat meme"
      />
    
      <img src="/a.jpg" alt="cat" />
      <img src={catPicture} alt="cat" /> */}
    </>
  );
}

export default App;