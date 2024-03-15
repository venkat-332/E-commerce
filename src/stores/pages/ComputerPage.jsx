// import React from 'react';
// import { computerData } from '../data/computers';
// import Navbar from '../components/Navbar';
// import { useState } from 'react';


// const ComputerPage = () => {

//     const [selectedProduct, setSelectedProduct] = useState([]);

//     const companyHandler=(mango)=> {
//         if(selectedProduct.includes(mango)){
//             setSelectedProduct(selectedProduct.filter(item => item!== mango))
//         } else {
//             setSelectedProduct([...selectedProduct,mango])
//         }
//     }

//     const filteredProduct = selectedProduct.length===0?
//     computerData : computerData.filter((orange)=>selectedProduct.includes(orange.company))

//     return ( 
//         <>
//         <Navbar />
//         <div className='pro-input'>
//             <div className="pro-selected">
//                 {computerData.map((comp)=> {
//                     return (
//                         <div className="pro-input">
//                             <label>
//                                 <input type="checkbox"
//                                 checked ={selectedProduct.includes(comp.company)}
//                                 onChange={()=>companyHandler(comp.company)}
//                                  />
//                                  {comp.company}
//                             </label>
//                         </div>
//                     )
//                 })}
//             </div>
//                 <div className="pageSection">
//                     {filteredProduct.map((item) => {
//                         return (
//                             <div>
//                                 <div className="pageImg">
//                                     <img src={item.image} alt="" />
//                                 </div>
//                                 <div className="proModel">
//                                     {item.company}, {item.model}
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//         </div>
//         </>
//     );
// }
 
// export default ComputerPage;






import React, { useState } from 'react';
import { computerData } from '../data/computers';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const ComputerPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(new Set());

    const companyHandler = (mango) => {
        const updatedSelectedProduct = new Set(selectedProduct);
        if (updatedSelectedProduct.has(mango)) {
            updatedSelectedProduct.delete(mango);
        } else {
            updatedSelectedProduct.add(mango);
        }
        setSelectedProduct(updatedSelectedProduct);
    };

    // Extracting unique company names
    const uniqueCompanies = Array.from(new Set(computerData.map(comp => comp.company)));

    return (
        <>
            <Navbar />
            <div className='pro-input'>
                <div className="pro-selected">
                    {uniqueCompanies.map((company) => (
                        <div className="pro-input" key={company}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProduct.has(company)}
                                    onChange={() => companyHandler(company)}
                                />
                                {company}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="pageSection">
                    {computerData
                        .filter(item => selectedProduct.size === 0 || selectedProduct.has(item.company))
                        .map((item, index) => (
                            <div key={index}>
                                <Link to = {`/computers/${item.id}`}>
                                    <div className="pageImg">
                                        <img src={item.image} alt="" />
                                    </div>
                                </Link>
                                <div className="proModel">
                                    {item.company}, {item.model}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default ComputerPage;
