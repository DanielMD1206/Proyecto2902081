import { faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css';
import Header from '../components/HeaderD';


const Couriers = () => {
  return (
    <div>
      <Header />
      <div className="couriers-container">
        {['Mauricio', 'Luis', 'Yesid', 'Jose'].map((name, index) => (
          <div key={index} className="courier-card">
            <div className="icon-container">
              <FontAwesomeIcon className='icono' icon={faUser} />
            </div>
            <div className="courier-info">
              <span className="courier-name">{name}</span>
              <span className="courier-description">Description for {name}</span>
            </div>
            <div className="actions">
              <a href="/updatedomi" className="edit-link">
                <span>Edit</span>
                <FontAwesomeIcon icon={faEdit} />
              </a>
              <a href="/deletedom" className="delete-link">
                <span>Delete</span>
                <FontAwesomeIcon icon={faTrash} />
              </a>
            </div>
          </div>
        ))}
        <div className="intro-section">
          <h1 class="d77">Nuestros domiciliarios</h1>
          <span class="d78">Repartimos pedidos con seguridad y cariño nuestra prioridad es
            satisfacer tus necesidades y brindar la mejor experiencia posible</span>
         </div>
      </div>
    </div>
  );
};

export default Couriers;
