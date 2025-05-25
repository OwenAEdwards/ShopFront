import { useParams } from "react-router-dom"

function ProductDetailPage() {
  const { id } = useParams()
  return <div className="p-4 text-xl">Product Detail Page for ID: {id}</div>
}

export default ProductDetailPage
