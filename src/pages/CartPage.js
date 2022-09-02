import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlus, FaTrash } from 'react-icons/fa';


const CartPage = () => {

    const { cartItem } = useSelector(state => state.cartReducer);
    const { order } = useSelector(state => state.orderReducer);


    const [totalAmount, setTotalAmount] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        let temp = 0;
        cartItem.forEach(element => {
            temp = temp + element.price;
        });
        setTotalAmount(temp);
    }, [cartItem]);

    useEffect(() => {
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
    }, [cartItem])

    const deleteFromCart = (product) => {
        dispatch({ type: "DELETE_FROM_CART", payload: product })
    };

    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order));
    }, [order])
    const addFromOrder = (product) => {

        dispatch({ type: "ADD_TO_ORDER", payload: product });
        navigate('/order');
    };
    const onSubmit = () => {

        navigate("/")
    }


    const OnSub = () => {

        navigate('/order');
    }



    return (
        <Layout>
            <table className='table md-3'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItem.map(item => {
                            return <tr key={item.id}>
                                <td >
                                    <img src={item.image} height='80' width='80' /> </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>

                                <td><FaTrash onClick={() => deleteFromCart(item)} /></td>
                                <td onClick={() => addFromOrder(item)}> Buy Now </td>

                            </tr>

                        })}



                </tbody>
            </table>
            <div className='d-flex justify-content-end mt-3'>
                <h1 className='total_amout'>Total Amount={totalAmount} Rs/-</h1>
            </div>
            <div className='d-flex justify-content-end'>
                <button onClick={onSubmit}>Back Shopping page</button>
            </div>
            <div className='d-flex justify-content-end'>
                <button onClick={OnSub}
                >PLACE ORDER</button>
            </div>




        </Layout>
    )
}

export default CartPage