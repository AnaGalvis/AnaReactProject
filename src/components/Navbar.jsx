import { SlBasket } from 'react-icons/sl';
const Navbar = () =>{
      return(
           <header>
            <span className="name">Ana'Shop</span>
            <div className='nameItem'>
                  <span className='item'> Outdoor</span>
                  <span className="item">Living Room</span>
                  <span className='item'>Kitchen</span>
                  <span className='item'>Bedroom</span>
            </div>
            <span id="icone">My Card < SlBasket/></span>
           </header>
      )

}

export default Navbar