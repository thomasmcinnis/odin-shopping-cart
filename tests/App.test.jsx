import { vi, describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

vi.mock('../src/pages/Home', () => ({
    default: () => {
        return <>Mock Home Page</>;
    },
}));

vi.mock('../src/pages/Cart', () => ({
    default: () => {
        return <>Mock Cart Page</>;
    },
}));

vi.mock('../src/pages/Store', () => ({
    default: () => {
        return <>Mock Store Page</>;
    },
}));

describe('<App />', () => {
    it('renders Home by default', () => {
        render(<App />);
        expect(screen.getByText('Mock Home Page')).toBeInTheDocument();
    });

    it('routes to Cart when Cart link clicked', async () => {
        render(<App />);

        await userEvent.click(screen.getByText('Cart'));
        await waitFor(() =>
            expect(screen.getByText('Mock Cart Page')).toBeInTheDocument()
        );
        expect(screen.queryByText('Mock Home Page')).not.toBeInTheDocument();
    })

    it('routes to Store when Store link clicked', async () => {
        render(<App />);

        await userEvent.click(screen.getByText('Store'));
        await waitFor(() =>
            expect(screen.getByText('Mock Store Page')).toBeInTheDocument()
        );
        expect(screen.queryByText('Mock Home Page')).not.toBeInTheDocument();
    })
});

