import React from 'react';
import Text from './Text';
import {
    getPageFromModel, getComponentFromModel 
} from '../commonUtils.js';


const AEMText = ({ aemModel, cqPath }) => {
  const pageModel = getPageFromModel(cqPath.split('/jcr:content')[0], aemModel);
  const componentModel = getComponentFromModel(pageModel, cqPath);
  return <Text cqPath={cqPath} cqType={componentModel[':type']} {...componentModel} />;
};

export default AEMText;
