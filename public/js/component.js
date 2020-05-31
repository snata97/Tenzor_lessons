class Component {
    constructor(options) {
        this.options = options;
		this.state = {};
		this.container = undefined;

        this.handlers = {};
    }

    mount(container, position) {   
        this.beforeMount();
        const newComponent = document.createElement('div');
        newComponent.innerHTML = this.toString();
		this.container = newComponent.firstElementChild;
        container.insertAdjacentElement(position || 'beforeend', newComponent.firstElementChild);
        newComponent.remove();
        this.afterMount()
    }

    update() { }

    unmount() {
        this.beforeUnmount();
        this.removeContainer();
        this.afterUnmount();
    }

    beforeMount() {}

    afterMount() {}

    beforeUnmount() {}

    afterUnmount() {}

    getContainer() {
        if (this.container === undefined) {
            this.container = document.getElementById(this.id);
        }
        return this.container;
    }
	
	removeContainer() {
		if (this.container) {
			this.container.remove();
			this.container = undefined;
        }
    }

    render() {
        return `<div></div>`;
    }

    toString() {
        return this.render(this.options, this.state);
    }
	
}

export{Component};