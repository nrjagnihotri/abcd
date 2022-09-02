import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDb from '../fireConfig';
import { fireproducts } from '../firecommerceproducts';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Homepage = () => {

    const [products, setProducts] = useState([]);
    const { cartItem } = useSelector(state => state.cartReducer);
    const { order } = useSelector(state => state.orderReducer);
    const { user } = JSON.parse(localStorage.getItem('currentUser'));

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            setLoading(true);
            const users = await getDocs(collection(fireDb, "products"),);
            const productsArray = [];
            users.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots

                const obj = {
                    id: doc.id,
                    ...doc.data(),
                }
                productsArray.push(obj);
                setLoading(false);
            });
            setProducts(productsArray);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
    }, [cartItem])

    const addToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product })
    };
    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order));
    }, [order])

    const addToOrder = (product) => {
        dispatch({ type: "ADD_TO_ORDER", payload: product })
    };

    return (
        <Layout loading={loading}>
            .
            <div className="container">
                .
                <div className="row">
                    {
                        products.map((product) => {

                            return <div className='col-md-4' key={product.id}>
                                <div className='m-2 p-1  product position-relative'>
                                    <div className='product_content' >
                                        <p>{product.title}</p>
                                        <div className='text-center'>
                                            <img src={product.image} alt='' className='productimg' />
                                        </div>
                                    </div>
                                    <div className='product_actions'>
                                        <h2>{product.price} Rs/-</h2>
                                        <div className='d-flex'>
                                            <button className='mx-2'
                                                onClick={() => addToCart(product)}
                                            >ADD TO CART</button>
                                            <button onClick={() => {
                                                navigate(`/product/${product.id}`);
                                            }}>view</button>
                                            <button className='mx-2'
                                                onClick={() => addToOrder(product)}
                                            >Buy Now</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        }

                        )


                    }
                </div>

            </div>





        </Layout>
    )
}

export default Homepage