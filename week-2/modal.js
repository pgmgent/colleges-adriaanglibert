const $modalButtons = document.querySelectorAll("[data-dialog-target]");

$modalButtons.forEach($modalButton => {
    const dialogName = $modalButton.getAttribute('data-dialog-target');

    $modalButton.addEventListener('click', () => {
        const $dialog = document.querySelector(`dialog[data-dialog-name='${dialogName}']`);

        if ($dialog) {
            $dialog.showModal();
        }
    });
});