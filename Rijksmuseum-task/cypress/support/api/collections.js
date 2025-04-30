/**
 * @name getCollection
 * 
 * This function is to get the collection with objects.
 * @param {string} involvedMaker - object needs to be made by this agent. Case sensitive. E.g. Rembrandt+van+Rijn.
 * @param  {...string} options - request parameters, must be added as a string like this: "&imgonly=True".
 * @returns the response on the request with provided parameters.
 */
export function getCollection (involvedMaker, ...options) {
    const requestOpt = new String(options);
    return cy.api('GET', `/api/${Cypress.env('CULTURE')}/collection?key=${Cypress.env('API_KEY')}&involvedMaker=${involvedMaker}${requestOpt.replace(',', '')}`);
}
/**
 * @name getCollectionDetails
 * 
 * This function is to get the details of a specific collection's object.
 * @param {string} objectNumber - the identifier of the object (case-sensitive).
 * @param  {...string} options - request parameters, must be added as a string like this: "&format=json".
 * @returns the response on the request with provided parameters.
 */
export function getCollectionDetails (objectNumber, ...options) {
    const requestOpt = new String(options);
    return cy.api('GET', `/api/${Cypress.env('CULTURE')}/collection/${objectNumber}?key=${Cypress.env('API_KEY')}${requestOpt.replace(',', '')}`);
}