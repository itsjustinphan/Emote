import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import NavBar from './NavBar';

describe('App Component', () => {
    test('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });
});

describe('NavBar Component', () => {
    test('navbar is correct', () => {
        render(<NavBar />);
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Quiz")).toBeInTheDocument();
        expect(screen.getByText("Resources")).toBeInTheDocument();
    });
});