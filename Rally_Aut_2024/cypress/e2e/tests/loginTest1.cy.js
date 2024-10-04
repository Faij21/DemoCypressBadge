/// <reference types="cypress"/>

import { LoginActionPage } from "../actions/loginActionPage";

describe('Login test suite', () => {

  it('User login test', () => {
    cy.visit('https://coderbyte.com/profile/usergq0vtldjb');  
    cy.contains('settings').click(); 
    cy.url().should('include', '/settings');
   });
  });