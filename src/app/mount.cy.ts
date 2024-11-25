
import { WithDirectivesComponent } from './components/with-directives.component'

describe('angular mount', () => {
  it('pushes CommonModule into component', () => {
    cy.mount(WithDirectivesComponent)
    // directives do not work because CommonModule is not injected
    cy.get('ul').should('exist')
    cy.get('li').should('have.length', 3)

    cy.get('button').click()

    cy.get('ul').should('not.exist')
  })
})
