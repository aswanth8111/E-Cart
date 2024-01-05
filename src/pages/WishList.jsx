import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addtoCart } from '../redux/slices/cartSlice';

function WishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handlewishlist = (item)=>{
    dispatch(addtoCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <div>
    <Row className='ms-5 me-3'style={{marginTop:'150px'}} >
     {wishlistArray?.length>0?
     wishlistArray?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
     <Card style={{ width: '100%' }}>
     <Card.Img variant="top" src={item.image} style={{height:'200px'}} />
     <Card.Body>
       <Card.Title  className='fw-bolder'>{item.title.slice(0,20)}... </Card.Title>
       <Card.Text>
         <p>{item.description.slice(0,40)}... </p>
         <p className='fw-bolder'>Price : {item.price}  </p>
       </Card.Text>
       <div className='d-flex align-items-center justify-content-between'>
         <Button onClick={()=>dispatch(removeFromWishlist(item.id))}  variant="outline-danger rounded"><i class="fa-regular fa-trash-can fa-bounce"></i></Button>
         <Button onClick={()=>handlewishlist(item)} variant="outline-success rounded"><i class="fa-solid fa-cart-plus fa-bounce"></i></Button>
       </div>
     </Card.Body>
   </Card>
     </Col>))
      : <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
        <img src="https://cdn-icons-gif.flaticon.com/8797/8797960.gif" alt="no image" height={'300px'} />
        <h4 className='text-danger mt-3' style={{overflowY:'hidden'}}>Your wishlist is empty</h4>
        <Button className='btn btn-primary rounded mt-3'><Link style={{textDecoration:'none',color:'white'}} to={'/'} ><i class="fa-solid fa-arrow-left me-3"></i>Back to Home</Link></Button>
      </div>
    }
    
  </Row>
  </div>
  )
}

export default WishList