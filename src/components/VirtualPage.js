import React from 'react';
import { AEMText } from './Text';
import { SampleContent2 } from './SampleContent';

const VirtualPage = () => (
    <main style={{margin: '10px'}}>
        <h2>SPA + AEM Virtual Components</h2>
        <SampleContent2 />

        <h4>AEM Virtual Components</h4>
        <AEMText
         pagePath='/content/we-retail-journal/react/en/blog/aboutus'
         itemPath='/root/responsivegrid/paragraph_25' />
        <AEMText
         pagePath='/content/we-retail-journal/react/en/blog/aboutus'
         itemPath='/root/responsivegrid/paragraph_28' />
         <AEMText
          pagePath='/content/we-retail-journal/react/en/blog'
          itemPath='/root/responsivegrid/paragraph_28' />
    </main>
);

export default VirtualPage;
