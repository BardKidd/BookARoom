{
  /* <reference types="cypress" />; */
}

describe("首頁", () => {
  beforeEach(() => console.log("---- Test Start! ----"));
  it("首頁 ing", () => {
    cy.visit("/");
  });

  it("點擊第一個房間", () => {
    cy.get(".homepageConfiguration_main_context_thumbnail")
      .children(".thumbnail:eq(0)")
      .click("center");
  });

  it("選擇日期1", () => {
    cy.get(".xmx-calendar-panel-date:eq(0)")
      .children(".xmx-calendar-content")
      .children(".xmx-table-date")
      .children("tbody")
      .children(".xmx-date-row")
      .children("td[title='2021-05-01']")
      .click("center");
  });

  it("選擇日期2", () => {
    cy.get(".xmx-calendar-panel-date:eq(1)")
      .children(".xmx-calendar-content")
      .children(".xmx-table-date")
      .children("tbody")
      .children(".xmx-date-row")
      .children("td[title='2021-05-08']")
      .click("center");
  });

  it("Booking now", () => {
    cy.get(".bookingBtn_now").click("center");
  });

  it("name", () => {
    cy.get("input[id='formName']")
      .click("center")
      .type("林霈文");
  });

  it("tel", () => {
    cy.get("input[id='formTel']")
      .click("center")
      .type("0925018756");
  });

  it("send", () => {
    cy.get(".form_submit").click("center");
    cy.wait(1000);
  });
  it("close modal", () => {
    cy.wait(1000);
    cy.get(".orderCheckBox_cancel")
      .scrollIntoView()
      .children("svg")
      .should("have.attr", "xmlns", "http://www.w3.org/2000/svg")
      .click("center");
    cy.wait(1000);
  });

  it("close modal2", () => {
    cy.wait(1000);
    cy.get(".orderGrid_orderBox")
      .children("section:eq(1)")
      .children(".orderBox_cancel")
      .children("svg")
      .should("have.attr", "xmlns", "http://www.w3.org/2000/svg")
      .click();
  });
  it("goBack", () => {
    cy.wait(1000);
    cy.get(".bookRoom_back").click("center");
    cy.wait(1000);
  });
});
