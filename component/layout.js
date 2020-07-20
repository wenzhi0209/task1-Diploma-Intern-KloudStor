import Header from './header';
import Footer from './footer'

const Layout = props => (

  <div>
    <Header />
    {props.children}
    <Footer id='footer' />

    <style jsx>{`
    
    `}</style>
  </div>
);

export default Layout;