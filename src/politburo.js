
import Undertaker from './roles/Undertaker';
import Stereotype from './roles/Stereotype';
import Satellite from './roles/Satellite';
import Representative from './roles/Representative';
import Regime from './roles/Regime';
import Diplomat from './roles/Diplomat';
import CultureMinistry from './roles/CultureMinistry';
import Culture from './roles/Culture';
let politburo = this['politburo'] = {
    /**
     * @export
     */
    Culture: Culture,
    Component: Culture,
    CultureMinistry: CultureMinistry,
    ComponentManager: CultureMinistry,
    Diplomat: Diplomat,
    EventManager: Diplomat,
    // Regime,
    // Service: Regime,
    // Representative,
    // ViewModel: Representative,
    // Satellite,
    // PersistenceStrategy: Satellite,
    // Stereotype,
    // Entity: Stereotype,
    // Undertaker,
    // Repository: Undertaker
};
