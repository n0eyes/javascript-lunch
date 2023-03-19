import { Header } from './Header';
import { LandingMain } from './LandingMain';
import { AddRestaurantModal } from './AddRestaurantModal';
import { useModal } from '../../utils/hooks/useModal';

function App() {
  const [isAddRestaurantModalOpen, openAddRestaurantModal, closeAddRestaurantModal] =
    useModal(false);

  return `
    ${Header({ openAddRestaurantModal })}
    ${LandingMain({ isAddRestaurantModalOpen, closeAddRestaurantModal })}
    
    `;
}

export { App };
