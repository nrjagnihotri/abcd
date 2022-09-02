import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getDoc, doc } from "firebase/firestore";
import fireDb from '../fireConfig';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const getData = async () => {
        try {
            setLoading(true);
            const productTemp = await getDoc(doc(fireDb, "products", params.productid));


            setProduct(productTemp.data());
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <Layout loading={loading}>

            <div className="container">
                .
                <div className="row justify-content-center">
                    <div className='col-md-3'>
                        {product && (<div>
                            <p><b>{product.title}</b></p>
                            <img src={product.image} className='productinfo_img' />
                            <hr />
                            <p>{product.description}</p>
                            <div className='d-flex justify-content-end my-3'>
                                <button>ADD TO CART</button>
                            </div>
                        </div>)}
                    </div>
                </div>

            </div>



        </Layout>
    )
}

export default ProductInfo