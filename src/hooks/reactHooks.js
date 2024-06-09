const isChanged = (prevDeps, currentDeps) => {
    return JSON.stringify(prevDeps) !== JSON.stringify(currentDeps)
};

export const useCustomState = (initialValue) => {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
};


export const useCustomEffect = (() => {
    let prevDependency = [];
    let firstRender = false;
    let cleanup = null;
    return (effect, dependency) => {
        if(!firstRender){
            firstRender=true;
            cleanup = effect();
        }
        else if(!dependency){
            cleanup = effect();
        }
        else if (isChanged(dependency, prevDependency)) {
            prevDependency = dependency;
            cleanup = effect();
        }
        

        if(cleanup){
            cleanup();
        }
    };
})()
