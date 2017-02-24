import Culture from './roles/Culture';
import CultureMinistry from './roles/CultureMinistry';
import Diplomat from './roles/Diplomat';
import Regime from './roles/Regime';
import Representative from './roles/Representative';
import Satellite from './roles/Satellite';
import Stereotype from './roles/Stereotype';
import Undertaker from './roles/Undertaker';

var politburo = {
    Culture: Culture,
    Component: Culture,
    CultureMinistry: CultureMinistry,
    ComponentManager: CultureMinistry,
    Diplomat: Diplomat,
    EventManager: Diplomat,
    Regime: Regime,
    Service: Regime,
    Representative: Representative,
    ViewModel: Representative,
    Satellite: Satellite,
    PersistenceStrategy: Satellite,
    Stereotype: Stereotype,
    Entity: Stereotype,
    Undertaker: Undertaker,
    Repository: Undertaker
};
