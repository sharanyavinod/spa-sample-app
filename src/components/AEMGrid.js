import React from 'react';
import { AEMText } from './Text';
import ResponsiveGrid from './ResponsiveGrid';
import { SampleContent2 } from './SampleContent';

const AEMGrid = () => (
    <main style={{margin: '10px'}}>
        <h2>SPA + AEM Grid Component</h2>
        <SampleContent2 />

        <h4>AEM Grid</h4>
        <ResponsiveGrid
            pagePath='/content/wknd-spa-react/us/en/home/page-2'
            itemPath='root/responsivegrid'/>
    </main>
);

export default AEMGrid;
