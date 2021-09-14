import '../styles/index.scss';
import Recipes from './recipes';

import St from '../images/goods/st.jpg';
import Avatar from '../images/avatar.svg';


function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>

        <img src={St} alt="st" width="250" />
        <img src={Avatar} alt="st" width="50" />
        <Recipes />
      </main>
    </>
  )
}

export default App

