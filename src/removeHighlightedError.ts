//при нажатии на клавишу, когда поле формы заполняется, подсветка и надпись пропадают
export const removeHighlightedError = (errorMsgDiv: HTMLDivElement, targetInp: HTMLInputElement): void => { 
    //const targetInp = document.activeElement as HTMLInputElement;
    //const targetElName: string = (document.activeElement as HTMLFormElement).name;
    //const errorMsgDiv = document.getElementById(targetElName) as HTMLDivElement;
    targetInp.classList.remove("error");
    errorMsgDiv.style.visibility = "hidden";
  };
