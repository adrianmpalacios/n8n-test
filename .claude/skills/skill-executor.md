# 🚀 Skill Executor - Available Skills Guide

This file provides access to installed skill libraries:

## 📚 Available Skill Libraries

### Antigravity Awesome Skills (1,400+)
**Location:** `.claude/skills/antigravity/`

#### Brainstorming & Ideation
- **How to use:** `/brainstorming "your topic or problem"`
- **Example:** `/brainstorming "How to improve API performance"`

#### Debugging & Troubleshooting
- **How to use:** `/debugging "describe the error or issue"`
- **Example:** `/debugging "My TypeScript code has type errors"`

#### Testing & Quality Assurance
- **How to use:** `/testing "what needs testing"`
- **Example:** `/testing "Create tests for user authentication"`

#### Security & Compliance
- **How to use:** `/security-audit "what to review"`
- **Example:** `/security-audit "Review this API endpoint for vulnerabilities"`

#### Infrastructure & DevOps
- **How to use:** `/devops "your infrastructure question"`
- **Example:** `/devops "How to set up CI/CD pipeline"`

#### Code Review & Refactoring
- **How to use:** `/code-review "paste your code"`
- **Example:** `/code-review "Review this function for improvements"`

### Claude Memory (claude-mem)
**Location:** `.claude/skills/claude-mem/`

#### Memory Management
- **How to use:** `/memory "save or recall information"`
- **Example:** `/memory "Remember that we use pnpm in this project"`

---

## How to Use These Skills

### Method 1: Direct Instruction
Simply type in the chat using the patterns above:
```
/brainstorming "create an API design for a user management system"
```

### Method 2: Copy-Paste Instructions
The full SKILL.md files are available in the local directories. Find the specific skill and use its instructions directly.

### Method 3: Search for Specific Skills
```bash
# Find all available skills
ls /home/user/n8n-test/.claude/skills/antigravity/ | grep -i "skill\|prompt"

# Search for a specific topic
grep -r "brainstorm" /home/user/n8n-test/.claude/skills/antigravity/ --include="*.md"
```

---

## Full Catalog Access

For a complete list of all 1,400+ skills, check:
- `antigravity/CATALOG.md` - Full skill directory
- `antigravity/README.md` - Getting started guide
- `claude-mem/CLAUDE.md` - Memory skill documentation

---

## Examples

### Example 1: Brainstorming
```
/brainstorming "Design a new feature for monitoring system health"
```

### Example 2: Debugging
```
/debugging "Error: Cannot find module 'express' in Node.js"
```

### Example 3: Code Review
```
/code-review "Review this React component for performance"
```

### Example 4: Security Audit
```
/security-audit "Check if this password reset flow is secure"
```

---

**Ready to use!** Try one of the skill commands above. 🎯
