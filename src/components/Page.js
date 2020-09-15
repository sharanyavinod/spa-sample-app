import React from 'react';
import { Page, MapTo, withModel } from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from './Text';
import Navigation from './Navigation';

const AppPage = (props) => {
    return (
    <Page
      {...props}
     />
        );
}

export default withModel(AppPage, { injectPropsOnInit: true });

MapTo("we-retail-journal/components/navigation")(Navigation);
MapTo('we-retail-journal/react/components/structure/page')(AppPage);
MapTo('we-retail-journal/components/text')(Text, TextEditConfig);
