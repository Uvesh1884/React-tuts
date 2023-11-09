import { render } from "@testing-library/react"
import { Header } from "../components/Header"
import { Provider } from "react-redux";
import appStore from "../components/utils/appStore"
import { BrowserRouter } from "react-router-dom";


test("should load Header component",()=>{

    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

});