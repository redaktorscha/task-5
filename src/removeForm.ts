//удаление формы
export const removeForm = (): void => {
    const wrapper = document.getElementById("wrapper") as HTMLDivElement;
    wrapper.remove();
};