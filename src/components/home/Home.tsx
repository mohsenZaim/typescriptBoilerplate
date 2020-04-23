import * as React from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "../common/elements/Loader";
import { appReducer } from "../../reducers/reducer";
import { initialState } from "../../reducers/initialState";
import { HomeContext } from "../context";
import { TextBox } from "../common/elements/TextBox";
import logo from "../../assets/images/ReactLogo.png";

const Home: React.FunctionComponent = (): React.ReactElement<void> => {
    const [state, dispatch] = React.useReducer(appReducer, initialState);
    const [text, setText] = React.useState<string>("");
    const hiddenElement = React.useRef(null);
    const location = useLocation();

    // scroll to top whenever route changes
    React.useEffect(() => {
        hiddenElement.current.scrollIntoView();
    }, [location.pathname]);

    return (
        <>
            <HomeContext.Provider value={{ state, dispatch }}>
                <Loader toggle={state.httpCallsInProgress !== 0} />
                {/* we will scroll to this hidden element each time route changes as it is a SPA  */}
                <div ref={hiddenElement} />

                <div className="container home">
                    <img src={logo} width="100" height="100" />
                    <h1>HOME with sample textbox component</h1>
                    <TextBox
                        name="text"
                        value={text}
                        placeholder="placeholder"
                        onChange={(e) => { setText(e.target.value) }}
                    />
                </div>
            </HomeContext.Provider>
        </>
    );
};

export default Home;
