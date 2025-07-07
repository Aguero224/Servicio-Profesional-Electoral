import React, { useState } from "react";

const OchoContraViolencia = () => {
  const [formData, setFormData] = useState({
    nombreInformante: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    correoElectronico: "",
    celular: "",
    telefonoFijo: "",
    nombreCandidato: "",
    cargoEleccion: "",
    distrito: "",
    datosAdicionales: "",
    causa: "",
    fechaHechos: "",
    lugarHechos: "",
    descripcionHechos: "",
    fechaSentencia: "",
    juzgado: "",
    numeroExpediente: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí se podría enviar el formulario a un backend
    alert("Formulario enviado con éxito");
  };

  return (
    <div className="p-4">     

     
      <div className=" bg-gray-50 p-6 rounded-md shadow-sm">
        <div className="flex justify-between items-center mb-4">
             {/* Formulario para reportar casos 
          <h3 className="text-lg font-semibold">Descargar formato</h3>
          
          <h3 className="text-lg font-semibold">Listado de candidaturas registradas</h3>

          */}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Información general */}
          <div>
            <h4 className="text-xl font-bold mb-4">Información general</h4>
            <div className="mb-2">
              <label className="block text-sm font-medium">
                <span className="text-red-500">*</span> Fecha de captura:
              </label>
              <input 
                type="text" 
                disabled 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100 px-3 py-2" 
                value="03/05/2025" 
              />
            </div>
          </div>

          {/* Datos generales de la persona informante u organización */}
          <div>
            <h4 className="text-xl font-bold mb-4">Datos generales de la persona informante u organización</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  <span className="text-red-500">*</span> Nombre, seudónimo o denominación de organización:
                </label>
                <input 
                  type="text" 
                  name="nombreInformante" 
                  value={formData.nombreInformante}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Apellido paterno:</label>
                <input 
                  type="text" 
                  name="apellidoPaterno" 
                  value={formData.apellidoPaterno}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Apellido materno:</label>
                <input 
                  type="text" 
                  name="apellidoMaterno" 
                  value={formData.apellidoMaterno}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">
                  <span className="text-red-500">*</span> Correo electrónico:
                </label>
                <input 
                  type="email" 
                  name="correoElectronico" 
                  value={formData.correoElectronico}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Celular:</label>
                <input 
                  type="tel" 
                  name="celular" 
                  value={formData.celular}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Teléfono fijo:</label>
                <input 
                  type="tel" 
                  name="telefonoFijo" 
                  value={formData.telefonoFijo}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
                />
              </div>
            </div>
          </div>

          {/* Información de la persona candidata */}
          <div>
            <h4 className="text-xl font-bold mb-4">Información de la persona candidata</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  <span className="text-red-500">*</span> Nombre completo de la persona candidata:
                </label>
                <input 
                  type="text" 
                  name="nombreCandidato" 
                  value={formData.nombreCandidato}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  <span className="text-red-500">*</span> Nombre del cargo de elección popular:
                </label>
                <select 
                  name="cargoEleccion" 
                  value={formData.cargoEleccion}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white"
                >
                  <option value="">Selecciona cargo...</option>
                  <option value="diputacion">Diputación</option>
                  <option value="gubernatura">Gubernatura</option>
                  <option value="presidenciaMunicipal">Presidencia Municipal</option>
                  <option value="juezPoder">Juez(a) del Poder Judicial</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">Distrito o circunscripción:</label>
                <input 
                  type="text" 
                  name="distrito" 
                  value={formData.distrito}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Datos adicionales:</label>
                <textarea 
                  name="datosAdicionales" 
                  value={formData.datosAdicionales}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white h-24" 
                  maxLength="500"
                ></textarea>
                <div className="text-right text-sm text-gray-500">500 caracteres restantes</div>
              </div>
            </div>
          </div>

          {/* Hechos por los que se emitió sentencia */}
          <div>
            <h4 className="text-xl font-bold mb-4">Hechos por los que se emitió sentencia</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  <span className="text-red-500">*</span> Indique la causa o delito:
                </label>
                <select 
                  name="causa" 
                  value={formData.causa}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white"
                >
                  <option value="">Selecciona opción...</option>
                  <option value="violenciaFamiliar">Violencia familiar</option>
                  <option value="violenciaSexual">Violencia sexual</option>
                  <option value="violenciaGenero">Violencia de género</option>
                  <option value="deudorAlimentos">Deudor de pensión alimenticia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Fecha de los hechos:</label>
                <input 
                  type="date" 
                  name="fechaHechos" 
                  value={formData.fechaHechos}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  <span className="text-red-500">*</span> Lugar donde ocurrieron los hechos:
                </label>
                <input 
                  type="text" 
                  name="lugarHechos" 
                  value={formData.lugarHechos}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium">
                <span className="text-red-500">*</span> Describa brevemente lo sucedido por lo que se emitió sentencia en contra de la persona candidata (modo, tiempo, lugar):
              </label>
              <textarea 
                name="descripcionHechos" 
                value={formData.descripcionHechos}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white h-24" 
                maxLength="500"
              ></textarea>
              <div className="text-right text-sm text-gray-500">500 caracteres restantes</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">Fecha en la que se emitió la sentencia:</label>
                <input 
                  type="date" 
                  name="fechaSentencia" 
                  value={formData.fechaSentencia}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Juzgado donde se emitió la sentencia:</label>
                <input 
                  type="text" 
                  name="juzgado" 
                  value={formData.juzgado}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium">Número de expediente:</label>
              <input 
                type="text" 
                name="numeroExpediente" 
                value={formData.numeroExpediente}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white" 
              />
            </div>
          </div>


          <div className="mt-4 text-sm text-gray-700">
            {/* Información adicional 
            <p>Si es necesario adjuntar documentos o archivos puedes enviarlos un correo a: <a href="mailto:fideicontraviolencia@ine.mx" className="text-blue-600 hover:underline">fideicontraviolencia@ine.mx</a></p>
                */}
            </div>

          <div className="mt-4 text-sm text-gray-700">
           {/* Aviso de privacidad 
            <p>
              El Instituto Nacional Electoral (INE) es el responsable del tratamiento de los datos personales que nos proporciones, los cuales estarán protegidos de conformidad con la Ley 
              General de Protección de Datos Personales en Posesión de Sujetos Obligados, las disposiciones para contar con un registro nacional de personas sancionadas en materia de violencia 
              política contra las mujeres en razón de género y demás normatividad que resulte aplicable. Las personas titulares podrán ejercer sus derechos ARCO para acceder, rectificar, 
              cancelar u oponerse al tratamiento de sus datos personales, así como revocar su consentimiento, a través de la Unidad Técnica de Transparencia del INE, ubicada en Viaducto Tlalpan 
              número100, edificio "C", primer piso, Arenal Tepepan, código postal 14610, Ciudad de México, de 9:00 a 18:00 horas, de lunes a viernes en días hábiles, o bien a través de la 
              Plataforma Nacional de Transparencia en <a href="https://www.plataformadetransparencia.org.mx" className="text-blue-600 hover:underline">https://www.plataformadetransparencia.org.mx</a>
            </p>
            <p className="mt-2">
              Para consultar el aviso de privacidad integral y simplificado ingresa a <a href="https://www.ine.mx/transparencia/listado-bases-datos-personales" className="text-blue-600 hover:underline">https://www.ine.mx/transparencia/listado-bases-datos-personales</a>, en el apartado correspondiente a 
              la DEPPP.
            </p>
            */}
          </div>

          <div className="flex items-center mt-4">
            <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
          </div>

          <div className="flex justify-end mt-6">
            <button 
              type="submit" 
              className="bg-[#FF6A13] hover:bg-[#500778] text-white py-2 px-6 rounded-md transition-colors duration-200"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OchoContraViolencia;