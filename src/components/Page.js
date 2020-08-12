import React from 'react';
import { Page, MapTo } from '@adobe/cq-react-editable-components';
import Text, { TextEditConfig } from './Text';
import Navigation from './Navigation';
import { withModel } from '@adobe/cq-react-editable-components';

const AppPage = (props) => {
    return (
    <Page
      {...props}
     />
        );
}

export default withModel(AppPage, { populatePropsOnInit: true });

MapTo("we-retail-journal/components/navigation")(Navigation);
MapTo('we-retail-journal/react/components/structure/page')(AppPage);
MapTo('we-retail-journal/components/text')(Text, TextEditConfig);
