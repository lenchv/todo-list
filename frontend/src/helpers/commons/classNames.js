export const classNames = (classes) => {
    return Object.keys(classes).filter(className => classes[className]).join(' ');
};

export default classNames;
