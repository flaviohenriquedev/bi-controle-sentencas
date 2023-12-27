export function openModal(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.remove('invisible', 'opacity-0');
        element.classList.add('visible', 'opacity-100');
    }
}

export function closeModal(id: string ) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.remove('visible', 'opacity-100');
        element.classList.add('invisible', 'opacity-0');
    }
}
