//при нажатии на клавишу, когда поле формы заполняется, подсветка и надпись пропадают
export const refresh = (): void => {
    const targetInp = document.activeElement;
    const targetEl: string = (document.activeElement as HTMLFormElement).name;
    const hiddenDiv = document.getElementById(targetEl) as HTMLDivElement;
    targetInp.classList.remove("error");
    hiddenDiv.style.visibility = "hidden";
  };
