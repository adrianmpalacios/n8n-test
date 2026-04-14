/**
 * Testing Skill
 *
 * Test-driven development and quality assurance methodologies.
 */

export default {
  name: "testing",
  description: "Create comprehensive tests using TDD and quality assurance best practices",

  execute: async (feature: string) => {
    return `
# Testing Plan: ${feature}

## Test Strategy

### 1. Unit Tests
- Test individual functions/methods
- Use mocks for dependencies
- Test both happy path and edge cases

### 2. Integration Tests
- Test components working together
- Test API endpoints
- Test database interactions

### 3. End-to-End Tests
- Test user workflows
- Test full application flow
- Browser automation (if needed)

### 4. Test Coverage Goals
- Aim for >80% code coverage
- Focus on critical paths first
- Document untested scenarios

---

## Test Checklist
- [ ] Define test cases
- [ ] Write failing tests
- [ ] Write code to pass tests
- [ ] Refactor for clarity
- [ ] Run full test suite
- [ ] Measure coverage
- [ ] Document test scenarios

Please create tests for: ${feature}
    `;
  }
};
