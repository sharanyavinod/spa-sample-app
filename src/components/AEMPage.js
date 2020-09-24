import React, { useState } from 'react';
import Page from './Page';
import { AEMText } from './Text';
import SampleContent from './SampleContent';

const AEMPage = () => {
    const [show, setShow] = useState(false);

    return (
        <main style={{margin: '10px'}}>
            <h2>Sample AEM + SPA</h2>
            <h4> Let us pull a page from AEM</h4>
            <Page pagePath='/content/we-retail-journal/react/en/blog' />

            <SampleContent />

            <h4>Finally, a cherry picked component again from AEM</h4>
            <AEMText
              pagePath='/content/we-retail-journal/react/en/blog'
              itemPath='/root/responsivegrid/paragraph_1' />
            <AEMText
              pagePath='/content/we-retail-journal/react/en/blog/aboutus'
              itemPath='/root/responsivegrid/paragraph_25' />
            <button onClick={() => setShow(true)}>Show</button>
            { show &&
              <AEMText
                pagePath='/content/we-retail-journal/react/en/blog'
                itemPath='/root/responsivegrid/paragraph_1' />
            }
            <p>Footer</p>
        </main>
    );
}

export default AEMPage;
