# Graph Report - .  (2026-04-23)

## Corpus Check
- Corpus is ~1,801 words - fits in a single context window. You may not need a graph.

## Summary
- 8 nodes · 2 edges · 6 communities detected
- Extraction: 50% EXTRACTED · 50% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 1,000 input · 200 output

## Community Hubs (Navigation)
- [[_COMMUNITY_GSD Core|GSD Core]]
- [[_COMMUNITY_Context Management|Context Management]]
- [[_COMMUNITY_Anti Patterns|Anti Patterns]]
- [[_COMMUNITY_Commit Rules|Commit Rules]]
- [[_COMMUNITY_Resume Candidate|Resume Candidate]]
- [[_COMMUNITY_WanderGuide Project|WanderGuide Project]]

## God Nodes (most connected - your core abstractions)
1. `GSD Core Philosophy` - 1 edges
2. `Context Engineering` - 1 edges
3. `GSD Core Protocol` - 1 edges
4. `Context Management` - 1 edges
5. `GSD Anti Patterns` - 0 edges
6. `Commit Conventions` - 0 edges
7. `Krishna Sahu` - 0 edges
8. `WanderGuide Project` - 0 edges

## Surprising Connections (you probably didn't know these)
- `GSD Core Protocol` --conceptually_related_to--> `GSD Core Philosophy`  [INFERRED]
  PROJECT_RULES.md → GSD-STYLE.md
- `Context Engineering` --conceptually_related_to--> `Context Management`  [EXTRACTED]
  GSD-STYLE.md → PROJECT_RULES.md

## Communities

### Community 0 - "GSD Core"
Cohesion: 1.0
Nodes (2): GSD Core Philosophy, GSD Core Protocol

### Community 1 - "Context Management"
Cohesion: 1.0
Nodes (2): Context Engineering, Context Management

### Community 2 - "Anti Patterns"
Cohesion: 1.0
Nodes (1): GSD Anti Patterns

### Community 3 - "Commit Rules"
Cohesion: 1.0
Nodes (1): Commit Conventions

### Community 4 - "Resume Candidate"
Cohesion: 1.0
Nodes (1): Krishna Sahu

### Community 5 - "WanderGuide Project"
Cohesion: 1.0
Nodes (1): WanderGuide Project

## Knowledge Gaps
- **8 isolated node(s):** `GSD Core Philosophy`, `Context Engineering`, `GSD Anti Patterns`, `GSD Core Protocol`, `Context Management` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `GSD Core`** (2 nodes): `GSD Core Philosophy`, `GSD Core Protocol`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Context Management`** (2 nodes): `Context Engineering`, `Context Management`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Anti Patterns`** (1 nodes): `GSD Anti Patterns`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Commit Rules`** (1 nodes): `Commit Conventions`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Resume Candidate`** (1 nodes): `Krishna Sahu`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `WanderGuide Project`** (1 nodes): `WanderGuide Project`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `GSD Core Philosophy`, `Context Engineering`, `GSD Anti Patterns` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._