/**
 * Brainstorming Skill
 *
 * Use this skill to generate creative ideas and innovative solutions.
 * Leverages the antigravity-awesome-skills brainstorming methodology.
 */

export default {
  name: "brainstorming",
  description: "Generate creative ideas and innovative solutions using structured brainstorming techniques",

  // When invoked with /brainstorming "topic"
  execute: async (topic: string) => {
    return `
# Brainstorming Session: ${topic}

## Framework: SCAMPER
- **S**ubstitute - What can you substitute or replace?
- **C**ombine - What can you combine with other ideas?
- **A**dapt - What can you adapt from other domains?
- **M**odify - What can you modify or change?
- **P**ut to another use - What else could this be used for?
- **E**liminate - What can you remove or simplify?
- **R**everse - What can you reverse or do opposite?

## Your Topic
${topic}

Please provide ideas across each SCAMPER dimension above.
    `;
  }
};
