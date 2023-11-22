export const scrollToTop = () => {
    window.scroll({top: 0});
}

export const setPageTitle = (currentPage) => {
    document.title = `Reminisce Visuals - ${currentPage}`;
}