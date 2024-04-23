const $modalButtons = document.querySelectorAll("[data-dialog-target]");

$modalButtons.forEach($modalButton => {
    const dialogName = $modalButton.getAttribute('data-dialog-target');

    $modalButton.addEventListener('click', () => {
        const $dialog = document.querySelector(`dialog[data-dialog-name='${dialogName}']`);

        if ($dialog) {
            $dialog.showModal();

            const $closeButtons = $dialog.querySelectorAll("[data-function='close']");

            $closeButtons.forEach($closeButton => {
                $closeButton.addEventListener('click', () => {
                    $dialog.close();
                }, { once: true });
            });
        }
    });
});