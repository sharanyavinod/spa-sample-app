import React, { useState, useEffect } from 'react';
import { ModelManager } from "@adobe/cq-spa-page-model-manager";

import { CustomModelClient } from '../server/CustomModelClient';

import Page from './Page';
import Text, {AEMText} from './Text';
import SampleContent from './SampleContent';


const AEMPage = () => {
  const [aemModel, setAemModel] = useState();
  useEffect(() => {
    const modelClient = new CustomModelClient('http://localhost:4502');
    // setTimeout(() => {
      ModelManager.initialize({
        modelClient,
        path: '/content/we-retail-journal/react/en'
      }).then((model) => {
          setAemModel(model);
      });
    // }, 5000);
  }, []);

    return aemModel? (
        <main style={{margin: '10px'}}>
            <h2>Sample AEM + SPA</h2>
            <h4> Let us pull a page from AEM</h4>
            <Page pagePath='/content/we-retail-journal/react/en/blog' />

            <SampleContent />

            <h4>Finally, a cherry picked component again from AEM</h4>
            <AEMText
              pagePath='/content/we-retail-journal/react/en/blog/aboutus/'
              componentPath='/root/responsivegrid/paragraph_2' />
            <p>Footer</p>
        </main>
    ) : <div>Loading aem page</div>;
}

export default AEMPage;
