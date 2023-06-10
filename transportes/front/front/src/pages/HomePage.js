import React from "react";
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="images">
                <img src="/Users/alexisorzabal/Documents/utnlosmartes 2/Untitled/transportes/front/front/public/images/logo.png" alt="Avion"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Animi velit, a nesciunt nostrum repudiandae
                        quaerat ratione ut nisi fugiat debitis commodi maiores. Fugiat nulla iure accusantium ipsam rem provident dolores.</p>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Animi velit, a nesciunt nostrum repudiandae
                        quaerat ratione ut nisi fugiat debitis commodi maiores. Fugiat nulla iure accusantium ipsam rem provident dolores.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente
                            Excelente</span>
                        <span class="autor"> Juan Perez -
                            zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default HomePage;