import { render, screen } from "@testing-library/react";
import { LanguageContext } from '../TaskContext';
import TaskList from "../components/TaskList";

test('Should render \'hola\' message', () => {
    render(<LanguageContext.Provider value={{language: 'es', changeLanguage: () =>  {}}}>
        <Text/>
        </LanguageContext.Provider>
        )
    expect(screen.getByText('hola')).toBeInTheDocument();
});

test('Should render \'hello\' message', () => {
    render(<LanguageContext.Provider value={{language: 'en', changeLanguage: () =>  {}}}>
            <Text/>
        </LanguageContext.Provider>
    )
    expect(screen.getByText('hola')).toBeInTheDocument();
});