function getImageUrl(img) {
  const baseUrl = import.meta.env.VITE_SUPABASE;

  if (!img) {
    return "https://dummyimage.com/600x300/cccccc/555555&text=Imagen+no+disponible";
  }

  const isFullUrl = /^http(s)?:\/\//.test(img);
  return isFullUrl ? img : `${baseUrl}/PetImages/${img}`;
}

function getShelterImageUrl(img) {
  const baseUrl = import.meta.env.VITE_SUPABASE;

  if (!img) {
    return "https://dummyimage.com/600x300/cccccc/555555&text=Imagen+no+disponible";
  }

  const isFullUrl = /^http(s)?:\/\//.test(img);
  return isFullUrl ? img : `${baseUrl}/ShelterImages/${img}`;
}

export default { getImageUrl, getShelterImageUrl };
