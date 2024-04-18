import { Outlet } from "react-router-dom"
import { useEffect, useState } from 'react'
import styled from "styled-components"
import Header from "../components/HeaderNav"

const Wrapper = styled.div`
    height: 100dvh;
    display: flex;
    flex-direction: column;
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
    gap: 2rem;
`;

const makeItem = (hit) => {
  const item = {};
  item.id = hit.id.substring(0, 6);
  item.image = hit.image;
  item.title = hit.title;
  item.price = hit.base_price;
  return item;
}

export default function Layout() {
  const [items, setItems] = useState();
  const [cart, setCart] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('https://api.stockx.vlour.me/search?query=Crocs')

      if (!response.ok) {
        throw new Error('Network response not ok');
      }

      const result = await response.json();
      let itemsData = [];

      for (let i = 0; i < 12; i++) {
        const hit = result.hits[i];
        const card = makeItem(hit);
        itemsData.push(card);
      }
      console.log(itemsData);
      setItems(itemsData)

    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Fetch the data on page load
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Wrapper>
      <Header />
      <Outlet context={[items, setItems]} />
    </Wrapper>
  )
}
