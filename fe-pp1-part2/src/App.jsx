import CreditCard from "./components/CreditCard";
import BoxColor from "./components/BoxColor";
import Greetings from "./components/Greetings";

function App() {
  return (
    <div>
      <div className="cards">
        <CreditCard
          type="Visa"
          number="0123456789018875"
          expirationMonth="03"
          expirationYear="21"
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="MasterCard"
          number="0123456789010993"
          expirationMonth="03"
          expirationYear="21"
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016982"
          expirationMonth="12"
          expirationYear="19"
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      <div className="box-colors">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <div className="greetings">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      
    </div>
  );
}

export default App;