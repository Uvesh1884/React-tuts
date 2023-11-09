import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import '@testing-library/jest-dom';

test("Should contact page lode",()=>{

    render(<Contact />);

    const heading = screen.getByText("Contact Us");
    
    expect(heading).toBeInTheDocument();
});

test("Should contact page lode",()=>{

    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Enter your name");
    
   expect(inputName).toBeInTheDocument();
});