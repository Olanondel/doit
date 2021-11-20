import Game from '@/api/game';
import Player from '@/api/player';
import Auth from '@/api/auth';
import Team from '@/api/team';
import General from '@/api/general';
import News from '@/api/news';
import Tournament from '@/api/tournament';
import League from '@/api/league';

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    game: Game(context.$fire),
    auth: Auth(context.$fire),
    player: Player(context.$fire),
    team: Team(context.$fire),
    general: General(context.$fire),
    news: News(context.$fire),
    tournament: Tournament(context.$fire),
    league: League(context.$fire),
  };

  // Inject $api
  inject("api", factories);
};
