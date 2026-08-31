# Architecture Decision Records (ADRs)

## ADR-001: Local Workspace Skills Installation
- **Date**: 2026-08-31
- **Context**: User requested downloading relevant skills for a 3D English teacher portfolio specifically for this project folder only.
- **Decision**: Installed 25 curated skills into `.agents/skills/` covering two core domains:
  1. Creative WebGL, kinetic typography, and scrollytelling from `MengTo/skills`.
  2. Core 3D engine mechanics (Three.js fundamentals, loaders, lighting, shaders, interaction) from `CloudAI-X/threejs-skills`.
- **Consequences**: Skills are scoped locally to `d:/Anti Projects/MR Ahmed Samir` without cluttering global configs, ready for progressive disclosure.
