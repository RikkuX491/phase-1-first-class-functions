const receivesAFunction = (cb) => cb();
const returnsANamedFunction = () => {
    const namedFunction = () => {
        return "This is a named function.";
    };
    return namedFunction;
};
const returnsAnAnonymousFunction = () => () => "This is an anonymous function.";