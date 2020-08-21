import React, { useState, useEffect } from 'react';
import { ModelManager } from "@adobe/cq-spa-page-model-manager";

import { CustomModelClient } from '../server/CustomModelClient';

import SampleContent from './SampleContent';


const AEMPage = () => {
  const [aemModel, setAemModel] = useState();
  useEffect(() => {
    const modelClient = new CustomModelClient('http://localhost:4502');
      ModelManager.initialize({
        modelClient,
        path: '/content/we-retail-journal/react/en'
      }).then((model) => {
          setAemModel(model);
      });
  }, []);

    return aemModel? (
        <main style={{margin: '10px'}}>
            <SampleContent />
        </main>
    ) : <div>Loading aem page</div>;
}

export default AEMPage;
