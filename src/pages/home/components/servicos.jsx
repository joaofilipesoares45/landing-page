import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobe, faLaptop, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import "../css/servicos.css"

export default function Servicos() {
    return (
        <div className="sect servicos" id="servicos">
            <div className="head">
                <h2>Serviços</h2>
            </div>
            <div className="list">
                <div className="item">
                    <h3><FontAwesomeIcon icon={faCode} /> Desenvolvimento Frontend</h3>
                    <p>Criação e melhoria de sistemas e aplicações visando a boa experiencia do usuario.</p>
                </div>
                <div className="item">
                    <h3><FontAwesomeIcon icon={faGlobe} /> Sites personalizados</h3>
                    <p>Deixe seu negócio decolar com um site moderno e eficiente! <br /> Conquiste seu espaço no mercado digital.</p>
                </div>
                <div className="item">
                    <h3><FontAwesomeIcon icon={faLaptop} /> Sistemas locais</h3>
                    <p>Aumente as vendas do seu negócio com um sistema de vendas completo! <br />
                        Controle total de estoque e pedidos.</p>
                </div>
                <div className="item">
                    <h3><FontAwesomeIcon icon={faPaperPlane} /> landing pages</h3>
                    <p>A solução completa para suas necessidades! <br /> landing pages personalizadas e eficientes.</p>
                </div>
            </div>
        </div>
    )
}