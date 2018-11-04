//очистка формы
export const clearForm = (inputs: NodeListOf<HTMLInputElement>, errorMsgDivs: HTMLCollectionOf<HTMLDivElement>): void => {
    //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.input, input.error");    
    for (let i: number = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        inputs[i].classList.remove("error");
    }
    //let errorMsgDivs = document.getElementsByClassName("er_group") as HTMLCollectionOf<HTMLDivElement>;
    for (let k: number = 0; k < errorMsgDivs.length; k++) {
        errorMsgDivs[k].style.visibility = "hidden";
    }
};