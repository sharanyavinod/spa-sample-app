import { Page, MapTo, withMappable } from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from './Text';
import Navigation from './Navigation';
import { ResponsiveGrid } from '@adobe/aem-react-editable-components';

export default withMappable(Page);

MapTo('wknd-spa-react/components/text')(Text, TextEditConfig);
MapTo('wknd-spa-react/components/header')(Navigation);
MapTo('wcm/foundation/components/responsivegrid')(ResponsiveGrid);
