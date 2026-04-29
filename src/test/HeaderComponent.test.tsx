import {render , screen} from '@testing-library/react';
import HeaderComponent from '../components/HeaderComponent';

test('renders Header component', () => {
    render(<HeaderComponent />);
    const headingElement = screen.getByText(/App Title/i);
    expect(headingElement).toBeInTheDocument();
});