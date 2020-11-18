import { Page, MapTo, withMappable } from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from './Text';
import Navigation from './Navigation';


export default withMappable(Page);

MapTo("we-retail-journal/components/navigation")(Navigation);
MapTo('we-retail-journal/components/text')(Text, TextEditConfig);
