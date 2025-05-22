export const fecha = () => {
    const fechaActual = new Date()
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        weekday: 'long'
    }
    const formatearFecha = fechaActual.toLocaleDateString('es-AR', opciones)
    const capitalizarFecha = (str) => str.charAt(0).toUpperCase() + str.slice(1)
    return capitalizarFecha(formatearFecha)
}

export const generarSlug = text =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\b(?!\d)\w{1,2}\b/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    

export function cleanText(text) {
    // elimina <p> al comienzo de la cadena y </p> al final de la cadena
    //text = text.replace(/^<p>/, '').replace(/<\/p>$/, '');

    //text = text.replace(/contenteditable/g, "")
    
    // elimina todo lo contenido en etiqueta span
    text = text.replace(/<span[^>]*>[\s\S]*?<\/span>/g, ''); 

    // elimina todo lo contenido en etiqueta a
    text = text.replace(/<div[^>]*>[\s\S]*?<\/div>/g, '');

    // elimina todas las etiquetas html y lo que hay dentro de ellas, excepto <p> y </p> y H2
    text = text.replace(/<(?!\/?(p|h2))[^>]+>/g, '');

    text= text.replace(/►/g, '')

    // elimina parrafos vacios
    text = text.replace(/<p>\s*<\/p>/g, '');

    //elimina las cadenas que comiencen con > y teriminen con .jpg, conservando >
    //text = text.replace(/>(.*?)\.jpg/g, ">")

    //text = text.replace(/\.jpg.*?\s/g, " ");

    //text = text.replace(/^[^<]+|[^>]+$/g, '')
    
    return text;
  }

  /* export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
} */

export const formatearFecha = cadena => {
  const dia = cadena.slice(0, 2);
  const mes = cadena.slice(2, 4);
  const anio = cadena.slice(4, 8);
  const hora = cadena.slice(8, 10);
  const minutos = cadena.slice(10, 12);
  
  const fecha = new Date(`${anio}-${mes}-${dia}`);
  const nombreMes = fecha.toLocaleString('es-ES', { month: 'long' });
  
  const nuevaCadena = `${dia} de ${nombreMes} de ${anio} - ${hora}.${minutos}`;
  
  return nuevaCadena;
}

