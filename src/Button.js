import classnames from 'classnames';

function Button({ 
    children, 
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    const classes = classnames('px-8 py-2 border-2', {
        'bg-blue-500 border-blue-500 text-white': primary,
        'bg-gray-900 border-gray-900 text-white': secondary,
        'bg-green-500 border-green-500 text-white': success,
        'bg-yellow-400 border-yellow-400 text-white': warning,
        'bg-red-500 border-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-transparent': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
    });

    return (
        <button className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary) 
            + Number(!!secondary)
            + Number(!!warning)
            + Number(!!success)
            + Number(!!danger);

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warnig, danger can be true');
        }
    },
};

export default Button;