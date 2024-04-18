import { useOutletContext } from "react-router-dom"
import ShopCartItem from "../components/ShopCartItem";

export default function Store() {
  const [items, setItems] = useOutletContext();

  return (
    <>
      <h1>This is the Store page</h1>
      {items && items.map((item) => (
        <div key={item.id}>
          <ShopCartItem item={item} />
        </div>
      ))}
    </>
  )
}
