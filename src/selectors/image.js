/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve l'annonce voulue dans la liste des annonces
 * @param {Array} associationpage - toutes les annonces
 * @param {string} searchedSlug - le slug de l'annonce recherchée
 * @return {Object} - L'annonce trouvée
 */
 export function findImage(imagePages, searchedSlug) {
    const imagePage = imagePages.find((testedImagePage) => {
      return testedImagePage.slug === searchedSlug;
    });
    return imagePage;
  }