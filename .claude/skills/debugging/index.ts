/**
 * Debugging Skill
 *
 * Systematic debugging methodology for identifying and fixing bugs.
 */

export default {
  name: "debugging",
  description: "Debug code issues using systematic troubleshooting techniques",

  execute: async (problem: string) => {
    return `
# Debugging Session

## Problem Description
${problem}

## Debugging Framework: STOP

### Step 1: Simplify
- Isolate the problem
- Create minimal reproducible example
- Remove unrelated code

### Step 2: Trace
- Add logging/breakpoints
- Follow execution flow
- Identify where it breaks

### Step 3: Observe
- Check actual vs expected values
- Look for patterns
- Review error messages

### Step 4: Fix
- Apply minimal fix first
- Test the fix
- Refactor if needed

---

Please follow this framework to debug the issue above. Start with Step 1.
    `;
  }
};
