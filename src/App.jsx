import { Fragment } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Body from './components/Body/Body';


const App = () => {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  )
}

export default App;
