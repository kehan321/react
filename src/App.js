import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Ccard from './card';
import Card from './card';
import SNavbar from './navbar';


function App() {
  return (

    <>
    <div>
      {/* product/manufactures heading */}
      <div className='product-manufact' >
        <p><a href="">Products</a></p>
        <p><a href="">Manufacturers</a></p>
      </div>






    <SNavbar />
    <Ccard />



    </div>
    
    
    </>
  );
}

export default App;
