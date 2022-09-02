import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';

const Order = () => {
    const { cartItem } = useSelector(state => state.cartReducer);
    const { order } = useSelector(state => state.orderReducer);
    const [totalAmount, setTotalAmount] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        let temp = 0;
        order.forEach(element => {
            temp = temp + element.price;
        });
        setTotalAmount(temp);
    }, [order]);

    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order));
    }, [order]);
    const deleteFromOrder = (product) => {
        dispatch({ type: "DELETE_FROM_ORDER", payload: product })
    };

    const omSub = () => {
        if (totalAmount != 0) {
            alert("payment successful");
            navigate("/cart")
        } else {
            alert("don't payment, after buy the product you are going to payment");
            navigate("/order");
        }
    }
    const onSubmit = () => {

        navigate("/")
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
                        order.map(item => {
                            return <tr key={item.id}>
                                <td >
                                    <img src={item.image} height='80' width='80' /> </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>

                                <td><FaTrash onClick={() => deleteFromOrder(item)} /></td>
                            </tr>

                        })}



                </tbody>
            </table>
            <div className='d-flex justify-content-end mt-3'>
                <h1 className='total_amout'>Total Amount={totalAmount} Rs/-</h1>
            </div>
            <div className='d-flex justify-content-end'>
                <button onClick={onSubmit}>Back</button>
            </div>
            <div className='d-flex justify-content-end'>
                <button onClick={omSub}>Pay Now</button>
            </div>

        </Layout>
    )
}

export default Order