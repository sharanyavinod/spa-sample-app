import React from 'react';
import { AEMText } from './Text';
import { SampleContent2 } from './SampleContent';

const VirtualPage = () => (
    <main style={{margin: '10px'}}>
        <h2>SPA + AEM Virtual Components</h2>
        <SampleContent2 />

        <h4>AEM Virtual Components</h4>
        <AEMText
         pagePath='/content/wknd-spa-react/us/en/home/page-2'
         itemPath='/root/responsivegrid/paragraph_30' />
    </main>
);

export default VirtualPage;
