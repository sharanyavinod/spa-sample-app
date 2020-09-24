import { Page, MapTo, withModel } from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from './Text';
import Navigation from './Navigation';


export default withModel(Page, { injectPropsOnInit: true });

MapTo("we-retail-journal/components/navigation")(Navigation);
MapTo('we-retail-journal/components/text')(Text, TextEditConfig);
