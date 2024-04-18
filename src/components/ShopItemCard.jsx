import styled from "styled-components";

export default function ShopItemCard({ item }) {
  const dollarPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(item.price);
  return (
    <Card>
      <Image src={item.image} />
      <ItemDetails>
        <div>
          <p>{item.title}</p>
          <Price>{dollarPrice}</Price>
        </div>
        <div>
          <button>Add to Cart</button>
          <p>sku: {item.id}</p>
        </div>
      </ItemDetails>
    </Card>
  )
}

const Card = styled.div`
display: flex;
flex-direction: column;
`
const Image = styled.img`
border-radius: var(--radius-sm);
overflow: clip;
`;

const ItemDetails = styled.div`
display: flex;
gap: 1rem;
padding: var(--padding-sm);
width: 100%;
justify-content: space-between;
`;

const Price = styled.p`
font-size: var(--fs-h5);
font-weight: 600;
`
