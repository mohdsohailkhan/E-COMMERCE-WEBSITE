import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import carouselOneImg from '../assets/1.png'
import carouselTwoImg from '../assets/4.png'
import carouselThreeImg from '../assets/5.png'
import product1 from '../assets/10.png'
import product2 from '../assets/11.png'
import product3 from '../assets/12.png'
import product4 from '../assets/13.png'
import product5 from '../assets/14.png'
import product6 from '../assets/15.png'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Home(user){
  const navigate = useNavigate();
  function handleCTAClick(){
    if(user){
        navigate('/productgallery')
    }
    else{
      navigate('/login')
    }
  }
    return(
        <div>
           <Carousel>
                <Carousel.Item>
                  <Row>
                     <Col>
                       <div className='leftcol'>
                            <h2 className='shop'><i>SHOP WITH UTMOST</i></h2>
                            <h1 className='confidence'><i>CONFIDENCE</i></h1>
                            <p>shop from the latest trendy clothes to the best gadgets.With Star Shopper you save 10% every time you shop!</p>
                            <Button className='browse' onClick={handleCTAClick}>Browse Products</Button>
                            <h4 className='available'>Products available from:</h4>
                            <div className='products'>
                             <img className='product' src={product1}/>
                             <img className='product' src={product2}/>
                             <img className='product' src={product3}/>
                             <img className='product' src={product4}/>
                             <img className='product' src={product5}/>
                             <img className='product' src={product6}/>
                            </div>
                       </div>
                     </Col>
                     <Col><img className='carouselOneImg' src={carouselOneImg}/></Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                     <Col>
                       <div className='leftcol'>
                            <h2 className='shop'><i>SHOP WITH UTMOST</i></h2>
                            <h1 className='confidence'><i>CONFIDENCE</i></h1>
                            <p>shop from the latest trendy clothes to the best gadgets.With Star Shopper you save 10% every time you shop!</p>
                            <Button className='browse'onClick={handleCTAClick}>Browse Products</Button>
                            <h4 className='available'>Products available from:</h4>
                            <div className='products'>
                             <img className='product' src={product1}/>
                             <img className='product' src={product2}/>
                             <img className='product' src={product3}/>
                             <img className='product' src={product4}/>
                             <img className='product' src={product5}/>
                             <img className='product' src={product6}/>
                            </div>
                       </div>
                     </Col>
                     <Col><img className='carouselOneImg' src={carouselTwoImg}/></Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                     <Col>
                       <div className='leftcol'>
                            <h2 className='shop'><i>SHOP WITH UTMOST</i></h2>
                            <h1 className='confidence'><i>CONFIDENCE</i></h1>
                            <p>shop from the latest trendy clothes to the best gadgets.With Star Shopper you save 10% every time you shop!</p>
                            <Button className='browse'onClick={handleCTAClick}>Browse Products</Button>
                            <h4 className='available'>Products available from:</h4>
                            <div className='products'>
                             <img className='product' src={product1}/>
                             <img className='product' src={product2}/>
                             <img className='product' src={product3}/>
                             <img className='product' src={product4}/>
                             <img className='product' src={product5}/>
                             <img className='product' src={product6}/>
                            </div>
                       </div>
                     </Col>
                     <Col><img className='carouselOneImg' src={carouselThreeImg}/></Col>
                  </Row>
                </Carousel.Item>
           </Carousel>
        </div>
    )
}