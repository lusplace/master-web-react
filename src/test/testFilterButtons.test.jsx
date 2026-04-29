import { render, screen } from '@testing-library/react'
import FilterButtons from "../components/FilterButtons";

test('renders FilterButtons component', () => {
    render(<FilterButtons />);
    const headingElement = screen.getByText(/App Title/i);
    expect(headingElement).toBeInTheDocument();
});