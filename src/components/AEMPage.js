import React from 'react';
import Page from './Page';
import { SampleContent2 } from './SampleContent';

const AEMPage = () => (
    <main style={{margin: '10px'}}>
        <h2>SPA + AEM Leaf Component</h2>
        <SampleContent2 />

        <h4>AEM Page</h4>
        <Page
          pagePath="/content/wknd-spa-react/us/en/home" />
    </main>
);

export default AEMPage;
