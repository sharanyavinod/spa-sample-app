import React from 'react';
import { AEMText } from './Text';
import ResponsiveGrid from './ResponsiveGrid';
import { SampleContent1, SampleContent2 } from './SampleContent';
import Page from './Page';

const AEMLeaf = () => (
    <main style={{margin: '10px'}}>
        <h2 className="test">SPA + AEM Leaf Component</h2>
        <SampleContent1 />

        <h4>AEM Leaf Component</h4>
        <ResponsiveGrid
          pagePath='/content/wknd-spa-react/us/en/home'
          itemPath='root/responsivegrid' />
        <SampleContent2 />
        <h4>AEM Leaf Component</h4>
        <Page pagePath='/content/wknd-spa-react/us/en/home' />
    </main>
);

export default AEMLeaf;
