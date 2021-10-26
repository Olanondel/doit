import Game from '@/api/game';
import Player from '@/api/player';
import Auth from '@/api/auth';

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    game: Game(context.$fire),
    auth: Auth(context.$fire),
    player: Player(context.$fire)
  };

  // Inject $api
  inject("api", factories);
};
