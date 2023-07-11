
// import About from '../components/About'

import MainScreen from "./MainScreen"

const FrontPage = () => {
  return (
    <div>

      <MainScreen />
        {/* < About/> */}
       <div className="App">
        <header>
          <h1>Welcome to ProFit</h1>
        </header>
        <main>
          <section>
            <h2>About ProFit</h2>
            <p>
              ProFit is a food recommendation system that helps you make healthier choices
              by suggesting nutritious and delicious meals tailored to your preferences.
            </p>
            <p>
              Our advanced algorithm analyzes your dietary requirements, taste preferences,
              and nutritional goals to provide personalized food recommendations.
            </p>
          </section>
         
          <section>
            <h2>Why Choose ProFit?</h2>
            <ul>
              <li>Receive tailored food recommendations based on your preferences and goals.</li>
              <li>Discover new recipes and ingredients to add variety to your meals.</li>
              <li>Access nutritional information and ingredient details for each recommended dish.</li>
              <li>Track your progress towards your health and fitness goals.</li>
              <li>Connect with a community of health-conscious individuals.</li>
            </ul>
          </section>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} ProFit. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default FrontPage
