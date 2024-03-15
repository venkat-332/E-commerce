import React from 'react';
import Mobiles from './Mobiles';
import Computers from './Computers';
import Men from './Men';
import Ac from './ac';
import Furniture from './Furniture';
import Kitchen from './Kitchen';
import Books from './Books';

const Products = () => {
    return (  
        <div>
            <Mobiles />
            <Computers />
            <Men />
            <Ac />
            <Furniture />
            <Kitchen />
            <Books />
        </div>
    );
}
 
export default Products;