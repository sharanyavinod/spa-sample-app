import React from 'react';
import classes from '../styles/common.css';
import { WrapAsAEMEditableComponent } from '@adobe/aem-react-editable-components';

export const TextEditConfig = {
    emptyLabel: 'Text',
    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1;
    },
    aemResourceType: "we-retail-journal/components/text"
};

const Text = ({ cqPath, richText, text }) => {
    const richTextContent = () => (
        <div className={classes.aem_text} id={cqPath.substr(cqPath.lastIndexOf('/') + 1)} data-rte-editelement dangerouslySetInnerHTML={{__html: text}}/>
    );
    return richText ? richTextContent() : (<div className={classes.aem_text}>{text}</div>);
};

export default Text;

export const AEMText = WrapAsAEMEditableComponent(Text, TextEditConfig);
