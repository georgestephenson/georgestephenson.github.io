---
layout: post
title: "Start at the end: learning full stack development with AI"
description: "Build the whole project with an AI coding agent first, then learn full stack development by taking it apart - the stack, the prompts and the tutoring technique."
date: 2026-07-28
category: software
tags: [software, full stack development, spec-driven development, didactic prompting]
image:
  path: /img/posts/bestbooksguide.webp
  width: 1469
  height: 628
  alt: "The bestbooks.guide home page"
mermaid: true
references:
  - id: github-spec-kit
    author: GitHub
    title: "Spec-driven development with AI: Get started with a new open source toolkit"
    year: 2025
    url: https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/
    note: "GitHub's open source toolkit for spec-driven development, supporting 30+ coding agents. The premise: \"specifications don't serve code, code serves specifications\"."
  - id: claude-code-plan-mode
    author: Anthropic
    title: "Choose a permission mode"
    year: 2026
    url: https://code.claude.com/docs/en/permission-modes
    note: "Plan mode is enforced by the harness rather than by the prompt: Claude can read, search and run tests, but cannot edit files until you approve the plan."
  - id: boring-technology
    author: Dan McKinley
    title: "Choose Boring Technology"
    year: 2015
    url: https://boringtechnology.club/
    note: "The case for spending your limited \"innovation tokens\" deliberately: a stack choice carries a long tail of operational cost."
  - id: accelerate
    author: "Nicole Forsgren, Jez Humble and Gene Kim"
    title: "Accelerate: The Science of Lean Software and DevOps"
    publisher: IT Revolution Press
    year: 2018
    url: https://itrevolution.com/product/accelerate/
    note: "Four years of DORA survey data finding that delivery capability — version control, automated testing, continuous delivery, loosely coupled architecture — predicts organisational performance."
  - id: claude-code-memory
    author: Anthropic
    title: "How Claude remembers your project"
    year: 2026
    url: https://code.claude.com/docs/en/memory
    note: "The CLAUDE.md reference. Keep it under 200 lines, prefer \"Use 2-space indentation\" to \"format code properly\", and remove contradictions."
  - id: nygard-adr
    author: Michael Nygard
    title: "Documenting Architecture Decisions"
    year: 2011
    url: https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions
    note: "The post that introduced the architecture decision record: write down the decision and its context, both of which outlive the code implementing them."
  - id: anthropic-prompt-engineering
    author: Anthropic
    title: "Prompt engineering overview"
    year: 2026
    url: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview
    note: "The guide opens by telling you not to start there: define your success criteria and build a way to test against them first."
  - id: claude-code-skills
    author: Anthropic
    title: "Extend Claude with skills"
    year: 2026
    url: https://code.claude.com/docs/en/skills
    note: "A SKILL.md packages a repeatable procedure and, unlike CLAUDE.md, loads only when it is used. Facts belong in CLAUDE.md, procedures in a skill."
  - id: clean-architecture
    author: Robert C. Martin
    title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design"
    publisher: Prentice Hall
    year: 2017
    url: https://www.informit.com/store/clean-architecture-a-craftsmans-guide-to-software-structure-9780134494166
    note: "The source of the dependency rule: source code dependencies point inwards, so the business rules know nothing about the database, the web framework or the UI."
  - id: ddia
    author: "Martin Kleppmann and Chris Riccomini"
    title: "Designing Data-Intensive Applications, 2nd Edition"
    publisher: "O'Reilly Media"
    year: 2026
    url: https://martin.kleppmann.com/2026/03/24/designing-data-intensive-applications-2e.html
    note: "Subtitled \"The Big Ideas Behind Reliable, Scalable, and Maintainable Systems\". Cited here for its treatment of nonfunctional requirements: performance, reliability, scalability and maintainability."
  - id: owasp-top-ten
    author: OWASP
    title: "OWASP Top 10"
    url: https://owasp.org/www-project-top-ten/
    note: "The standard awareness document for web application security. Every item on it is a design or configuration decision rather than a syntax error."
  - id: so-survey-2025
    author: Stack Overflow
    title: "2025 Developer Survey: AI"
    year: 2025
    url: https://survey.stackoverflow.co/2025/ai
    note: "66% of developers name \"AI solutions that are almost right, but not quite\" as their biggest frustration, 45% say debugging AI-generated code is more time-consuming than expected, 46% distrust its accuracy against 33% who trust it, and 20% report becoming less confident in their own problem-solving."
  - id: bjork-desirable-difficulties
    author: "Elizabeth L. Bjork and Robert A. Bjork"
    title: "Making Things Hard on Yourself, But in a Good Way: Creating Desirable Difficulties to Enhance Learning"
    publisher: "Worth Publishers, in Psychology and the Real World"
    year: 2011
    url: https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/04/EBjork_RBjork_2011.pdf
    note: "The source of the term \"desirable difficulties\": conditions that slow study down often improve retention, and the fluency you feel while rereading is a poor predictor of what you will recall later."
  - id: gleick-genius
    author: James Gleick
    title: "Genius: The Life and Science of Richard Feynman"
    publisher: Pantheon Books
    year: 1992
    url: https://en.wikipedia.org/wiki/Genius:_The_Life_and_Science_of_Richard_Feynman
    note: "The source of the \"Notebook of Things I Don't Know About\" episode: before his Princeton oral exam Feynman took each branch of physics apart and rebuilt it in his own words."
  - id: dunlosky-2013
    author: "John Dunlosky, Katherine A. Rawson, Elizabeth J. Marsh, Mitchell J. Nathan and Daniel T. Willingham"
    title: "Improving Students' Learning With Effective Learning Techniques: Promising Directions From Cognitive and Educational Psychology"
    publisher: "Psychological Science in the Public Interest, 14(1)"
    year: 2013
    url: https://www.psychologicalscience.org/publications/journals/pspi/learning-techniques.html
    note: "Ten study techniques graded on the evidence behind them. Only practice testing and distributed practice rated high utility; summarisation, highlighting and rereading all rated low."
  - id: mcilroy-unix
    author: "M. Douglas McIlroy, E. N. Pinson and B. A. Tague"
    title: "UNIX Time-Sharing System: Foreword"
    publisher: "Bell System Technical Journal, 57(6)"
    year: 1978
    url: https://danluu.com/mcilroy-unix/
    note: "The primary source for the Unix philosophy, from the man who invented pipes: \"Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface.\""
  - id: tsoding-graphics
    author: Tsoding
    title: "Graphics API is irrelevant"
    year: 2025
    url: https://www.youtube.com/watch?v=xNX9H_ZkfNE
    note: "Animation generated by writing PPM image frames by hand in C++, with no graphics library involved, and a compatibility layer that runs GPU shaders on the CPU to identical effect."
  - id: metr-time-horizons
    author: METR
    title: "Time Horizon 1.1"
    year: 2026
    url: https://metr.org/blog/2026-1-29-time-horizon-1-1/
    note: "The length of task a model can finish with 50% reliability doubles every 196 days measured across all six years, but every 89 days measured from 2024 onwards. The trend is not just continuing, it is steepening."
  - id: package-hallucination
    author: Aleksandr Churilov
    title: "The Range Shrinks, the Threat Remains: Re-evaluating LLM Package Hallucinations on the 2026 Frontier-Model Cohort"
    publisher: "arXiv preprint"
    year: 2026
    url: https://arxiv.org/abs/2605.17062
    note: "A replication of Spracklen et al. (USENIX Security '25) on five 2026 models. The worst case has collapsed — 21.7% on 2025 open-source models down to 6.10% — while the best case has not improved on 2024, and 53 hallucinated package names remained registrable by an attacker."
---

In the olden days, when someone had an idea, they started coding it from line one. With AI coding agents, you can start at the end by building the entire project first. Bootstrap a project that interests you, then use it as your own personal sandbox. Learn by tweaking and tinkering, rather than spending hours setting up and getting stuck.

<!--more-->

In this article, I'll take you through an example modern tech stack project, of the kind you might want to learn from across the frontend, backend, database and infrastructure, using the [Full Stack Developer](https://roadmap.sh/full-stack) roadmap as a model. However, the principles apply to any stack and any project you can think of.

For my project, I decided on a simple idea called [bestbooks.guide](https://bestbooks.guide/) ([GitHub](https://github.com/georgestephenson/best-books-guide)). It's a simple interactive website, with basic user features, like tracking which books you've read{% include sidenote.html text="Unfortunately, registration is disabled until AWS approve my request to send production emails via SES." %}. It's easy to get it up and running quickly, it's something I'm interested in, and it can be extended in any number of ways.

{% include figure.html
   src="/img/posts/bestbooksguide.webp"
   alt="The bestbooks.guide home page"
   width="1469" height="628"
   caption="The front page of bestbooks.guide" %}

See [Appendix A: Architecture Diagram](#appendix-a-architecture-diagram) for a detailed look at the bestbooks.guide tech stack.

## Bootstrapping your full stack project

If you have any experience with software development, you probably know how much of a problem [yak shaving](https://en.wiktionary.org/wiki/yak_shaving) is. Given the title of this blog post, I didn't want to start by sending you down several rabbit holes, but depending on your experience level, it will help a lot to be familiar with these topics:

- [Appendix B: Learning patterns](#appendix-b-learning-patterns)
- [Appendix C: Roadmaps](#appendix-c-roadmaps)
- [Appendix D: How to use a computer](#appendix-d-how-to-use-a-computer)
- [Appendix E: AI coding tools](#appendix-e-ai-coding-tools)

I'm actually trying to help. My proposal is that we can start the [Full Stack Developer](https://roadmap.sh/full-stack) roadmap by first completing it, using AI coding agents. Then we can dive deeper into each of the key technologies making up this stack, which includes React, Node.js, PostgreSQL, AWS and Terraform.

If you're comfortable, ask your AI coding agent or chatbot for suitable project ideas using the full tech stack in the roadmap. Ask it for ideas that are quick to ship and have the least chores to build and maintain{% include sidenote.html text="Games can be a bad idea for practising code. The code might be simple, but then you spend three months on art assets, gameplay and level design. This is no longer a targeted learning exercise, it's a multi-disciplinary and time-consuming passion project. Understand what you're getting into." %}. Pick the idea that most excites you.

If you need smaller steps, look at the roadmap's checkpoints. Ask Claude for ideas for a simple HTML/CSS static website, that demonstrates all the key features of HTML and CSS, without requiring other technologies. A blog is simple and useful.

### Spec-Driven Development (SDD)

It's not strictly required, but to get the most out of AI I recommend following _spec-driven development_ (SDD). I like to call it _plan-first development_, because you write a plan first before you code anything.

This is emerging as one of the more widely adopted techniques in AI-assisted software development{% include cite.html id="github-spec-kit" %}. Claude Code comes with a Plan Mode{% include cite.html id="claude-code-plan-mode" %} for precisely this reason, and it's intended that you use it to draft an agreed plan before you commit to a specific implementation.

I don't want you to keep the plan private between yourself and Claude though: I want you to commit the plan to your project, in a `/docs` folder, living side-by-side with the code.

There are a few reasons I recommend it for our purposes:

- You can get involved in understanding plans before you can write any code. This is part of your learning journey. You can ask questions about the plan directly, and why things are done that way.
- Remember I said I like to use markdown files to take notes? Well, AI coding agents like them too. Claude Code can read the markdown files in our repository to enhance its context and better understand our intentions. Chat sessions are short-lived, and get more expensive the longer they are. Shifting the context into the project means it can be reused as and when it's relevant to do so.

For bestbooks.guide, here was the exact prompt I used, after creating a new GitHub repository:

> I've started this repo for a website project that will be a curated and opinionated list of best books in different subjects.
>
> Users can login and track their reading progress, rate and leave reviews, that sort of thing.
>
> Could you help me by starting to write a design document or suite of documents. You can interview me and ask me questions back to start planning the key features
>
> Note: (this isn't for putting in the document, this is between you and me) this is a portfolio project and to practice the various parts of the tech stack it uses
>
> Here's what I want the tech stack to look like:
> - Repo hosted in GitHub
> - React and Tailwind CSS
> - Node.js backend
> - PostgreSQL database
> - RESTful APIs
> - JWT Auth
> - Redis
> - To be hosted in AWS: want to use Route53, SES, EC2, VPC, S3
> - Monitoring in Monit
> - GitHub Actions
> - Ansible configuration management
> - Terraform
> - Automated testing throughout with CI gates and excellent coverage
>
> I want this to be well architected and follow best practices in July 2026 (research this) but I also want it be simple to begin so we can ship it ASAP, and built with clean architecture so it's easily extensible.

This was enough to get Claude Code to add a `/docs` folder with a list of design documents categorised by area: `01-product.md`, `02-architecture.md`, `03-data-model.md` etc. For example, here's the proposed repository layout in `02-architecture.md`:

```
best-books-guide/
├── apps/
│   ├── web/                 # React + Vite + Tailwind SPA
│   └── api/                 # Fastify + Drizzle (see layering below)
├── packages/
│   └── shared/              # API contract types, shared constants, slug helpers
├── infra/
│   ├── terraform/
│   │   ├── bootstrap/       # state bucket + GitHub OIDC role (applied once, locally)
│   │   ├── envs/prod/       # root module for production
│   │   └── modules/         # network, compute, dns, email, storage
│   └── ansible/
│       ├── inventories/prod/
│       ├── roles/           # common, hardening, nodejs, postgresql, redis, nginx, monit, app
│       └── playbooks/       # site.yml (converge host), deploy.yml (app release)
├── docs/                    # this suite + adr/
├── .github/workflows/       # ci.yml, deploy.yml, terraform.yml, codeql.yml
├── CLAUDE.md  TODO.md  README.md  LICENSE
```

You don't need to understand everything that's going on here. But you can read it and contribute whatever opinion and understanding that you do have. You can ask questions, and Claude will answer:

> What does that do?

> Why are we doing that way?

> Is this modern best practice in [current month]? Can you research it?

> Are there any better alternatives?

Once you're happy with the plan, check also that Claude is happy with it too, knowing what it knows now. Then get Claude to update the `README.md` and `CLAUDE.md`.

Once that's done, ask Claude to fully implement it. It might take some time, and there will be a few steps requiring your intervention, like signing up for AWS. But that's it. With powerful enough models, you should be able to produce a finished working system with plan-first development.

### How much time it took

Building the web pages was really pretty straightforward. The part that required the most intervention and had the most churn was, predictably, the AWS infrastructure, in particular Ansible, running our web server on a real VM, which Claude Code has imperfect knowledge about.

I would argue that this is where [knowing how to use a computer](#appendix-d-how-to-use-a-computer) really comes into its own. Claude Code's interface - which is also the interface of competent developers - is shell commands, on your local machine using the AWS CLI, and via SSH. Not all of this is really "coding" but it is coding-adjacent, and understanding these fundamentals is enough to induce Claude into building a feature-complete system.

### Didactic prompting

You can now prompt your coding agent to act as your tutor. I call it didactic prompting - prompting an AI agent to teach you something, in an intentional and informative way, as if it were a teacher.

For example, take the [HTML](https://roadmap.sh/html) sub-roadmap. I can use my project to learn about any part of this, and do so in various different ways. If I wanted to learn about HTML definition lists, I could ask Claude:

> Give me a use case for HTML definition lists within my website

> Can you add a HTML definition list to my website, but intentionally make 5 errors? Then pass it to me to fix the errors, and score me after I've finished.

> Can you set me some tasks that involve adding HTML definition lists to my website, in increasing order of difficulty? Then mark how well I did afterwards.

You're only limited by your imagination when it comes to learning opportunities here. Once you complete the entire roadmap:

> Can you write an exam for me that tests my knowledge of https://roadmap.sh/html, using my website as a case study. The exam should include five sections: 
>   1. Multi-choice questions
>   2. Free-choice questions
>   3. "Correct the error" questions
>   4. Tasks to fix bugs in the website (add these in if you can't find any)
>   5. Tasks to add features to the website

The benefits of this approach compound each other:
- You already have a working system that you can use for anything
- As you learn more, you can add new features while learning, that are actually useful
- You can move on quickly to learning new topics, without getting bogged down in syntax errors and scaffolding problems

Hopefully this approach is both more fun and more informative.


## Common concerns

**If AI built all of it, then I don't understand any of it**

The key thing here is that we started at the end, by building a working system. But it wasn't the end after all, this was just the _starting point_. The start of your learning journey. What you've built is an incredibly rich artifact that you can study, learn from, and make your own: see [Appendix B: Learning patterns](#appendix-b-learning-patterns) and [Appendix C: Roadmaps](#appendix-c-roadmaps).

**This is not the AI I had in mind. I want to build AI systems, not just use AI tools to build websites**

[There are roadmaps for that](https://roadmap.sh/ai-engineer). My point in writing this article was to empower humans to still feel useful building things in a world where AI code generation has dramatically reduced the cost of writing code, whether or not the code is for an AI system. 

**If I let AI write the code for me, I don't feel like a real developer...**

This _is_ being a real developer in 2026. The truth is that scaffolding code isn't and never was that interesting. What _is_ interesting:

- Tech stack choices{% include cite.html id="boring-technology" %}
- Project structure, processes, workflows, and patterns{% include cite.html id="accelerate" %}
- Documentation - design documents, CLAUDE.md{% include cite.html id="claude-code-memory" %}, ADRs{% include cite.html id="nygard-adr" %}
- Prompt engineering{% include cite.html id="anthropic-prompt-engineering" %}, SKILL.md{% include cite.html id="claude-code-skills" %}
- Clean architecture{% include cite.html id="clean-architecture" %}
- Performance{% include cite.html id="ddia" %}
- Security{% include cite.html id="owasp-top-ten" %}
- Reliability{% include cite.html id="ddia" %}
- Scalability{% include cite.html id="ddia" %}
- Maintainability{% include cite.html id="ddia" %}

This becomes part of your project creation process, and the more complex the project, the more thought you put into it. Once your project skeleton is in place, that's when you can practice coding the parts that really matter.

**I can't just bootstrap a large Kubernetes cluster that easily**

Distributed systems are an area of intense focus in modern software engineering, and also an area of intense complexity. You may want to start with a technology used in distributed systems, such as Kubernetes or Kafka, and deliberately use it for the wrong use case - a monolithic system, single instance, straight to production, etc. Once the skeleton is in place then you can practice how it scales into a distributed system, which becomes your exercise. Again we're bootstrapping the tech stack to get to the good part.

## Summary

I wanted to write this to inspire hope in new and existing software developers in the AI era. To ground ourselves in this new reality and embrace the new rapid techniques for code generation, while still being able to learn it and understand it.

These are some approaches for doing that, to have confidence that your time is not being wasted and you can still be useful.

The tech stack I've used is just an example, here are some other stacks you could apply this to:

<div class="table-scroll" role="region" aria-label="Alternative full stack combinations" tabindex="0" markdown="1">

| Stack | Frontend | Backend | Data | Infra | Best for |
|---|---|---|---|---|---|
| <img class="tech-icon" src="/img/icons/python.svg" alt="" width="22" height="22"><br>**Python + AI** | Reflex (Python) | FastAPI (Python) | PostgreSQL + pgvector | Modal + Fly.io | AI, ML and data-heavy products, in pure Python |
| <img class="tech-icon" src="/img/icons/dotnetcore.svg" alt="" width="22" height="22"> <img class="tech-icon" src="/img/icons/blazor.svg" alt="" width="22" height="22"><br>**.NET + Blazor** | Blazor (C#) | .NET | Azure SQL + EF Core | Azure Container Apps + Bicep | Enterprise apps in a single C# codebase |
| <img class="tech-icon" src="/img/icons/go.svg" alt="" width="22" height="22"> <img class="tech-icon" src="/img/icons/kubernetes.svg" alt="" width="22" height="22"><br>**Go + Kubernetes** | Vue + Nuxt + Tailwind | Go (Chi) | PostgreSQL + sqlc + Redis | GKE (Kubernetes) + Terraform | High-throughput microservices and cloud-native distributed systems |
| <img class="tech-icon tech-icon--invert" src="/img/icons/rust.svg" alt="" width="22" height="22"><br>**Rust full-stack** | Leptos (Rust) | Axum (Rust + Cargo) | PostgreSQL + SQLx | Fly.io | Maximum performance and memory safety |
| <img class="tech-icon" src="/img/icons/rails.svg" alt="" width="22" height="22"><br>**Ruby on Rails** | Hotwire (Turbo) + Tailwind | Rails (Ruby) | PostgreSQL + Redis | Kamal + Hetzner | A solo developer shipping a complete product fast |
| <img class="tech-icon" src="/img/icons/clojure.svg" alt="" width="22" height="22"><br>**Clojure** | ClojureScript + Reagent | Ring (Clojure) | Datomic | AWS + CloudFormation | REPL-driven, functional, data-centric |

</div>

You could try building any or all of these. See how they compare with each other and what you learn along the way{% include sidenote.html text="If you're not that good at using a computer, building all of these is a guaranteed way to learn how to use a computer." %}. However, it doesn't have to be a full end-to-end stack. You can apply these principles to any set of technologies you're learning. My examples just demonstrate the power of deep-diving into heavy stacks.

In the AI world human effort still has its place. For example, I wrote this article myself - AI helped with the mermaid diagrams, the cool footnotes feature, and reviewed it all afterwards. But these are my words, and writing it gives me some comfort I don't need Claude for _everything_. Prompt writing is writing, after all, and knowing how to write is more valuable than ever.

## Appendix A: Architecture diagram

```mermaid
flowchart TB
    U([Browser])
    OL[Open Library API]
    CI["<img src='/img/icons/githubactions.svg' width='20' height='20'/> <img src='/img/icons/terraform.svg' width='20' height='20'/> <img class='tech-icon--invert' src='/img/icons/ansible.svg' width='20' height='20'/><br/>GitHub Actions<br/>test · Terraform · Ansible deploy"]

    subgraph AWS["AWS — provisioned by Terraform"]
        R53[Route 53<br/>DNS]
        SES[Amazon SES<br/>transactional email]
        S3[(S3<br/>backups · release artifacts)]

        subgraph EC2["EC2 — one Ubuntu host, configured by Ansible"]
            N["<img src='/img/icons/nginx.svg' width='20' height='20'/><br/>Nginx<br/>TLS · static SPA · /api proxy"]
            W["<img src='/img/icons/react.svg' width='20' height='20'/> <img src='/img/icons/tailwindcss.svg' width='20' height='20'/> <img src='/img/icons/vitejs.svg' width='20' height='20'/><br/>React + Tailwind CSS<br/>Vite build"]
            A["<img class='tech-icon--invert' src='/img/icons/fastify.svg' width='20' height='20'/> <img src='/img/icons/nodejs.svg' width='20' height='20'/> <img src='/img/icons/typescript.svg' width='20' height='20'/><br/>Fastify<br/>Node.js + TypeScript"]
            P[("<img src='/img/icons/postgresql.svg' width='20' height='20'/><br/>PostgreSQL")]
            R[("<img src='/img/icons/redis.svg' width='20' height='20'/><br/>Redis")]
            MO[Monit]
        end
    end

    U -->|HTTPS| R53
    R53 --> N
    N --> W
    N -->|/api/v1/*| A
    A --> P
    A --> R
    A -->|email| SES
    A -->|book metadata| OL
    MO -. watches .-> A
    CI -->|deploy| EC2
    EC2 -. nightly backup .-> S3
```
{: data-caption="The bestbooks.guide tech stack: one host, behind Nginx, with AWS managed services either side"}

## Appendix B: Learning patterns

With the rate of progress of tech, software development requires lifelong learning, yet AI coding has made this process increasingly distressing{% include cite.html id="so-survey-2025" %}. Being able to generate limitless code is a good thing and a bad thing: there have never been more opportunities for learning, and yet more opportunities for complacency.

There are three main ways of learning that I think should be _combined_ to learn anything properly:

1. **Learning by observing** - watching lectures or courses on YouTube, reading textbooks, listening to podcasts, I group these all into one category. The material should be substantive and good quality, which will require deep mental focus and effort. If the material is too easy, it could be a sign that it's oversimplifying things, which can lull you into a false sense of security and teach bad habits{% include cite.html id="bjork-desirable-difficulties" %}.
    - It is essential that you find high-quality, authoritative sources of information to learn from, so that you don't waste your time. Furthermore it should be engaging and intellectually meaningful to you so that you will actually complete it. Avoid "like and subscribe" engagement-farming YouTubers please.
    - It's also critical that you do not remain passive while absorbing the material, so that it is retained. This is where the other learning patterns come into play.
2. **Learning by writing** - what's come to be called the Feynman technique{% include cite.html id="gleick-genius" %}. Writing notes is an effective way to retain information, if done frequently, and used to test your own understanding{% include cite.html id="dunlosky-2013" %}. Write about what you're learning afterwards, and put it into your own words to verify you understand it.
    - As a software developer, I like using markdown `.md` files and GitHub for my note taking. This in itself is good practice for using version control systems and source repositories effectively. The added bonus is that your notes are fully backed up and have an immutable version history. You can track your progress this way. It can be private or public, if you'd like to hold yourself more accountable, but either way your efforts will be rewarded with an artefact that you should feel proud of producing.
    - Use notes to test your memory and form habits, not just to copy verbatim. Often the reference you are learning from is a better source of information than your own notes - the benefit is in writing them rather than their utility.
3. **Learning by doing** - putting things into practice is the final confirmation that you can do something. Some people like to jump to doing things immediately. That's a good conscientious instinct, but I would caution that for something as cerebral as software engineering, you need to combine it with theory and reading. While the point of this blog is to start at the end, we're not _finishing_ at the end.
    - If you're following a course or reading a textbook, _do the exercises_. In addition to writing notes, I like to fold exercise solutions into my markdown repositories too.
    - Start small and avoid heavy chores. If you get excited about a website or app idea that you want to build, think about how quickly you can ship it.

```mermaid
graph LR
    A[Learning by observing] -->|retained by| B[Learning by writing]
    B -->|practiced by| C[Learning by doing]
    C -->|enhanced by| A
```
{: data-caption="The learning circle"}

## Appendix C: Roadmaps

One great source of learning material is [roadmap.sh](https://roadmap.sh/).

- The roadmaps are deliberately comprehensive. Each roadmap demonstrates _all_ the key points to know about a role or skill, and lets you track your progress. You can be confident you've learned everything that matters, which comes to fruition when you're attending job interviews or designing architecture.
- While textbooks are a superb resource, they are linearly structured, even when they are designed to be references. That can be a little overwhelming. [roadmap.sh](https://roadmap.sh/) maps out a hierarchy of topics and learning resources, so you can see at a glance what you know and don't know about, then dive deeper into suggested resources interactively.

A good strategy for learning anything about software or computers is to pick the roadmap that fits what you want to learn, and then apply the learning strategy I have outlined above while you work through it. [roadmap.sh](https://roadmap.sh/) lets you track your progress, but no one is policing what you've actually done. 

Each node in a roadmap comes with example free resources. The idea is to complete one or two of these free resources, or find your own, applying all three learning patterns, then move onto the next node in the roadmap. Again I'd recommend making a repository that collects your notes, exercises and projects completed while learning the roadmap. This will help you to come up with your own "definition of done" that feels more meaningful than just reading to the end and clicking "Done".

For this article, I'm using the [Full Stack Developer](https://roadmap.sh/full-stack) roadmap. It's beginner-friendly and generalisable to many developers.

## Appendix D: How to use a computer

The focus of this article is on learning full stack dev by bootstrapping a project that interests you, with the power of AI coding agents. However, you are still required to use a computer, for the time being, at least. If you are new to software development, there may be some tasks I take for granted that seem impenetrable for you.

To remedy this I would recommend a dose of therapy using the [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy), and installing a [Unix-like](https://en.wikipedia.org/wiki/Unix-like) operating system on your desktop computer such as [Linux](https://en.wikipedia.org/wiki/Linux). Now, therapists trained in the Unix philosophy are hard to come by, and I might be accused of being sarcastic about all this. Thankfully you have options for home remedies:

- MIT's [Missing Semester of Your CS Education](https://missing.csail.mit.edu/) is a **fantastic** resource on how to use a computer. Now, although it's an introductory course, it _is_ designed for the world's brightest undergraduate computer science students. Try it first and see if it sticks, but don't be dismayed if this is still over your head.
- If you don't like Missing Semester, there are roadmaps on [roadmap.sh](https://roadmap.sh/) that cover the key skills we're interested in. Again, these are comprehensive roadmaps, so you don't need to fully complete these to get started. Try some of the free resources listed under the introductions in these roadmaps, or find your own:
    - [Linux](https://roadmap.sh/linux)
    - [Shell / Bash](https://roadmap.sh/shell-bash)
    - [Git and GitHub](https://roadmap.sh/git-github)

If you want to carry on using Windows desktop, installing [Visual Studio Code](https://code.visualstudio.com/) is a good first step{% include sidenote.html text="It would be remiss of me not to mention that you can also [install Linux within Windows using WSL](https://learn.microsoft.com/en-us/windows/wsl/install). However, my advice is to simplify your desktop for ease of use, and I don't think blending two different operating systems is the way to do that." %}. It's a powerful tool, lots of people use it, and you can get a lot done. Do some tutorials and learn how to use the terminal and git version control within this powerful ecosystem.

The reason I recommend Unix philosophy is that learning small, composable programs{% include cite.html id="mcilroy-unix" %} lends itself towards having a composable mind, with a skillset tailored for software engineering. Understanding the "everything is a file" approach for program interfaces makes seemingly impossible feats straightforward and understandable{% include cite.html id="tsoding-graphics" %}.

Understanding how to manipulate simple and composable programs compounds over time, because _this is literally how a coding agent harness like Claude Code works_. If you have started using Claude Code already and ever had the feeling that you have no idea WTF it is even doing, it is probably because you have missed the fundamental principles laid out above.

## Appendix E: AI coding tools

At the time of writing, we're in a period where AI models are advancing very rapidly. Models that a year or two ago were fairly rubbish at software engineering now have successors that are pretty good. Frontier models are astonishingly good{% include cite.html id="metr-time-horizons" %}.

I want to briefly mention the distinction between AI models, which are the mysterious enigmas where all the magic happens, and agentic coding harnesses, which are handwritten tools that babysit and coax the model into following a useful agentic workflow that persists over time. For example, Claude Opus is a model, and Claude Code is a harness.

If you're new to this, I personally recommend Claude Code at the time of writing. The CLI tool is good, so is the VS Code plugin and the Claude Desktop app. However, there are several other competitive tools, like GitHub Copilot and Cursor, and the best tool is likely to change over time. There is a good [Claude Code roadmap](https://roadmap.sh/claude-code) that will guide you through all its features. You don't need to know everthing, but understanding what is meant by _context window management_ is a good start. I have completed this roadmap myself and recommend it.

In terms of models, we're at a point where paying more money for a better model will get much better results{% include sidenote.html text="In the near future, I think open weight models that you run on your own laptop will be more than good enough. We've gone back to the mainframe computer era and we will enter the portable era again soon. In fact you can already do this, but we're not quite at the point where it's the best or most cost-effective option (a good GPU will set you back a bit)." %}. You may be aware that coding agents can make mistakes and hallucinate{% include cite.html id="package-hallucination" %}. This has rapidly diminished as models have gotten better. If you've opted for Claude Code, I'd recommend you use it with the Opus or Fable models rather than Sonnet for this reason. A standard Pro subscription will get you a good amount of use out of Opus, but pay for what you can afford.