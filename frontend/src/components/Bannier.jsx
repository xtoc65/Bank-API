import Bannier from '../assets/Bannier.jpeg';
import '../assets/styles/bannier.css';

function BannierHeader() {
  return (
    <div class="hero">
      <img src={Bannier} alt="Bannière - plante" />
      
      <div>
        <section class="hero-content">
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
    </div>
  );
}

export default BannierHeader;