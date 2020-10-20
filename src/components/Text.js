import React from 'react';
import classes from '../styles/common.css';
import {withMappable} from '@adobe/aem-react-editable-components';

export const TextEditConfig = {
    emptyLabel: 'Text',
    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1;
    },
    resourceType: "we-retail-journal/components/text"
};

const Text = ({ cqPath, richText, text }) => {
    const richTextContent = () => (
        <div className={classes.aem_text} id={cqPath.substr(cqPath.lastIndexOf('/') + 1)} data-rte-editelement dangerouslySetInnerHTML={{__html: text}}/>
    );
    return richText ? richTextContent() : (<div className={classes.aem_text}>{text}</div>);
};

export default Text;

const { injectPropsOnInit = true, forceReload = false } = {};

export const AEMText = withMappable(Text, TextEditConfig, {injectPropsOnInit, forceReload});
