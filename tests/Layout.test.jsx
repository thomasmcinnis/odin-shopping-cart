import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Layout from "../src/pages/Layout";

vi.mock('../src/components/HeaderNav', () => ({
    default: () => {
        return <h1>Mock Header</h1>;
    },
}));

describe('<Layout />', () => {
    it('renders the Header', () => {
        render(<Layout />);

        expect(screen.getByText('Mock Header')).toBeInTheDocument();
    });
});

