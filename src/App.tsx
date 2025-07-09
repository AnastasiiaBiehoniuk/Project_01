import './App.css'
import Card from './components/Card/Card'
import GoodBye from './components/Goodbye/Goodbye'
import Greeting from './components/Greeting/Greeting'
import ProfileCard from './components/ProfileCard/ProfileCard'
import ThankYou from './components/ThankYou/ThankYou'
 

function App() {
  

  return (
      <>
        <Greeting name={"Anastasiia"}/>
        <Greeting name={"Anastasiia"} age={18} />
        <ThankYou />
        <GoodBye />
        <ProfileCard avatar={"https://tse4.mm.bing.net/th/id/OIP.NoZ6cdgPuX7hqDXCUO5FzwHaHa?w=640&h=640&rs=1&pid=ImgDetMain&o=7&rm=3"}
        name={"Nastya Biehoniuk"}
         description={"Frontend Developer from Germany"} />
         <Card
        url={
          "https://www.worldsbestcatlitter.com/wp-content/uploads/2019/12/02_coughing-cat-meme.jpg"
        }
        alt="cat meme"
      />
      {/* Вариант 1 - если картинка в папке public */}
      <img src="/02.jpg" alt="cat" />
        </>
  )
}

export default App
