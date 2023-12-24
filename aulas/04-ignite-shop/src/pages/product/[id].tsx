import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/products"

export default function Product() {
  const query = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia suscipit dicta soluta, doloremque accusamus reprehenderit, magni veritatis tempora numquam hic nostrum iure necessitatibus? Vel repellat blanditiis atque minus incidunt?</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}