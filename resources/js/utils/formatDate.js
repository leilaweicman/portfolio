export const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const month = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date);
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${date.getFullYear()}`;
};