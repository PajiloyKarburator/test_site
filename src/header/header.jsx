import React from "react";
import { Link } from "react-router-dom";
import Slider from 'D:/project_testpaje/animals/src/Slider/Slider';

export default function Header() {
    return (
        <>

            <header>

            <div class="logo">

                <img src="logo.png" onclick="gotoSearch();" width="60" height="60px" />

            </div>
            <div class="menu">
                <ul>
                    <li>
                        <Link to="/Search" class="text">Поиск</Link>
                    </li>
                    <li>
                        <Link to="/Register" class="text">Регистрация</Link>
                    </li>
                    <li>
                        <Link to="Cabinet" class="text">Личный кабинет</Link>
                    </li>
                    <li>
                        <Link to="Add" class="text">Корзина</Link>
                    </li>
                    <li>
                        <Link to="Feedback" class="text">Отзывы</Link>
                    </li>
                </ul>
            </div>
        </header><Slider /></>
    );
}