import React, { Children, useMemo, useState } from 'react'
import { ProductContext } from './ProductContext'

const ProductProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const values = useMemo(
        function () {
            return { cart, setCart }
        }
    );
  return (
      <ProductContext.Provider value={values}>
          {
              children
          }
    </ProductContext.Provider>  
    
  )
}

export default ProductProvider