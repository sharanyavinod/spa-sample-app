export const getPageFromModel = (cqPath, aemModel) => {
    const children = aemModel[':children'];
    return children[cqPath];
};

export const getComponentFromModel = (aemModel, cqPath) => {
  const pageItems = aemModel[':items'];
  const componentPath = cqPath.split('jcr:content/')[1];
  let componentModel = pageItems;
  if (componentPath) {
    const depth = componentPath.split('/').length;
    const keys = componentPath.split('/');
    for(let i = 0; i < depth; i++) {
			componentModel = componentModel[keys[i]];
      if(componentModel[':items']) {
      	componentModel = componentModel[':items'];
      }
    }
  }
 	return componentModel;
};