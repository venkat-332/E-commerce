import React from 'react';
import { booksData } from '../data/books';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const BooksPage = () => {

    const [selectedProduct,setSelectedProduct] = useState([]);

    const companyHandler=(mango)=> {
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item => item !== mango))
        } else {
            setSelectedProduct([...selectedProduct,mango])
        }
    }

    const filteredProduct = selectedProduct.length ===0?
    booksData: booksData.filter((orange)=> selectedProduct.includes(orange.category))

    return ( 
        <>
        <Navbar />
            <div className='fullpage'>
             <div className="pro-selected">
                {booksData.map((xerox)=> {
                    return (
                        <div className="pro-input">
                            <label>
                                <input type="checkbox"
                                checked = {selectedProduct.includes(xerox.category)}
                                onChange={()=>companyHandler(xerox.category)}
                                 />
                                {xerox.category}
                            </label>
                        </div>
                    )
                })}
              </div>
                <div className="pageSection">
                    {filteredProduct.map((item) => {
                        return (
                            <div>
                                <Link to = {`/books/${item.id}`}>
                                    <div className="pageImg">
                                        <img src={item.image} alt="" />
                                    </div>
                                </Link>
                                <div className="proModel">
                                    {item.title}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
 
export default BooksPage;