//очистка формы
export const clearForm = (): void => {
    const form: HTMLFormElement = document.forms[0];
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.input, input.error");    
    for (let i: number = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        inputs[i].classList.remove("error");
    }
    let hiddenDivs: NodeListOf<HTMLInputElement> = document.querySelectorAll("er_group");
    for (let k: number = 0; k < hiddenDivs.length; k++) {
        hiddenDivs[k].style.visibility = "hidden";
    }
};