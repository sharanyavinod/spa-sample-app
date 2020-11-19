import React from 'react';
import { AEMText } from './Text';
import { SampleContent1, SampleContent2 } from './SampleContent';

const AEMLeaf = () => (
    <main style={{margin: '10px'}}>
        <h2>SPA + AEM Leaf Component</h2>
        <SampleContent1 />

        <h4>AEM Leaf Component</h4>
        <AEMText
          pagePath='/content/we-retail-journal/react/en/blog'
          itemPath='/root/responsivegrid/article_header' />
          <AEMText
            pagePath='/content/we-retail-journal/react/en/blog/aboutus'
            itemPath='/root/responsivegrid/paragraph_2' />
        <SampleContent2 />
        <h4>AEM Leaf Component</h4>
        <AEMText
          pagePath='/content/we-retail-journal/react/en/blog'
          itemPath='/root/responsivegrid/paragraph_1' />

    </main>
);

export default AEMLeaf;
