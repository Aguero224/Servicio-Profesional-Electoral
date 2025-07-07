import React from "react";

const Casillas_Seccionales_a_Instalar_por_Municipio = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center mb-10">Casillas Seccionales a Instalar por Municipio</h2>
            <p className="text-center text-sm mb-10">
                Consulta a continuación los listados de casillas básicas, contiguas y especiales en los diferentes municipios de Baja California para el Proceso Electoral Local Extraordinario 2025, para la elección de personas jugadoras del Poder Judicial del Estado de Baja California. Da clic o escanea los códigos siguientes:
            </p>
            <p className="text-center font-semibold mb-10">
                MDCS: 2,624 <span className="mx-4">|</span> Secciones: 2,155
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <a href="https://ieebc.mx/archivos/mesasdirectivascasillas/Mexicali.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
                        <img src="MexicaliQR.png" alt="Mexicali" className="w-full" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold">Mexicali</h4>
                        </div>
                    </div>
                </a>

                <a href="https://ieebc.mx/archivos/mesasdirectivascasillas/Tijuana.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
                        <img src="TijuanaQR.png" alt="Tijuana" className="w-full" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold">Tijuana</h4>
                        </div>
                    </div>
                </a>

                <a href="https://ieebc.mx/archivos/mesasdirectivascasillas/Ensenada.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
                        <img src="EnsenadaQR.png" alt="Ensenada" className="w-full" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold">Ensenada</h4>
                        </div>
                    </div>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <a href="https://ieebc.mx/archivos/mesasdirectivascasillas/Tecate.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
                        <img src="TecateQR.png" alt="Tecate" className="w-full" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold">Tecate</h4>
                        </div>
                    </div>
                </a>

                <a href="https://ieebc.mx/archivos/mesasdirectivascasillas/Playas%20de%20Rosarito.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
                        <img src="Playas de RosaritoQR.png" alt="Playas de Rosarito" className="w-full" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold">Playas de Rosarito</h4>
                        </div>
                    </div>
                </a>

                <a href="https://ieebc.mx/archivos/mesasdirectivascasillas/San%20Quinti%CC%81n.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
                        <img src="San QuintínQR.png" alt="San Quintín" className="w-full" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold">San Quintín</h4>
                        </div>
                    </div>
                </a>

                <a href="https://ieebc.mx/archivos/mesasdirectivascasillas/San%20Felipe.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
                        <img src="San FelipeQR.png" alt="San Felipe" className="w-full" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold">San Felipe</h4>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Casillas_Seccionales_a_Instalar_por_Municipio;
