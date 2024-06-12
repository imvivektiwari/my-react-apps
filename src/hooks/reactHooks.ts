const isChanged = (prevDeps:any[], currentDeps:any[]) => {
    return JSON.stringify(prevDeps) !== JSON.stringify(currentDeps)
};

export const useCustomState = (initialValue:any) => {
    let value = initialValue;
    function setValue(newValue:any) {
        value = newValue;
    }
    return [value, setValue];
};

export const useCustomEffect = (() => {
    let prevDependency:any[] = [];
    let firstRender = false;
    let cleanup:any = null;

    return (effect:any, dependency?:any[]) => {
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
