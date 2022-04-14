import { render, screen } from "@testing-library/react";
import App from "App";
import CONSTANTS from "lib/CONSTANTS";



describe("testing app", () => {


    describe("when page is initialized", () => {

  
      it("array should be generated", () => {
        render(<App />);
        const barElements  = screen.getAllByTestId('array-bar')
        expect(barElements).toHaveLength(CONSTANTS.ARR_LEN)
      });
  
      
    });
  });