import { getCollection, getCollectionDetails } from "../support/api/collections";

describe('Rijksmuseum test spec', () => {
    it('Get the Collection, with not valid option "0" for the number of results per page parameter', () => {
        getCollection("Rembrandt+van+Rijn", "&ps=0").then((response) => {
            expect(response.status).to.be.eq(200);
            expect(response.body.artObjects).to.exist
            expect(response.body.artObjects.length).to.not.be.eq(0);
        })
    })
    it('Get the Collection, with valid option "1" for the number of results per page parameter', () => {
        getCollection("Rembrandt+van+Rijn", "&ps=1").then((response) => {
            expect(response.status).to.be.eq(200);
            expect(response.body.artObjects).to.exist
            expect(response.body.artObjects.length).to.be.eq(1);
        })
    })
    it('Get the Collection, with valid option "50" for the number of results per page parameter', () => {
        getCollection("Rembrandt+van+Rijn", "&ps=50").then((response) => {
            expect(response.status).to.be.eq(200);
            expect(response.body.artObjects).to.exist
            expect(response.body.artObjects.length).to.be.eq(50);
        })
    })
    it('Get the Collection, with valid option "100" for the number of results per page parameter', () => {
        getCollection("Rembrandt+van+Rijn", "&ps=100").then((response) => {
            expect(response.status).to.be.eq(200);
            expect(response.body.artObjects).to.exist
            expect(response.body.artObjects.length).to.be.eq(100);
        })
    })
    it('Get the Collection, with not valid option "101" for the number of results per page parameter', () => {
        getCollection("Rembrandt+van+Rijn", "&ps=101").then((response) => {
            expect(response.status).to.be.eq(200);
            expect(response.body.artObjects).to.exist
            expect(response.body.artObjects.length).to.not.be.eq(101);
        })
    })
    it("Get the collection's object details with valid object number", () => {
        const objNum = "SK-C-5";
        getCollectionDetails(objNum).then((response) => {
            expect(response.status).to.be.eq(200);
            expect(response.body.artObject.objectNumber).to.be.eq(objNum);
            expect(response.body.artObject.language).to.be.eq(Cypress.env('CULTURE'));
            expect(response.body.artObject.title).to.be.eq("The Night Watch Militia Company of District II under the Command of Captain Frans Banninck Cocq");
            expect(response.body.artObject.webImage).to.exist
            //This is just an example, the object structure could be checked with the JSON schema!
        })
    })
})