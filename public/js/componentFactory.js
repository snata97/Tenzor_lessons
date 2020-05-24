class ComponentFactory {
    create(component, options) {
        return new component(options || {});
    }
}

export{ComponentFactory};