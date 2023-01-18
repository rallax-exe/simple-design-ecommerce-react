import { Link } from 'react-router-dom';

export const MainPage = () => {
    return (
        <>

            {/* Comentarios, carrito, producto, son secciones */}
            {/* Seccion para productos*/}
            <div className="hero"></div>
            <section className="contenedor categorias">
                <h2>Categorias de <span> Productos </span></h2>
                <div className="listado-categorias">
                    <div className="categoria">
                        <img src="src/img/categoria1.jpg" alt="Imagen Categoria" />
                        <Link to="/">
                            Oficina
                        </Link>
                    </div>

                    <div className="categoria">
                        <img src="src/img/categoria2.jpg" alt="Imagen Categoria" />
                        <Link to="/">
                            Hogar
                        </Link>
                    </div>

                    <div className="categoria">
                        <img src="src/img/categoria3.jpg" alt="Imagen Categoria" />
                        <Link to="/">
                            Cocina
                        </Link>
                    </div>
                </div>

            </section>

            <section className="sobre-nosotros">
                <div className="contenedor sobre-nosotros-grid">
                    <div className="texto-nosotros">
                        <h2>Sobre Nosotros</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut in culpa corrupti recusandae, ipsum consequuntur accusantium, ipsam iusto architecto ea. Quod sapiente et atque eaque, dolore nam sunt fugit.</p>
                    </div>
                </div>
            </section>

            {/* Solo existe un main por pagina y tiene lo mas importante para indexear */}

            <main>
                {/* Seccion para nuestros productos */}
                <h2>Nuestros Productos</h2>

                {/*Contiene productos*/}
                <div>

                    {/* Inicia un producto */}
                    <div>

                        <img src="src/img/producto1.jpg" alt="Imagen Producto" />

                        <div>
                            <h3>Producto 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            <p>$1,000,000.00</p>
                            <Link to="/">
                                Agregar al carrito
                            </Link>
                        </div>
                    </div>
                    {/*Termina un producto*/}

                    {/* Inicia un producto */}
                    <div>

                        <img src="src/img/producto2.jpg" alt="Imagen Producto" />

                        <div>
                            <h3>Producto 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            <p>$1,000,000.00</p>
                            <Link to="/">
                                Agregar al carrito
                            </Link>
                        </div>
                    </div>
                    {/*Termina un producto*/}

                    {/* Inicia un producto */}
                    <div>

                        <img src="src/img/producto3.jpg" alt="Imagen Producto" />

                        <div>
                            <h3>Producto 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            <p>$1,000,000.00</p>
                            <Link to="/">
                                Agregar al carrito
                            </Link>
                        </div>
                    </div>
                    {/*Termina un producto*/}

                    {/* Inicia un producto */}
                    <div>

                        <img src="src/img/producto4.jpg" alt="Imagen Producto" />

                        <div>
                            <h3>Producto 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            <p>$1,000,000.00</p>
                            <Link to="/">
                                Agregar al carrito
                            </Link>
                        </div>
                    </div>
                    {/*Termina un producto*/}

                    {/* Inicia un producto */}
                    <div>

                        <img src="src/img/producto5.jpg" alt="Imagen Producto" />

                        <div>
                            <h3>Producto 5</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            <p>$1,000,000.00</p>
                            <Link to="/">
                                Agregar al carrito
                            </Link>
                        </div>
                    </div>
                    {/*Termina un producto*/}

                    {/* Inicia un producto */}
                    <div>

                        <img src="src/img/producto6.jpg" alt="Imagen Producto" />

                        <div>
                            <h3>Producto 6</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            <p>$1,000,000.00</p>
                            <Link to="/">
                                Agregar al carrito
                            </Link>
                        </div>
                    </div>
                    {/*Termina un producto*/}


                </div>
                {/*Fin del contenedor de productos*/}

            </main>

        </>
    )
}
