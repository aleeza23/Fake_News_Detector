
const Button = ({ children, className }) => {
    const classes = `${className} px-4 py-1 mb-2`

    return <>
        <button className={classes} style={{ backgroundColor: '#09092c', color: '#fff', outline: 'none', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{children}</button>

    </>;
};

export default Button;
