import { vi, describe, it, expect, beforeAll, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopItemCard from "../src/components/ShopItemCard";

const mockItem = {
  price: 40,
  id: 123456,
  title: 'Item Name',
  image: 'https://images.stockx.com/images/Crocs-Classic-Clog-Chocolate.jpg',
}

describe('<ShopItemCard />', () => {
  beforeEach(() => {
    render(<ShopItemCard item={mockItem} />);
  });

  it('renders the image', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders the button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders the price', () => {
    expect(screen.getByText('$40.00')).toBeInTheDocument();
  });
});
