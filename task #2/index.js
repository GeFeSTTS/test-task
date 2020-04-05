function openModalWindow() {
    const rootContainer = document.getElementById('root');
    const modalBlockContainer = document.createElement('div');
    const modalContentContainer = document.createElement('div');
    const closeButton = document.createElement('span');
    const headerBlock = document.createElement('h1');
    const contentBlock = document.createElement('p');

    modalBlockContainer.id = 'modal-window';
    modalContentContainer.className = 'modal-content';
    closeButton.className = 'close';
    closeButton.innerText = '×';
    headerBlock.innerText = "I'm header";
    contentBlock.innerText = "I'm modal window";

    rootContainer.appendChild(modalBlockContainer);
    modalBlockContainer.appendChild(modalContentContainer);
    modalContentContainer.appendChild(closeButton);
    modalContentContainer.appendChild(headerBlock);
    modalContentContainer.appendChild(contentBlock);

    const closeModalWindow = () => {
        modalBlockContainer.remove();
    }

    closeButton.addEventListener('click', closeModalWindow);

}

