import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import { StrictMode } from "react";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import AlertButton2 from "../button/AlertButton2";
import MyButton from "../button/MyButton";
import Artikel from "../Componen/Artikel";
import HomePage from "../pages";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <Container> */}
        {/* <HelloWorld /> */}
        {/* <TodoList /> */}
        {/* <Table /> */}

        {/* <AlertButton text="TEST ALLERT BUTTON" />
            <AlertButton2 text="TEST ALLERT BUTTON" message="INI MASSEGE ALLERT" />

            <MyButton text="INI TEST ONSMASH" onSmash={() => alert("YOU SMASH ME")} /> */}

        {/* <Artikel name="Audyari" titles={["ASEP", "BUDI", "CANDRA"]} />
            <br />
            <Artikel name="WIYONO" titles={["DIKI", "EALAH", "FANTA"]} /> */}

        <HomePage />

        {/* </Container> */}
    </StrictMode>
)